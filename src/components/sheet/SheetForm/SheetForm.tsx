"use client";

import { type FC, useContext, useEffect, useState } from "react";

import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import {
    Box,
    Button,
    CircularProgress,
    Stack,
    Step,
    StepLabel,
    Stepper,
} from "@mui/material";
import type { Item, Role } from "@prisma/client";

import { PageSectionTitle } from "@/components/@common/display";
import useSteps from "@/hooks/useSteps";
import { MainLayoutContext } from "@/providers/MainLayoutProvider";
import { type FullRole, type FullSheet } from "@/types";

import { AbilityStep, ItemStep, ProfileStep } from "./steps";

export interface NewSheet
    extends Omit<
        FullSheet,
        "id" | "role" | "roleId" | "createdAt" | "updatedAt" | "authorId"
    > {
    roleId?: FullSheet["roleId"];
}

export type FormSheet = FullSheet | NewSheet;

export type SetFormSheetField = <T extends keyof FullSheet>(
    field: T,
    value: FullSheet[T],
) => void;

export type FormSheetErrors = Array<keyof NewSheet>;

interface SheetFormProps {
    sheet?: FullSheet;
    loading: boolean;
    roles: Role[];
    items: Item[];
    onSubmit: (newSheet: FormSheet) => void;
}

const labelSteps = ["Profile", "Abilities", "Inventory"];

const newSheet: NewSheet = {
    name: "",
    description: "",
    currentHitPoints: 10,
    currentAdventurePoints: 10,
    abilities: [],
    items: [],
};

const SheetForm: FC<SheetFormProps> = ({
    sheet: defaultSheet = newSheet,
    roles,
    items,
    onSubmit,
    loading,
}) => {
    const [sheet, setSheet] = useState(defaultSheet);

    const setSheetField: SetFormSheetField = (field, value) => {
        setSheet((prev) => ({ ...prev, [field]: value }));
    };

    const [errors, setErrors] = useState<FormSheetErrors>([]);

    useEffect(() => {
        setErrors((prevErrors) => {
            const newErrors = prevErrors.filter((errorField) => !sheet[errorField]);

            return newErrors;
        });
    }, [sheet]);

    const { setSnackbar } = useContext(MainLayoutContext);

    const stepComponents = [
        <ProfileStep
            key={labelSteps[0]}
            sheet={sheet}
            roles={roles}
            errors={errors}
            setField={setSheetField}
        />,
        <AbilityStep
            key={labelSteps[1]}
            sheet={sheet}
            setField={setSheetField}
            role={roles.find((role) => role.id === sheet.roleId) as FullRole}
        />,
        <ItemStep
            key={labelSteps[2]}
            sheet={sheet}
            setField={setSheetField}
            items={items}
        />,
    ];

    const { activeStep, handleBack, handleNext, isFirstStep, isLastStep } =
        useSteps(stepComponents);

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

    const handleSubmit = () => {
        if (sheet.items.length > 10) {
            setSnackbar({
                severity: "error",
                message: "You cannot have more than 10 items!",
            });
        } else {
            onSubmit(sheet);
        }
    };

    return (
        <Stack>
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

            <Box minHeight={250}>{stepComponents[activeStep]}</Box>

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
                    <Button
                        onClick={handleSubmit}
                        sx={{
                            cursor: loading ? "wait" : "pointer",
                        }}
                        disabled={loading}
                        endIcon={
                            loading ? (
                                <CircularProgress size={20} color="inherit" />
                            ) : (
                                <CheckSharpIcon />
                            )
                        }
                    >
                        {"Submit"}
                    </Button>
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
        </Stack>
    );
};

export default SheetForm;
