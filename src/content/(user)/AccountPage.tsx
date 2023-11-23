"use client";

import { type FC } from "react";

import { Box, CircularProgress, Divider, Stack, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { notFound } from "next/navigation";

import { PageTitle } from "@/components/@common/display";
import ChangePasswordForm from "@/components/user/ChangePasswordForm";
import ChangeUsernameForm from "@/components/user/ChangeUsernameForm";

const AccountPage: FC = () => {
    const { data: session, update, status } = useSession();

    if (status === "loading")
        return (
            <Stack>
                <Typography variant="h5">{"Account Details"}</Typography>
                <Divider
                    sx={(theme) => ({
                        borderBottomWidth: 3,
                        marginBottom: 6,
                        borderColor: theme.palette.text.primary,
                    })}
                />
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <CircularProgress />
                </Box>
            </Stack>
        );
    else if (session == null) notFound();

    return (
        <Stack>
            <PageTitle title={"account details"} />
            <Stack
                gap={4}
                direction={"row"}
                flexWrap={"wrap"}
                sx={{
                    "& > *": {
                        flexBasis: "400px",
                        flexGrow: 1,
                    },
                }}
            >
                <ChangeUsernameForm user={session.user} updateSession={update} />
                <ChangePasswordForm user={session.user} />
            </Stack>
        </Stack>
    );
};

export default AccountPage;
