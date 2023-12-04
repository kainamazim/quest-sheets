import { type FC, type PropsWithChildren } from "react";

import { Grid, Paper } from "@mui/material";
import Image, { type ImageProps } from "next/image";

import useIsMobile from "@/hooks/useIsMobile";

interface TextImageSectionProps extends PropsWithChildren {
    image: {
        side: "right" | "left";
        src: ImageProps["src"];
        alt: ImageProps["alt"];
    };
}

const TextImageSection: FC<TextImageSectionProps> = ({ children, image }) => {
    const imageContent = (
        <Grid
            item
            xs={12}
            sm={4}
            md={5}
            sx={{
                position: "relative",
                backgroundColor: (t) => t.palette.grey[300],
                minHeight: "200px",
            }}
        >
            <Image
                src={image.src}
                alt={image.alt}
                quality={100}
                fill
                objectFit="cover"
                objectPosition="center"
                sizes="100vh"
                style={{
                    mixBlendMode: "multiply",
                }}
            />
        </Grid>
    );

    const isMobile = useIsMobile();

    return (
        <Paper
            elevation={3}
            sx={{
                flexGrow: 1,
                maxWidth: 1024,
            }}
        >
            <Grid
                container
                flexWrap={
                    isMobile && image.side === "right" ? "wrap-reverse" : "wrap"
                }
            >
                {image.side === "left" && imageContent}
                <Grid item xs={12} sm={8} md={7} flexGrow={1}>
                    {children}
                </Grid>
                {image.side === "right" && imageContent}
            </Grid>
        </Paper>
    );
};

export default TextImageSection;
