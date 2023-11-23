import { type Dispatch, type ReactNode, type SetStateAction, useState } from "react";

interface UseStepsOutput {
    activeStep: number;
    setActiveStep: Dispatch<SetStateAction<number>>;
    handleNext: () => void;
    handleBack: () => void;
    isFirstStep: boolean;
    isLastStep: boolean;
}

const useSteps = (steps: ReactNode[]): UseStepsOutput => {
    const [activeStep, setActiveStep] = useState(0);

    const isFirstStep = activeStep === 0;

    const isLastStep = activeStep === steps.length - 1;

    const handleNext = (): void => {
        if (!isLastStep) setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = (): void => {
        if (!isFirstStep) setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return {
        activeStep,
        setActiveStep,
        handleNext,
        handleBack,
        isFirstStep,
        isLastStep,
    } as const;
};

export default useSteps;
