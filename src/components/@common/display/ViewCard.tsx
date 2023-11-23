import React, { type FC, type ReactNode } from "react";

import { Box, Checkbox, Typography } from "@mui/material";

import { pullquoteText } from "@/styles/font";

import BaseCard from "./BaseCard";

export interface ViewCardProps {
    title: string;
    description: string;
    tags: ReactNode;

    checked?: boolean;
    handleChange?: (checked: boolean) => void;
}

const ViewCard: FC<ViewCardProps> = ({
    title,
    description,
    tags,
    checked = false,
    handleChange,
}) => {
    return (
        <BaseCard
            sx={(theme) => ({
                borderColor: checked ? theme.palette.primary.main : "",
                transition: theme.transitions.create(["borderColor"], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                "&:hover": {
                    borderColor: checked
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                    transition: theme.transitions.create(["borderColor"], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                },
            })}
            variant="outlined"
        >
            <Box
                sx={{
                    mb: 2,
                    display: "flex",
                    gap: 1,
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                }}
            >
                <Typography
                    variant="h6"
                    component="div"
                    sx={(theme) => ({
                        fontWeight: 500,
                        fontSize: "1.3rem",
                        color: checked ? theme.palette.primary.main : "",
                        transition: theme.transitions.create(["color"], {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.leavingScreen,
                        }),
                    })}
                >
                    {title}
                </Typography>
                {handleChange != null && (
                    <Checkbox
                        checked={checked}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            handleChange(event.target.checked);
                        }}
                    />
                )}
            </Box>

            <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                    fontWeight: 500,
                    fontFamily: pullquoteText.style.fontFamily,
                }}
            >
                {description}
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    mt: 2,
                    flexWrap: "wrap",
                }}
            >
                {tags}
            </Box>
        </BaseCard>
    );
};

export default ViewCard;
