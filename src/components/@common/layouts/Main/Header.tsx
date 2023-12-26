import { useContext } from "react";

import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import { AppBar, IconButton, Stack, Toolbar } from "@mui/material";

import { MainLayoutContext } from "@/providers/MainLayoutProvider";

import Logo from "../../Logo";
import ThemeSwitch from "../../ThemeSwitch";

export const headerHeight: string = "64px";

const Header = () => {
    const { toggleSidebarOpen } = useContext(MainLayoutContext);

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
                    <MenuSharpIcon />
                </IconButton>
                
                <Stack direction={"row"} flexGrow={1} justifyContent={"center"}>
                    <Logo />
                </Stack>

                <ThemeSwitch />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
