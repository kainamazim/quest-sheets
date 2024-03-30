import type { FC } from "react";

import { Stack } from "@mui/material";

import DoubleSideSections from "@/components/@common/display/DoubleSideSections";
import TextSection from "@/components/@common/display/TextSection";
import { PhraseField } from "@/components/@common/form";

import type { NewSheetFormStepProps } from "../CreationFormProps";
import { SuggestionList } from "../fields";
import { dreamOptions } from "../util";

export interface Step8Props extends NewSheetFormStepProps {}

const Step8: FC<Step8Props> = ({ sheet, setSheet }) => {
    return (
        <DoubleSideSections
            left={
                <TextSection
                    content={[
                        {
                            title: "Dream big",
                            paragraphs: [
                                "Finally, give your character a dream to work toward a reason that fuels their desire for adventure.",
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
                                "I dream of ",
                                {
                                    value: sheet.dream,
                                    onChange: ({ target }) => {
                                        setSheet((prevSheet) => {
                                            prevSheet.dream = target.value;
                                        });
                                    },
                                    fullWidth: true,
                                    sx: {
                                        maxWidth: "30rem",
                                    },
                                    placeholder: "dream",
                                    autoFocus: true,
                                },
                                ".",
                            ]}
                        />
                        <SuggestionList
                            title={"dream"}
                            options={dreamOptions}
                            handleChange={(option) => {
                                setSheet((prevSheet) => {
                                    prevSheet.dream = option;
                                });
                            }}
                        />
                    </Stack>
                </Stack>
            }
        />
    );
};

export default Step8;
