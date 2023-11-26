"use client";

import { type FC, useContext, useState } from "react";

import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import {
    Box,
    Button,
    CircularProgress,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { type User } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { type Session } from "next-auth";
import { ZodError } from "zod";

import updateUser from "@/api/user/updateUser";
import { MainLayoutContext } from "@/providers/MainLayoutProvider";
import { usernameSchema } from "@/util/schema";

interface ChangeUsernameFormProps {
    user: Session["user"];
    updateSession: (data?: any) => Promise<Session | null>;
}

const ChangeUsernameForm: FC<ChangeUsernameFormProps> = ({ user, updateSession }) => {
    const [username, setUsername] = useState(user.username);
    const [isChange, setIsChange] = useState(false);
    const [error, setError] = useState(false);

    const { setSnackbar } = useContext(MainLayoutContext);

    const { mutate: changeUserMutation, isPending } = useMutation<
        unknown,
        unknown,
        User["username"]
    >({
        mutationFn: async (newUsername) =>
            await updateUser({ id: user.id, username: newUsername }),
        onSuccess: async () => {
            await updateSession({
                user: {
                    username,
                },
            });

            setSnackbar({
                severity: "success",
                message: "Username changed successfully!",
            });

            setIsChange(false);
        },
        onError: () => {
            setSnackbar({
                severity: "error",
                message: "Error while trying to change username!",
            });
        },
    });

    const handleSubmit = () => {
        try {
            const result = usernameSchema.parse(username);

            setError(false);

            changeUserMutation(result);
        } catch (error: unknown) {
            if (error instanceof ZodError) {
                const { issues } = error;

                setError(true);

                setSnackbar({
                    message: issues[0].message,
                    severity: "error",
                });
            }
        }
    };

    return (
        <Stack gap={2} flexWrap={"wrap"}>
            <Typography variant="h6">{"Change Username"}</Typography>
            <TextField
                fullWidth
                value={username}
                onChange={({ target }) => {
                    setUsername(target.value);
                }}
                id="username"
                label="Username"
                inputProps={{
                    minLength: 4,
                    maxLength: 32,
                }}
                error={error}
                disabled={!isChange}
                helperText="*Must contain at least 4 characters"
            />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 1,
                    flexGrow: 1,
                    "& > *": {
                        flexGrow: 1,
                    },
                }}
            >
                <Button
                    onClick={() => {
                        if (isChange) {
                            handleSubmit();
                        } else setIsChange(true);
                    }}
                    disabled={isPending}
                    endIcon={
                        isChange &&
                        (isPending ? (
                            <CircularProgress size={"1rem"} color="inherit" />
                        ) : (
                            <CheckSharpIcon fontSize="small" />
                        ))
                    }
                >
                    {isChange ? "Confirm Change" : "Change"}
                </Button>
                {isChange && (
                    <Button
                        onClick={() => {
                            setIsChange(false);
                            setUsername(user.username);
                        }}
                        color="inherit"
                        endIcon={<CloseSharpIcon fontSize="small" />}
                        disabled={isPending}
                    >
                        {"Cancel"}
                    </Button>
                )}
            </Box>
        </Stack>
    );
};

export default ChangeUsernameForm;
