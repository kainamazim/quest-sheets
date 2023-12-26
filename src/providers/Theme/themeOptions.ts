import {
    type PaletteColorOptions,
    type ThemeOptions,
    alpha,
    getContrastRatio,
} from "@mui/material/styles";

import { headingText, pullquoteText } from "@/styles/font";

const violetBase = "#901CB0";
const violetMain = alpha(violetBase, 0.7);

const primary: PaletteColorOptions = {
    main: violetMain,
    light: alpha(violetBase, 0.5),
    dark: alpha(violetBase, 0.9),
    contrastText: getContrastRatio(violetMain, "#fff") > 4.5 ? "#fff" : "#111",
};

const themeOptions: ThemeOptions = {
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
            defaultProps: {
                size: "small",
            },
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
};

export default themeOptions;
