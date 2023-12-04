"use client";

import React, { type FC, type PropsWithChildren } from "react";

import { Container, Grid, Paper } from "@mui/material";
import Image, { type ImageProps } from "next/image";

interface LoginSignUpLayoutProps extends PropsWithChildren {
    imageSrc: ImageProps["src"];
    imageAlt: string;
    imageSide: "right" | "left";
}

const LoginSignUpLayout: FC<LoginSignUpLayoutProps> = ({
    children,
    imageSrc,
    imageAlt,
    imageSide,
}) => {
    const image = (
        <Grid
            item
            xs={false}
            sm={4}
            md={8}
            sx={{
                position: "relative",
                backgroundColor: (t) => t.palette.grey[300],
            }}
        >
            <Image
                src={imageSrc}
                alt={imageAlt}
                quality={100}
                fill
                objectFit="cover"
                objectPosition="center"
                sizes="100vw"
                style={{
                    mixBlendMode: "multiply",
                }}
            />
        </Grid>
    );

    return (
        <Grid container component="main" sx={{ height: "100vh" }}>
            {imageSide === "left" && image}
            <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
                <Container
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "100vh",
                    }}
                >
                    {children}
                </Container>
            </Grid>
            {imageSide === "right" && image}
        </Grid>
    );
};

export default LoginSignUpLayout;
