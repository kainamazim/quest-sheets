import { useContext } from "react";

import ArticleSharpIcon from "@mui/icons-material/ArticleSharp";
import BookmarkSharpIcon from "@mui/icons-material/BookmarkSharp";
import CastleSharpIcon from "@mui/icons-material/CastleSharp";
import InfoIcon from "@mui/icons-material/Info";
import Inventory2SharpIcon from "@mui/icons-material/Inventory2Sharp";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import ScienceSharpIcon from "@mui/icons-material/ScienceSharp";
import { Divider, Drawer, Stack } from "@mui/material";
import { useSession } from "next-auth/react";

import { MainLayoutContext } from "@/providers/MainLayoutProvider";

import { headerHeight } from "../Header";
import LogoutItem from "./LogoutItem";
import SidebarItem from "./SidebarItem";
import SidebarItemList from "./SidebarItemList";

const Sidebar = () => {
    const { isSidebarOpen, handleCloseSidebar } = useContext(MainLayoutContext);

    const session = useSession();

    return (
        <Drawer
            open={isSidebarOpen}
            onClose={handleCloseSidebar}
            variant="persistent"
        >
            <Stack mt={headerHeight}>
                <SidebarItem label={"home"} route={"/"} icon={CastleSharpIcon} />
                <Divider />
                <SidebarItemList
                    title={"book content"}
                    items={[
                        {
                            label: "rules",
                            route: "/rules",
                            icon: InfoIcon,
                        },
                        {
                            label: "roles",
                            route: "/roles",
                            icon: BookmarkSharpIcon,
                        },
                        {
                            label: "treasure catalog",
                            route: "/treasure",
                            icon: Inventory2SharpIcon,
                        },
                    ]}
                />
                <Divider />
                {session.status === "authenticated" ? (
                    <>
                        <SidebarItemList
                            title={"user content"}
                            items={[
                                {
                                    label: "character sheets",
                                    route: "/sheets",
                                    icon: ArticleSharpIcon,
                                },
                                {
                                    label: "custom items",
                                    route: "/items",
                                    icon: ScienceSharpIcon,
                                },
                            ]}
                        />
                        <Divider />
                        <SidebarItemList
                            title={"user account"}
                            items={[
                                {
                                    label: "Account Details",
                                    route: "/account",
                                    icon: PersonSharpIcon,
                                },
                                <LogoutItem key={"logout"} />,
                            ]}
                        />
                    </>
                ) : (
                    <SidebarItemList
                        title={"user account"}
                        items={[
                            {
                                label: "login",
                                route: "/login",
                                icon: LoginSharpIcon,
                            },
                            {
                                label: "signup",
                                route: "/signup",
                                icon: PersonAddAltSharpIcon,
                            },
                        ]}
                    />
                )}
            </Stack>
        </Drawer>
    );
};

export default Sidebar;
