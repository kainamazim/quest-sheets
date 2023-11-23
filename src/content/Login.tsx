"use client";

import React, { type FC, useContext, useState } from "react";

import LoginSharp from "@mui/icons-material/LoginSharp";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { type SignInResponse, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ZodError } from "zod";

import Logo from "@/components/@common/Logo";
import { PasswordField } from "@/components/@common/form";
import { LoginSignUpLayout } from "@/components/@common/layouts";
import { MainLayoutContext } from "@/providers/MainLayoutProvider";
import { loginSchema } from "@/util/schema";

type Form = Record<"username" | "password", string>;

type FormKeys = keyof Form;

type FormError = Partial<Record<FormKeys, boolean>>;

const LoginPage: FC = () => {
    const router = useRouter();

    const { setSnackbar } = useContext(MainLayoutContext);

    const [form, setForm] = useState<Form>({ username: "", password: "" });

    const [formError, setFormError] = useState<FormError>({});

    const handleSubmit = async () => {
        try {
            const { username, password } = loginSchema.parse(form);

            const response = await signIn("credentials", {
                username,
                password,
                redirect: false,
            });

            const { ok, error } = response as SignInResponse;

            if (ok) {
                setFormError({});
                setSnackbar({
                    message: "Successfully logged!",
                    severity: "success",
                });

                router.push("/");
            } else {
                setSnackbar({
                    message: error + "!" ?? "",
                    severity: "error",
                });
                setFormError({
                    username: error?.toLowerCase().includes("username"),
                    password: error?.toLowerCase().includes("password"),
                });
            }
        } catch (error: unknown) {
            if (error instanceof ZodError) {
                const { issues } = error;

                const fields = issues.map(({ path }) => path[0]);

                setFormError({
                    username: fields.includes("username"),
                    password: fields.includes("password"),
                });

                setSnackbar({
                    message: issues[0].message,
                    severity: "error",
                });
            }
        }
    };

    return (
        <LoginSignUpLayout imageSide="left" imageUrl="url(/castle.png)">
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
                            inputProps={{
                                minLength: 4,
                                maxLength: 32,
                            }}
                        />
                        <PasswordField
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
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
                        />
                    </Stack>
                    <Button
                        onClick={() => {
                            void handleSubmit();
                        }}
                        endIcon={<LoginSharp fontSize="small" />}
                        fullWidth
                    >
                        {"Login"}
                    </Button>
                </Stack>
                <Link
                    href="/signup"
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
                        {"Don't have an account? Sign Up"}
                    </Typography>
                </Link>
            </Stack>
        </LoginSignUpLayout>
    );
};

export default LoginPage;
