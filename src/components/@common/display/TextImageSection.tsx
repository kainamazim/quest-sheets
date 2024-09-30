import { type FC, type PropsWithChildren } from "react";

import { Grid2 as Grid } from "@mui/material";
import Image, { type ImageProps } from "next/image";

import useIsMobile from "@/hooks/useIsMobile";

import BasePaper from "../layouts/BasePaper";

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
            size={{
                xs: 12,
                sm: 4,
                md: 5,
            }}
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
                layout="fill"
                style={{
                    mixBlendMode: "multiply",
                    objectFit: "cover",
                    objectPosition: "center",
                    width: "100%",
                }}
            />
        </Grid>
    );

    const isMobile = useIsMobile();

    return (
        <BasePaper
            sx={{
                paddingBlock: 0,
                paddingInline: 0,
            }}
        >
            <Grid
                container
                flexWrap={
                    isMobile && image.side === "right" ? "wrap-reverse" : "wrap"
                }
            >
                {image.side === "left" && imageContent}
                <Grid
                    size={{
                        xs: 12,
                        sm: 8,
                        md: 7,
                    }}
                    sx={{
                        flexGrow: 1,
                    }}
                >
                    {children}
                </Grid>
                {image.side === "right" && imageContent}
            </Grid>
        </BasePaper>
    );
};

export default TextImageSection;
