"use client";

import type { FC, PropsWithChildren } from "react";

import { Tooltip } from "@mui/material";
import { type SxProps, type Theme, styled } from "@mui/material/styles";

import { headingText } from "@/styles/font";

const DefaultTagBody = styled("span")(({ theme }) => ({
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: headingText.style.fontFamily,
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 0.7,
    lineHeight: 1,
    transition: theme.transitions.create(
        ["color", "background-color", "border", "opacity"],
        {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        },
    ),
    paddingBlock: 2,
    paddingInline: 8,
}));

interface DefaultTagProps extends PropsWithChildren {
    title: string;
    sx?: SxProps<Theme>;
    className?: string;
}

const DefaultTag: FC<DefaultTagProps> = ({ title, children, className, sx }) => {
    return (
        <Tooltip title={title}>
            <DefaultTagBody className={className} sx={sx}>
                {children}
            </DefaultTagBody>
        </Tooltip>
    );
};

export default DefaultTag;
