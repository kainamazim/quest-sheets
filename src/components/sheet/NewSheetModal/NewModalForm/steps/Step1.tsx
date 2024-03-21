import type { FC } from "react";

import { Stack } from "@mui/material";

import DoubleSideSections from "@/components/@common/display/DoubleSideSections";
import TextSection from "@/components/@common/display/TextSection";
import { PhraseField } from "@/components/@common/form";

import type { NewSheetFormStepProps } from "../NewSheetFormProps";
import { SheetPhraseField } from "../fields";

export interface Step1Props extends NewSheetFormStepProps {}

const Step1: FC<Step1Props> = ({ sheet, setSheetField }) => {
    return (
        <DoubleSideSections
            left={
                <TextSection
                    content={[
                        {
                            title: "Say your name",
                            paragraphs: [
                                "You can start right now by choosing a name. It can be anything! Choose what your pronouns are to let others know how to refer to you. Some examples are: they/them, she/her, and/or he/him.",
                                "Next, choose your age (with a maximum lifespan of 300 years) and your height (between 3 and 8 feet tall).",
                            ],
                        },
                    ]}
                />
            }
            right={
                <Stack gap={2}>
                    <PhraseField phrase={["Hello,"]} />
                    <SheetPhraseField
                        sheet={sheet}
                        setSheetField={setSheetField}
                        phrase={[
                            "My name is ",
                            {
                                field: "name",
                            },
                            "(",
                            {
                                field: "pronoun",
                                sx: {
                                    maxWidth: "8rem",
                                },
                            },
                            ").",
                        ]}
                    />
                    <SheetPhraseField
                        sheet={sheet}
                        setSheetField={setSheetField}
                        phrase={[
                            "I'm ",
                            {
                                field: "age",

                                sx: {
                                    maxWidth: "4rem",
                                },
                                inputProps: {
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                    min: 0,
                                    max: 300,
                                },
                            },
                            " years old and stand ",
                            {
                                field: "height",
                                sx: {
                                    maxWidth: "6rem",
                                },
                                inputProps: {
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                    min: 3,
                                    max: 8,
                                },
                            },
                            "feet tall.",
                        ]}
                    />
                </Stack>
            }
        />
    );
};

export default Step1;
