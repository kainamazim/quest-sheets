"use client";

import React, { type FC, type PropsWithChildren } from "react";

import { Container, Grid, Paper } from "@mui/material";

interface LoginSignUpLayoutProps extends PropsWithChildren {
    imageUrl: string;
    imageSide: "right" | "left";
}

const LoginSignUpLayout: FC<LoginSignUpLayoutProps> = ({
    children,
    imageUrl,
    imageSide,
}) => {
    const image = (
        <Grid
            item
            xs={false}
            sm={4}
            md={8}
            sx={{
                backgroundImage: imageUrl,
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) => t.palette.grey[300],
                backgroundBlendMode: "multiply",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        />
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
