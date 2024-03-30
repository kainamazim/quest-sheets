import type { FC } from "react";

import { Box, Typography } from "@mui/material";

import { headingText } from "@/styles/font";
import { type CharacterTrait } from "@/types/form";

export interface TraitOptionProps {
    trait: CharacterTrait;
    handleClick?: () => void;
}

const TraitOption: FC<TraitOptionProps> = ({ trait, handleClick }) => {
    return (
        <Box
            sx={({ palette, transitions }) => ({
                display: "flex",
                flexDirection: "column",
                gap: 1,
                padding: 2,
                flexGrow: 1,

                cursor: "pointer",

                transition: transitions.create(["borderColor"], {
                    easing: transitions.easing.sharp,
                    duration: transitions.duration.leavingScreen,
                }),

                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: palette.divider,

                "& > #title": {
                    transition: transitions.create(["color"], {
                        easing: transitions.easing.sharp,
                        duration: transitions.duration.leavingScreen,
                    }),
                },

                "&:hover": {
                    borderColor: palette.primary.main,

                    "& > #title": {
                        color: palette.primary.main,
                    },
                },
            })}
            onClick={handleClick}
        >
            <Typography
                variant="body1"
                sx={{
                    fontSize: "1rem",
                    fontWeight: 900,
                }}
            >
                {`“${trait.example}”`}
            </Typography>
            <Typography
                variant="body1"
                id={"title"}
                sx={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    fontFamily: headingText.style.fontFamily,
                    letterSpacing: 0.4,
                    textTransform: "uppercase",
                }}
            >
                {trait.title}
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    fontSize: "1rem",
                    fontWeight: 500,
                }}
            >
                {trait.description}
            </Typography>
        </Box>
    );
};

export default TraitOption;
