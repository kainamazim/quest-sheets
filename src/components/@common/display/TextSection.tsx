import type { FC, ReactNode } from "react";

import { Stack, Typography } from "@mui/material";

import { pullquoteText } from "@/styles/font";

export interface Text {
    title: string;
    paragraphs: ReactNode[];
}

export interface TextSectionProps {
    content: Text[];
}

const TextSection: FC<TextSectionProps> = ({ content }) => {
    return (
        <Stack
            sx={{
                gap: 2,
            }}
        >
            {content.map(({ title, paragraphs }, index) => (
                <Stack
                    key={title + index}
                    sx={{
                        gap: 1,
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: pullquoteText.style.fontFamily,
                            fontWeight: 900,
                            mb: 1,
                        }}
                    >
                        {title}
                    </Typography>
                    {paragraphs.map((paragraph, index) => (
                        <Typography
                            key={String(paragraph) + index}
                            variant="body1"
                            sx={{
                                fontSize: "1.3rem",
                                fontWeight: 500,
                            }}
                        >
                            {paragraph}
                        </Typography>
                    ))}
                </Stack>
            ))}
        </Stack>
    );
};

export default TextSection;
