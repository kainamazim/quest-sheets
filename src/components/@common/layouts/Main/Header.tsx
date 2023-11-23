import { useContext } from "react";

import { MenuSharp as MenuIcon } from "@mui/icons-material/";
import { AppBar, IconButton, Stack, Toolbar } from "@mui/material";

import { MainLayoutContext } from "@/providers/MainLayoutProvider";

import Logo from "../../Logo";

export const headerHeight: string = "64px";

const Header = () => {
    const { toggleSidebarOpen } = useContext(MainLayoutContext);

    return (
        <AppBar
            color="default"
            sx={(theme) => ({
                zIndex: theme.zIndex.drawer + 1,
                height: headerHeight,
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
            </Toolbar>
        </AppBar>
    );
};

export default Header;
