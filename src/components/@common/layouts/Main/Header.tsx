import { useContext } from "react";

import { MenuSharp as MenuIcon } from "@mui/icons-material/";
import Brightness4SharpIcon from "@mui/icons-material/Brightness4Sharp";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import { AppBar, IconButton, Stack, Toolbar, Tooltip } from "@mui/material";

import { MainLayoutContext } from "@/providers/MainLayoutProvider";
import { ColorModeContext } from "@/providers/Theme";

import Logo from "../../Logo";

export const headerHeight: string = "64px";

const Header = () => {
    const { toggleSidebarOpen } = useContext(MainLayoutContext);
    const { colorMode, toggleColorMode } = useContext(ColorModeContext);

    return (
        <AppBar
            color="default"
            sx={(theme) => ({
                zIndex: theme.zIndex.drawer + 1,
                height: headerHeight,
                backgroundColor: theme.palette.background.paper,
            })}
        >
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleSidebarOpen}
                >
                    <MenuIcon />
                </IconButton>
                <Stack direction={"row"} flexGrow={1} justifyContent={"center"}>
                    <Logo />
                </Stack>
                <Tooltip title={colorMode === "dark" ? "Light Mode" : "Dark Mode"}>
                    <IconButton onClick={toggleColorMode} color="inherit">
                        {colorMode === "dark" ? (
                            <LightModeSharpIcon />
                        ) : (
                            <Brightness4SharpIcon />
                        )}
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
