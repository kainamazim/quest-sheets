"use client";

import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

import useIsMobile from "@/hooks/useIsMobile";

const BaseCard = styled(Card)(({ theme }) => {
    const isMobile = useIsMobile();

    return {
        flexBasis: "300px",
        display: "flex",
        padding: "1rem",
        flexDirection: "column",
        justifyContent: "space-between",
        flexGrow: isMobile ? 1 : 0,
        "&:hover": {
            borderColor: theme.palette.text.primary,
            transition: theme.transitions.create(["borderColor"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
    };
});

export default BaseCard;
