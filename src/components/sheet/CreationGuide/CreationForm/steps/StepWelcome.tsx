import type { FC } from "react";

import { Stack } from "@mui/material";

import TextSection from "@/components/@common/display/TextSection";

import type { NewSheetFormStepProps } from "../CreationFormProps";

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
                                "You don't have to be familiar with role-playing games to have fun!",
                                "Here you will access ideas to help you create a unique and interesting character.",
                                "Whether you're a newcomer who wants to know the game, or an adept who wants to practice creating characters, this guide can be useful.",
                                "All you have to do is click the button below.",
                            ],
                        },
                    ]}
                />
            </Stack>
        </Stack>
    );
};

export default StepWelcome;
