import type { FC } from "react";

import { Stack } from "@mui/material";

import TextSection from "@/components/@common/display/TextSection";

import type { NewSheetFormStepProps } from "../NewSheetFormProps";

export interface StepWelcomeProps extends NewSheetFormStepProps {}

const StepWelcome: FC<StepWelcomeProps> = () => {
    return (
        <Stack
            gap={2}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
                paddingBlock: 4,
                paddingInline: 5,
            }}
        >
            <Stack
                sx={{
                    maxWidth: "42rem",
                }}
            >
                <TextSection
                    content={[
                        {
                            title: "Welcome!",
                            paragraphs: [
                                "This is the Character Creation Guide.",
                                "Here you will receive ideas to help you fill in the blanks and create a unique and interesting character.",
                                "You don't have to be familiar with role-playing games to create your first character. All you have to do is click the button below.",
                            ],
                        },
                    ]}
                />
            </Stack>
        </Stack>
    );
};

export default StepWelcome;
