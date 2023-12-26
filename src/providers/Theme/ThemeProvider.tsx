"use client";

import {
    type FC,
    type PropsWithChildren,
    createContext,
    useMemo,
    useState,
} from "react";

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

export const ColorModeContext = createContext<ColorModeContextInterface>({
    colorMode: 'light',
    toggleColorMode: () => {},
});

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const [mode, setMode] = useState<PaletteOptions["mode"]>(
        prefersDarkMode ? "dark" : "light",
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
