import type { FC } from "react";

import { Stack } from "@mui/material";

import DoubleSideSections from "@/components/@common/display/DoubleSideSections";
import TextSection from "@/components/@common/display/TextSection";
import { PhraseField } from "@/components/@common/form";

import type { NewSheetFormStepProps } from "../NewSheetFormProps";
import { SuggestionList } from "../fields";
import { clothingOptions, movementOptions } from "../util";

export interface Step4Props extends NewSheetFormStepProps {}

const Step4: FC<Step4Props> = ({ sheet, setSheet }) => {
    return (
        <DoubleSideSections
            left={
                <TextSection
                    content={[
                        {
                            title: "Show your style",
                            paragraphs: [
                                "Choose how you present yourself to the world. Pick your usual outfit, and imagine what your character looks like when they move.",
                                "It only takes a couple of features to help people imagine you, but you can be even more detailed if you like.",
                            ],
                        },
                    ]}
                />
            }
            right={
                <Stack gap={4}>
                    <Stack gap={1}>
                        <PhraseField
                            phrase={[
                                "I wear ",
                                {
                                    value: sheet.appearance.clothing,
                                    onChange: ({ target }) => {
                                        setSheet((prevSheet) => {
                                            prevSheet.appearance.clothing =
                                                target.value;
                                        });
                                    },
                                    placeholder: "clothing",
                                },
                            ]}
                        />
                        <SuggestionList
                            title={"clothing"}
                            options={clothingOptions}
                            handleChange={(option) => {
                                setSheet((prevSheet) => {
                                    prevSheet.appearance.clothing = option;
                                });
                            }}
                        />
                    </Stack>

                    <Stack gap={1}>
                        <PhraseField
                            phrase={[
                                "and move with ",
                                {
                                    value: sheet.appearance.movement,
                                    onChange: ({ target }) => {
                                        setSheet((prevSheet) => {
                                            prevSheet.appearance.movement =
                                                target.value;
                                        });
                                    },
                                    placeholder: "movement",
                                },
                            ]}
                        />
                        <SuggestionList
                            title={"movement"}
                            options={movementOptions}
                            handleChange={(option) => {
                                setSheet((prevSheet) => {
                                    prevSheet.appearance.movement = option;
                                });
                            }}
                        />
                    </Stack>
                </Stack>
            }
        />
    );
};

export default Step4;
