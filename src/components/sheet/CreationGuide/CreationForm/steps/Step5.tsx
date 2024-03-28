import type { FC } from "react";

import { Stack } from "@mui/material";

import DoubleSideSections from "@/components/@common/display/DoubleSideSections";
import TextSection from "@/components/@common/display/TextSection";
import { PhraseField } from "@/components/@common/form";

import type { NewSheetFormStepProps } from "../CreationFormProps";
import { SuggestionList } from "../fields";
import { homePeculiarityOptions, homeShortDescriptionOptions } from "../util";

export interface Step5Props extends NewSheetFormStepProps {}

const Step5: FC<Step5Props> = ({ sheet, setSheet }) => {
    return (
        <DoubleSideSections
            left={
                <TextSection
                    content={[
                        {
                            title: "Call home",
                            paragraphs: [
                                "Like the real world, the peoples of Quest are endlessly diverse.",
                                "Use where you're from and what your people are known for as a starting point for how you relate to others in the world.",
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
                                "I'm from ",
                                {
                                    value: sheet.home.short_description,
                                    onChange: ({ target }) => {
                                        setSheet((prevSheet) => {
                                            prevSheet.home.short_description =
                                                target.value;
                                        });
                                    },
                                    placeholder: "short description",
                                },
                            ]}
                        />
                        <SuggestionList
                            title={"short description"}
                            options={homeShortDescriptionOptions}
                            handleChange={(option) => {
                                setSheet((prevSheet) => {
                                    prevSheet.home.short_description = option;
                                });
                            }}
                        />
                    </Stack>

                    <Stack gap={1}>
                        <PhraseField
                            phrase={[
                                "where my people are known for ",
                                {
                                    value: sheet.home.peculiarity,
                                    onChange: ({ target }) => {
                                        setSheet((prevSheet) => {
                                            prevSheet.home.peculiarity = target.value;
                                        });
                                    },
                                    placeholder: "peculiarity",
                                },
                            ]}
                        />
                        <SuggestionList
                            title={"peculiarity"}
                            options={homePeculiarityOptions}
                            handleChange={(option) => {
                                setSheet((prevSheet) => {
                                    prevSheet.home.peculiarity = option;
                                });
                            }}
                        />
                    </Stack>
                </Stack>
            }
        />
    );
};

export default Step5;
