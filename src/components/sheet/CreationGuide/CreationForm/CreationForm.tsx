import { type FC } from "react";

import { Divider, Stack } from "@mui/material";
import { type Role } from "@prisma/client";
import { useImmer } from "use-immer";

import useSteps from "@/hooks/useSteps";
import type { SetField } from "@/types";
import type { CharacterProfile } from "@/types/form";

import Footer from "./Footer";
import {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7,
    Step8,
    Step9,
    StepWelcome,
} from "./steps";
import { defaultSheet } from "./util";

export const labelSteps = [
    "Say your name",
    "Choose a role",
    "Enter the scene",
    "Show your style",
    "Call home",
    "Believe in something",
    "Be vulnerable",
    "Dream big",
    "Final",
];

export interface CreationFormProps {
    roles: Role[];
}

const CreationForm: FC<CreationFormProps> = ({ roles }) => {
    const [sheet, setSheet] = useImmer<CharacterProfile>(defaultSheet);

    const setSheetField: SetField<CharacterProfile> = (field, value) => {
        setSheet((prev) => ({ ...prev, [field]: value }));
    };

    const stepComponents = [
        <StepWelcome
            key={"welcome"}
            sheet={sheet}
            setSheet={setSheet}
            setSheetField={setSheetField}
        />,
        <Step1
            key={labelSteps[0]}
            sheet={sheet}
            setSheet={setSheet}
            setSheetField={setSheetField}
        />,
        <Step2
            key={labelSteps[1]}
            sheet={sheet}
            setSheet={setSheet}
            setSheetField={setSheetField}
            roles={roles}
        />,
        <Step3
            key={labelSteps[2]}
            sheet={sheet}
            setSheet={setSheet}
            setSheetField={setSheetField}
        />,
        <Step4
            key={labelSteps[3]}
            sheet={sheet}
            setSheet={setSheet}
            setSheetField={setSheetField}
        />,
        <Step5
            key={labelSteps[4]}
            sheet={sheet}
            setSheet={setSheet}
            setSheetField={setSheetField}
        />,
        <Step6
            key={labelSteps[5]}
            sheet={sheet}
            setSheet={setSheet}
            setSheetField={setSheetField}
        />,
        <Step7
            key={labelSteps[6]}
            sheet={sheet}
            setSheet={setSheet}
            setSheetField={setSheetField}
        />,
        <Step8
            key={labelSteps[7]}
            sheet={sheet}
            setSheet={setSheet}
            setSheetField={setSheetField}
        />,
        <Step9
            key={labelSteps[8]}
            sheet={sheet}
            setSheet={setSheet}
            setSheetField={setSheetField}
            roles={roles}
        />,
    ];

    const useStepsOutput = useSteps(stepComponents);
    const { activeStep } = useStepsOutput;

    return (
        <Stack>
            <Stack minHeight={"23rem"}>{stepComponents[activeStep]}</Stack>
            <Divider
                sx={(theme) => ({
                    borderBottomWidth: 1,

                    borderColor: theme.palette.text.primary,
                })}
            />
            <Footer {...useStepsOutput} />
        </Stack>
    );
};

export default CreationForm;
