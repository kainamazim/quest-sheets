import { type FC, useState } from "react";

import { Button, Stack, Tooltip, Typography } from "@mui/material";

import { headingText, pullquoteText } from "@/styles/font";

export interface SuggestionListProps {
    title: string;
    options: string[];
    handleChange: (option: string) => void;
}

const maxNumber = 3;

const SuggestionList: FC<SuggestionListProps> = ({
    title,
    options,
    handleChange,
}) => {
    const isLarge = options.length > maxNumber;
    const [showAll, setShowAll] = useState(!isLarge);

    const optionsShortVersion = options.filter((_, index) => index < maxNumber);

    const optionsToShow = showAll ? options : optionsShortVersion;

    return (
        <Stack gap={1}>
            <Typography
                variant="body1"
                sx={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    fontFamily: headingText.style.fontFamily,
                    letterSpacing: 0.4,
                    textTransform: "uppercase",
                }}
            >
                {title}
            </Typography>
            <Stack
                gap={1}
                flexDirection={"row"}
                flexWrap={"wrap"}
                sx={{
                    "& > *": {},
                }}
            >
                {optionsToShow.map((option, index) => (
                    <Button
                        key={option + index}
                        onClick={() => {
                            handleChange(option);
                        }}
                        variant="text"
                        color="inherit"
                        sx={({ palette }) => ({
                            fontSize: "1rem",
                            fontWeight: 500,
                            fontFamily: pullquoteText.style.fontFamily,
                            textTransform: "lowercase",
                            backgroundColor: palette.grey[200],
                            paddingInline: 1,

                            "&:hover": {
                                color: palette.primary.main,
                            },
                        })}
                    >
                        {option}
                    </Button>
                ))}
                {isLarge && (
                    <Tooltip title={`Show ${showAll ? "less" : "more"} suggestions`}>
                        <Button
                            onClick={() => {
                                setShowAll(!showAll);
                            }}
                            variant="text"
                            color="inherit"
                            sx={({ palette }) => ({
                                fontSize: "1rem",
                                fontWeight: 700,
                                fontFamily: headingText.style.fontFamily,
                                textTransform: "lowercase",
                                backgroundColor: palette.grey[200],
                                paddingInline: 1,

                                "&:hover": {
                                    color: palette.primary.main,
                                },
                            })}
                        >
                            {showAll ? "less" : "more"}
                        </Button>
                    </Tooltip>
                )}
            </Stack>
        </Stack>
    );
};

export default SuggestionList;
