"use client";

import { type FC, type PropsWithChildren, useState } from "react";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import {
    type PaletteColorOptions,
    ThemeProvider,
    alpha,
    createTheme,
    getContrastRatio,
} from "@mui/material/styles";
import { useServerInsertedHTML } from "next/navigation";

import { headingText, pullquoteText } from "@/styles/font";

const violetBase = "#901CB0";
const violetMain = alpha(violetBase, 0.7);

const primary: PaletteColorOptions = {
    main: violetMain,
    light: alpha(violetBase, 0.5),
    dark: alpha(violetBase, 0.9),
    contrastText: getContrastRatio(violetMain, "#fff") > 4.5 ? "#fff" : "#111",
};

const theme = createTheme({
    typography: {
        fontFamily: pullquoteText.style.fontFamily,
        fontSize: 16,
        fontWeightRegular: 500,
    },
    shape: {
        borderRadius: 0,
    },

    components: {
        MuiTextField: {
            defaultProps: {
                size: "small",
            },
            styleOverrides: {
                root: {
                    "& .MuiFormLabel-root": {
                        fontFamily: headingText.style.fontFamily,
                        textTransform: "lowercase",
                    },
                    ":disabled": {},
                },
            },
        },

        MuiFormControl: {
            styleOverrides: {
                root: {
                    margin: 0,
                },
            },
        },
        MuiSelect: {
            defaultProps: {
                size: "small",
            },
            styleOverrides: {
                root: {
                    "& .MuiFormLabel-root": {
                        fontFamily: headingText.style.fontFamily,
                        textTransform: "lowercase",
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontFamily: headingText.style.fontFamily,
                    textTransform: "lowercase",
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: headingText.style.fontFamily,
                    fontWeight: 700,
                },
                body1: {
                    fontFamily: pullquoteText.style.fontFamily,
                    fontWeight: 400,
                },
                body2: {
                    fontFamily: pullquoteText.style.fontFamily,
                    fontWeight: 400,
                },
            },
        },
        MuiButton: {
            defaultProps: {
                variant: "outlined",
                size: "small",
            },
            styleOverrides: {
                root: {
                    fontFamily: headingText.style.fontFamily,
                    textTransform: "uppercase",
                    fontWeight: 700,
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    padding: 0,
                    borderRadius: 0,
                },
            },
        },
        MuiCard: {
            defaultProps: {
                variant: "outlined",
            },
        },
    },

    palette: {
        primary,
    },
});

const options = { key: "mui" };

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
const ThemeRegistry: FC<PropsWithChildren> = ({ children }) => {
    const [{ cache, flush }] = useState(() => {
        const cache = createCache(options);
        cache.compat = true;
        const prevInsert = cache.insert;
        let inserted: string[] = [];
        cache.insert = (...args) => {
            const serialized = args[1];
            if (cache.inserted[serialized.name] === undefined) {
                inserted.push(serialized.name);
            }
            return prevInsert(...args);
        };
        const flush = (): string[] => {
            const prevInserted = inserted;
            inserted = [];
            return prevInserted;
        };
        return { cache, flush };
    });

    useServerInsertedHTML(() => {
        const names = flush();
        if (names.length === 0) {
            return null;
        }
        let styles = "";
        for (const name of names) {
            styles += cache.inserted[name];
        }
        return (
            <style
                key={cache.key}
                data-emotion={`${cache.key} ${names.join(" ")}`}
                dangerouslySetInnerHTML={{
                    __html: styles,
                }}
            />
        );
    });

    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CacheProvider>
    );
};

export default ThemeRegistry;
