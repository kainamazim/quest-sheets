import type { FC } from "react";

import { Stack } from "@mui/material";

import DoubleSideSections from "@/components/@common/display/DoubleSideSections";
import TextSection from "@/components/@common/display/TextSection";
import { PhraseField } from "@/components/@common/form";

import type { NewSheetFormStepProps } from "../NewSheetFormProps";
import { SuggestionList } from "../fields";
import { beliefOptions } from "../util";

export interface Step6Props extends NewSheetFormStepProps {}

const Step6: FC<Step6Props> = ({ sheet, setSheet }) => {
    return (
        <DoubleSideSections
            left={
                <TextSection
                    content={[
                        {
                            title: "Believe in something",
                            paragraphs: [
                                "Choose an ideal that guides your behavior. This is your moral core: the belief that will help you know what your character might do in lots of situations. You can choose one of these or create your own.",
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
                                "I believe in ",
                                {
                                    value: sheet.belief,
                                    onChange: ({ target }) => {
                                        setSheet((prevSheet) => {
                                            prevSheet.belief = target.value;
                                        });
                                    },
                                    placeholder: "belief",
                                },
                            ]}
                        />
                        <SuggestionList
                            title={"belief"}
                            options={beliefOptions}
                            handleChange={(option) => {
                                setSheet((prevSheet) => {
                                    prevSheet.belief = option;
                                });
                            }}
                        />
                    </Stack>
                </Stack>
            }
        />
    );
};

export default Step6;
