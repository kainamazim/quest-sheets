"use client";

import { type FC } from "react";

import EastSharpIcon from "@mui/icons-material/EastSharp";
import { Box, Button, Stack, Typography } from "@mui/material";
import { type Role } from "@prisma/client";
import Link from "next/link";

import { PageTitle } from "@/components/@common/display";
import BaseCard from "@/components/@common/display/BaseCard";

interface BookRolesPageProps {
    roles: Role[];
}

const BookRolesPage: FC<BookRolesPageProps> = ({ roles }) => {
    return (
        <Stack>
            <PageTitle title="Roles" />
            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    "& > *": {},
                    flexWrap: "wrap",
                }}
            >
                {roles.map((role) => (
                    <BaseCard
                        key={role.id}
                        variant="outlined"
                        sx={{
                            display: "flex",
                            padding: 3,
                            flexDirection: "column",
                            justifyContent: "space-between",
                            gap: 4,
                            flexBasis: "400px",
                            flexGrow: 1,
                        }}
                    >
                        <Stack>
                            <Typography variant="h6" mb={2}>
                                {"The " + role.title}
                            </Typography>
                            <Typography variant="body1" fontSize={"1rem"}>
                                {role.description}
                            </Typography>
                        </Stack>

                        <Link
                            href={`/roles/${role.title.toLowerCase()}`}
                            style={{
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            <Button
                                endIcon={<EastSharpIcon />}
                                color="inherit"
                                fullWidth
                            >
                                {"read more"}
                            </Button>
                        </Link>
                    </BaseCard>
                ))}
            </Box>
        </Stack>
    );
};

export default BookRolesPage;
