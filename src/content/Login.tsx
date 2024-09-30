"use client";

import React, { type FC, useContext } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import LoginSharp from "@mui/icons-material/LoginSharp";
import { Stack, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { z } from "zod";

import Logo from "@/components/@common/Logo";
import { FormTextfield, SubmitButton } from "@/components/@common/form";
import FormPasswordField from "@/components/@common/form/controllers/FormPasswordField";
import { LoginSignUpLayout } from "@/components/@common/layouts";
import { MainLayoutContext } from "@/providers/MainLayoutProvider";
import { loginSchema } from "@/util/schema";

import backgroundPicture from "../../public/castle.png";

type LoginData = z.infer<typeof loginSchema>;

const LoginPage: FC = () => {
    const router = useRouter();

    const { setSnackbar } = useContext(MainLayoutContext);

    const { handleSubmit, control } = useForm<LoginData>({
        resolver: zodResolver(loginSchema),
    });

    const { mutate, isPending } = useMutation({
        mutationFn: ({ username, password }: LoginData) =>
            signIn("credentials", {
                username,
                password,
                redirect: false,
            }),
        onSuccess: () => {
            setSnackbar({
                message: "Successfully logged!",
                severity: "success",
            });

            router.push("/sheets");
        },
        onError: (error) => {
            const errorMessage = error.message;

            setSnackbar({
                message: errorMessage + "!",
                severity: "error",
            });
        },
    });

    return (
        <LoginSignUpLayout
            imageSide="left"
            imageSrc={backgroundPicture}
            imageAlt="Login Background Image"
        >
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
                        <FormTextfield
                            margin="normal"
                            fullWidth
                            id="username"
                            label="Username"
                            name={"username"}
                            control={control}
                            autoComplete="username"
                            autoFocus
                            slotProps={{
                                input: {
                                    inputProps: {
                                        minLength: 4,
                                        maxLength: 32,
                                    },
                                },
                            }}
                        />
                        <FormPasswordField
                            margin="normal"
                            fullWidth
                            name="password"
                            control={control}
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    </Stack>
                    <SubmitButton
                        variant="contained"
                        onClick={() => {
                            console.log("AQUI");
                            handleSubmit(
                                ({ username, password }) =>
                                    mutate({ username, password }),
                                (error) => console.log({ error }),
                            );
                        }}
                        loading={isPending}
                        endIcon={<LoginSharp fontSize="small" />}
                        fullWidth
                    >
                        {"Login"}
                    </SubmitButton>
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
