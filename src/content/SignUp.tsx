"use client";

import React, { type FC, useContext, useState } from "react";

import PersonAddAltSharp from "@mui/icons-material/PersonAddAltSharp";
import { Button, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ZodError } from "zod";

import signUpUser from "@/api/user/signUpUser";
import Logo from "@/components/@common/Logo";
import { PasswordField } from "@/components/@common/form";
import { LoginSignUpLayout } from "@/components/@common/layouts";
import { MainLayoutContext } from "@/providers/MainLayoutProvider";
import { signUpSchema } from "@/util/schema";

type Form = Record<"username" | "password" | "confirmPassword", string>;

type FormKeys = keyof Form;

type FormError = Partial<Record<FormKeys, boolean>>;

const SignUpPage: FC = () => {
    const router = useRouter();

    const { setSnackbar } = useContext(MainLayoutContext);

    const [form, setForm] = useState<Form>({
        username: "",
        password: "",
        confirmPassword: "",
    });

    const [formError, setFormError] = useState<FormError>({});

    const handleSubmit = async () => {
        try {
            const { username, password } = signUpSchema.parse(form);

            signUpUser(username, password)
                .then((response) => {
                    setFormError({});
                    setSnackbar({
                        message: "Successfully signed up!",
                        severity: "success",
                    });
                    router.push("/login");
                })
                .catch((error) => {
                    console.error(error);

                    const { message } = error as Error;

                    setSnackbar({
                        message: message + "!" ?? "",
                        severity: "error",
                    });
                    setFormError({
                        username: message?.toLowerCase().includes("username"),
                        password: message?.toLowerCase().includes("password"),
                    });
                });
        } catch (error: unknown) {
            if (error instanceof ZodError) {
                const { issues } = error;

                const fields = issues.map(({ path }) => path[0]);

                setFormError({
                    username: fields.includes("username"),
                    password: fields.includes("password"),
                    confirmPassword: fields.includes("confirmPassword"),
                });

                setSnackbar({
                    message: issues[0].message,
                    severity: "error",
                });
            }
        }
    };

    return (
        <LoginSignUpLayout imageSide="right" imageUrl="url(/horizon-group.png)">
            <Stack
                sx={{
                    padding: 4,
                    width: "100%",
                }}
                gap={1}
            >
                <Stack alignItems={"center"} mb={2}>
                    <Logo />
                </Stack>

                <Stack gap={3}>
                    <Stack gap={2}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            onChange={({ target }) => {
                                setForm((prev) => ({
                                    ...prev,
                                    username: target.value,
                                }));
                            }}
                            autoFocus
                            error={formError.username}
                            sx={{
                                mb: 1,
                            }}
                            inputProps={{
                                minLength: 4,
                                maxLength: 32,
                            }}
                            helperText="*Must contain at least 4 characters"
                        />
                        <PasswordField
                            fullWidth
                            label="Password"
                            id="password"
                            onChange={({ target }) => {
                                setForm((prev) => ({
                                    ...prev,
                                    password: target.value,
                                }));
                            }}
                            autoComplete="current-password"
                            error={formError.password}
                            inputProps={{
                                minLength: 6,
                                maxLength: 32,
                            }}
                            helperText="*Must contain at least 6 characters and 1 number"
                        />
                        <PasswordField
                            fullWidth
                            label="Confirm Password"
                            id="confirm-password"
                            onChange={({ target }) => {
                                setForm((prev) => ({
                                    ...prev,
                                    confirmPassword: target.value,
                                }));
                            }}
                            error={formError.confirmPassword}
                            inputProps={{
                                minLength: 6,
                                maxLength: 32,
                            }}
                        />
                    </Stack>
                    <Button
                        onClick={() => {
                            void handleSubmit();
                        }}
                        endIcon={<PersonAddAltSharp fontSize="small" />}
                        fullWidth
                    >
                        {"Sign Up"}
                    </Button>
                </Stack>
                <Link
                    href="/login"
                    style={{ color: "inherit", textDecoration: "none" }}
                >
                    <Typography
                        variant="body1"
                        sx={({ palette }) => ({
                            color: palette.text.secondary,

                            fontSize: "1rem",

                            "&:hover": {
                                color: palette.text.primary,
                                textDecoration: "underline",
                            },
                        })}
                    >
                        {"Already have an account? Login"}
                    </Typography>
                </Link>
            </Stack>
        </LoginSignUpLayout>
    );
};

export default SignUpPage;
