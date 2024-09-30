import type { Dispatch, FC, SetStateAction } from "react";
import { useContext } from "react";

import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import { Box, Button } from "@mui/material";

import { SubmitButton } from "@/components/@common/form";
import type { UseStepsOutput } from "@/hooks/useSteps";
import { MainLayoutContext } from "@/providers/MainLayoutProvider";
import type { FormSheet, FormSheetErrors, NewSheet } from "@/types";

interface SheetFormFooterProps extends UseStepsOutput {
    loading: boolean;
    sheet: NewSheet;
    setErrors: Dispatch<SetStateAction<FormSheetErrors>>;
    handleSubmit: () => void;
}

const SheetFormFooter: FC<SheetFormFooterProps> = ({
    loading,
    sheet,
    handleSubmit,
    setErrors,
    handleBack,
    handleNext,
    isFirstStep,
    isLastStep,
}) => {
    const { setSnackbar } = useContext(MainLayoutContext);

    const findErrors = (errorsToBeFound: FormSheetErrors) =>
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        errorsToBeFound.filter((error) => !sheet[error]);

    const handleProfileStep = () => {
        const newErrors = findErrors(["name", "description", "roleId"]);

        setErrors(newErrors);

        if (newErrors.length === 0) {
            handleNext();
        } else {
            for (const errorField of newErrors) {
                const fieldLabel: Partial<Record<keyof FormSheet, string>> = {
                    name: "Name",
                    roleId: "Role",
                    description: "Description",
                };

                setSnackbar({
                    severity: "error",
                    message: `${fieldLabel[errorField]} is required!`,
                });
            }
        }
    };

    const handleAbilityStep = () => {
        handleNext();
    };

    const handleSubmitClick = () => {
        if (sheet.items.length > 10) {
            setSnackbar({
                severity: "error",
                message: "You cannot have more than 10 items!",
            });
        } else handleSubmit();
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                flexGrow: 1,
                mt: 4,
                flexWrap: "wrap-reverse",
                "& > *": {
                    flexBasis: "270px",
                    flexGrow: 1,
                },
            }}
        >
            <Button
                color="inherit"
                disabled={isFirstStep}
                onClick={handleBack}
                startIcon={<ArrowBackSharpIcon fontSize="small" />}
            >
                {"Back"}
            </Button>
            {isLastStep ? (
                <SubmitButton
                    loading={loading}
                    onClick={handleSubmitClick}
                    endIcon={<CheckSharpIcon />}
                >
                    {"Submit"}
                </SubmitButton>
            ) : (
                <Button
                    color="inherit"
                    onClick={isFirstStep ? handleProfileStep : handleAbilityStep}
                    endIcon={<ArrowForwardSharpIcon fontSize="small" />}
                >
                    {"Next"}
                </Button>
            )}
        </Box>
    );
};

export default SheetFormFooter;
