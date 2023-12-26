import { useContext } from "react";

import Brightness4SharpIcon from "@mui/icons-material/Brightness4Sharp";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import { IconButton, Tooltip } from "@mui/material";

import { ColorModeContext } from "@/providers/Theme";

const ThemeSwitch = () => {
    const { colorMode, toggleColorMode } = useContext(ColorModeContext);

    return (
        <Tooltip title={colorMode === "dark" ? "Light Mode" : "Dark Mode"}>
            <IconButton onClick={toggleColorMode} color="inherit">
                {colorMode === "dark" ? (
                    <LightModeSharpIcon />
                ) : (
                    <Brightness4SharpIcon />
                )}
            </IconButton>
        </Tooltip>
    );
};

export default ThemeSwitch;
