import { type FC } from "react";

import { Box, Stack, Step, StepLabel, Stepper } from "@mui/material";

import { PageSectionTitle } from "@/components/@common/display";

export const labelSteps = ["Profile", "Abilities", "Inventory"];

interface SheetFormHeaderProps {
    activeStep: number;
}

const SheetFormHeader: FC<SheetFormHeaderProps> = ({ activeStep }) => {
    return (
        <Stack gap={2} mb={2}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingInline: 2,
                }}
            >
                <Stepper
                    activeStep={activeStep}
                    sx={{ flexGrow: 1, maxWidth: "720px" }}
                >
                    {labelSteps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>

            <PageSectionTitle title={labelSteps[activeStep]} />
        </Stack>
    );
};

export default SheetFormHeader;
