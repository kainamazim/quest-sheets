"use client";

import type { FC } from "react";
import { useEffect, useState } from "react";

import { Box, Stack } from "@mui/material";

import useSteps from "@/hooks/useSteps";
import type {
    FormSheet,
    FormSheetErrors,
    FullRole,
    FullSheet,
    NewSheet,
    SetFormSheetField,
} from "@/types";
import type { Item, Role } from "@/types/data";

import SheetFormFooter from "./Footer";
import Header, { labelSteps } from "./Header";
import { AbilityStep, ItemStep, ProfileStep } from "./steps";

interface SheetFormProps {
    sheet?: FullSheet;
    loading: boolean;
    roles: Role[];
    items: Item[];
    onSubmit: (newSheet: FormSheet) => void;
}

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

    const useStepsOutput = useSteps(stepComponents);

    const { activeStep } = useStepsOutput;
    const handleSubmit = () => {
        onSubmit(sheet);
    };

    return (
        <Stack>
            <Header activeStep={activeStep} />

            <Box minHeight={250}>{stepComponents[activeStep]}</Box>

            <SheetFormFooter
                loading={loading}
                sheet={sheet}
                setErrors={setErrors}
                handleSubmit={handleSubmit}
                {...useStepsOutput}
            />
        </Stack>
    );
};

export default SheetForm;
