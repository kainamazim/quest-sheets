"use client";

import { type FC } from "react";

import { Divider, Stack, Typography } from "@mui/material";

interface PageSectionTitleProps {
    title: string;
}

const PageSectionTitle: FC<PageSectionTitleProps> = ({ title }) => {
    return (
        <Stack>
            <Divider
                sx={(theme) => ({
                    borderBottomWidth: 1,

                    borderColor: theme.palette.text.primary,
                })}
            />
            <Typography
                variant="h5"
                sx={() => ({
                    textAlign: "center",
                    textTransform: "lowercase",
                    fontSize: "1.5rem",
                })}
            >
                {title}
            </Typography>
            <Divider
                sx={(theme) => ({
                    borderBottomWidth: 1,
                    marginBottom: 2,
                    borderColor: theme.palette.text.primary,
                })}
            />
        </Stack>
    );
};

export default PageSectionTitle;
