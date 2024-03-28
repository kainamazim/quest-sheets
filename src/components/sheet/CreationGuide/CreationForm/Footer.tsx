import type { FC } from "react";

import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import PlayArrowSharp from "@mui/icons-material/PlayArrowSharp";
import { Button, Stack } from "@mui/material";

import type { UseStepsOutput } from "@/hooks/useSteps";

interface NewSheetFormFooterProps extends UseStepsOutput {}

const NewSheetFormFooter: FC<NewSheetFormFooterProps> = ({
    handleBack,
    handleNext,
    isFirstStep,
    isLastStep,
}) => {
    return (
        <Stack
            paddingInline={3}
            paddingBlock={2}
            gap={3}
            flexDirection={"row"}
            justifyContent={"flex-end"}
            alignItems={"center"}
            sx={{
                "& > *": {
                    flexBasis: "10rem",
                },
            }}
        >
            {isFirstStep ? (
                <Button
                    onClick={handleNext}
                    endIcon={<PlayArrowSharp fontSize="small" />}
                >
                    {"Start"}
                </Button>
            ) : (
                <Button
                    color="inherit"
                    onClick={handleBack}
                    startIcon={<ArrowBackSharpIcon fontSize="small" />}
                >
                    {"Back"}
                </Button>
            )}

            {isFirstStep || isLastStep ? null : (
                <Button
                    color="inherit"
                    onClick={handleNext}
                    endIcon={<ArrowForwardSharpIcon fontSize="small" />}
                >
                    {"Next"}
                </Button>
            )}
        </Stack>
    );
};

export default NewSheetFormFooter;
