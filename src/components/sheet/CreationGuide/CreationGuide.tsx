"use client";

import type { FC } from "react";

import { Divider, Stack, Typography } from "@mui/material";
import type { Role } from "@prisma/client";

import { headingText } from "@/styles/font";

import CreationForm from "./CreationForm";

export interface CreationGuideProps {
    roles: Role[];
}

const CreationGuide: FC<CreationGuideProps> = ({ roles }) => {
    return (
        <Stack>
            <Stack
                paddingInline={3}
                paddingBlock={2}
                gap={3}
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Typography
                    variant="body1"
                    sx={{
                        fontFamily: headingText.style.fontFamily,
                        fontWeight: 900,
                        letterSpacing: 0.4,
                        textTransform: "uppercase",
                    }}
                >
                    {"character creation guide"}
                </Typography>
            </Stack>

            <Divider
                sx={(theme) => ({
                    borderBottomWidth: 1,

                    borderColor: theme.palette.text.primary,
                })}
            />

            <CreationForm roles={roles} />
        </Stack>
    );
};

export default CreationGuide;
