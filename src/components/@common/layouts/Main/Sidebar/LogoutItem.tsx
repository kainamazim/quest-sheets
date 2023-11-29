import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import { ListItem, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import { pullquoteText } from "@/styles/font";

const LogoutItem = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push("/login");
        signOut()
            .then(() => {})
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <ListItem disablePadding>
            <ListItemButton
                sx={({ palette }) => ({
                    display: "flex",
                    gap: 2,
                    "&:hover": {
                        color: palette.error.main,
                        "& svg": {
                            color: palette.error.main,
                        },
                    },
                })}
                onClick={handleClick}
            >
                <ListItemIcon sx={{ minWidth: 0 }}>
                    <LogoutSharpIcon fontSize={"small"} />
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
                    {"logout"}
                </Typography>
            </ListItemButton>
        </ListItem>
    );
};

export default LogoutItem;
