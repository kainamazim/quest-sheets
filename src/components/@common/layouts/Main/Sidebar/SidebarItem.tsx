import { type FC, useContext } from "react";

import { type SvgIconComponent } from "@mui/icons-material";
import { ListItem, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

import { MainLayoutContext } from "@/providers/MainLayoutProvider";
import { pullquoteText } from "@/styles/font";

export interface SidebarItemProps {
    label: string;
    route: string;
    icon: SvgIconComponent;
}

const SidebarItem: FC<SidebarItemProps> = ({ label, icon: Icon, route }) => {
    const router = useRouter();
    const pathname = usePathname();

    const { setIsSidebarOpen } = useContext(MainLayoutContext);

    const handleClick = () => {
        router.push(route);
        setIsSidebarOpen(false);
    };

    const isActive = pathname === route;

    return (
        <ListItem disablePadding>
            <ListItemButton
                sx={({ palette }) => ({
                    display: "flex",
                    gap: 2,
                    color: isActive ? palette.primary.main : "",
                })}
                onClick={handleClick}
            >
                <ListItemIcon sx={{ minWidth: 0 }}>
                    <Icon
                        fontSize={"small"}
                        sx={({ palette }) => ({
                            color: isActive ? palette.primary.main : "",
                        })}
                    />
                </ListItemIcon>

                <Typography
                    variant="body1"
                    sx={{
                        marginRight: 2,
                        fontFamily: pullquoteText.style.fontFamily,
                        fontSize: "1rem",
                        fontWeight: 700,
                        textTransform: "capitalize",
                        "& > span": {
                            fontSize: "1rem",
                        },
                    }}
                >
                    {label}
                </Typography>
            </ListItemButton>
        </ListItem>
    );
};

export default SidebarItem;
