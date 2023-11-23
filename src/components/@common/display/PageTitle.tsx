"use client";

import { type FC } from "react";

import { Divider, Typography } from "@mui/material";

import { pullquoteText } from "@/styles/font";

interface PageTitleProps {
    title: string;
}

const PageTitle: FC<PageTitleProps> = ({ title }) => {
    return (
        <>
            <Typography
                variant="h5"
                sx={{
                    fontFamily: pullquoteText.style.fontFamily,
                    fontWeight: 900,
                    textTransform: "capitalize",
                }}
            >
                {title}
            </Typography>
            <Divider
                sx={(theme) => ({
                    borderBottomWidth: 3,
                    marginBottom: 3,
                    borderColor: theme.palette.text.primary,
                })}
            />
        </>
    );
};

export default PageTitle;
