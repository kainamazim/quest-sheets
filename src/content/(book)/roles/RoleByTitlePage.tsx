"use client";

import { type FC } from "react";

import { Box, Stack, Typography } from "@mui/material";

import { PageSectionTitle, PageTitle } from "@/components/@common/display";
import PathAccordion from "@/components/role/learningPath/PathAccordion";
import { type FullRole } from "@/types";

interface RoleByTitlePageProps {
    role: FullRole;
}

const RoleByTitlePage: FC<RoleByTitlePageProps> = ({ role }) => {
    return (
        <Stack>
            <PageTitle title={"The " + role.title} />
            <Stack
                sx={() => ({
                    mb: 4,
                })}
            >
                <PageSectionTitle title={"Description"} />
                <Box
                    sx={{
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: "1.3rem",
                            mb: 4,

                            maxWidth: "45rem",
                        }}
                    >
                        {role.description}
                    </Typography>
                </Box>
            </Stack>

            <Stack>
                <PageSectionTitle title={"Abilities"} />
                {role.learningPaths.map((learningPath) => (
                    <Stack sx={{ mb: 2 }} key={learningPath.id}>
                        <PathAccordion
                            learningPath={learningPath}
                            abilities={learningPath.abilities.map((ability) => ({
                                ability,
                                hideCheckbox: true,
                            }))}
                        />
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

export default RoleByTitlePage;
