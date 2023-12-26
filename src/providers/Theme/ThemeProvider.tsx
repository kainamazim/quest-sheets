"use client";

import {
    type FC,
    type PropsWithChildren,
    createContext,
    useEffect,
    useMemo,
    useState,
} from "react";

import type { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import {
    ThemeProvider as MuiThemeProvider,
    type PaletteOptions,
    createTheme,
} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import themeOptions from "./themeOptions";

interface ColorModeContextInterface {
    colorMode: PaletteOptions["mode"];
    toggleColorMode: () => void;
}

const COLOR_MODE_KEY = "color-mode";

const defaultColorMode = typeof window !== 'undefined'
    ? (localStorage.getItem(COLOR_MODE_KEY) as PaletteMode | null)
    : "light";

export const ColorModeContext = createContext<ColorModeContextInterface>({
    colorMode: defaultColorMode ?? "light",
    toggleColorMode: () => {},
});

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const [mode, setMode] = useState<PaletteMode>(
        defaultColorMode ?? (prefersDarkMode ? "dark" : "light"),
    );

    const colorMode = useMemo(
        () => ({
            colorMode: mode,
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
            },
        }),
        [mode],
    );

    const theme = useMemo(
        () =>
            createTheme({
                ...themeOptions,
                palette: {
                    ...themeOptions.palette,
                    mode,
                },
            }),
        [mode],
    );

    useEffect(() => {
        if (typeof window !== 'undefined') localStorage.setItem(COLOR_MODE_KEY, mode);
    }, [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default ThemeProvider;
