import type { FC } from "react";

import { Stack } from "@mui/material";

import DoubleSideSections from "@/components/@common/display/DoubleSideSections";
import TextSection from "@/components/@common/display/TextSection";
import { PhraseField } from "@/components/@common/form";

import type { NewSheetFormStepProps } from "../NewSheetFormProps";
import { SuggestionList } from "../fields";
import { flawOptions } from "../util";

export interface Step7Props extends NewSheetFormStepProps {}

const Step7: FC<Step7Props> = ({ sheet, setSheet }) => {
    return (
        <DoubleSideSections
            left={
                <TextSection
                    content={[
                        {
                            title: "Be vulnerable",
                            paragraphs: [
                                "Nobody's perfect. Choose a flaw to make your character complicated and believable. Like your ideal, you're free to choose one of these suggestions or create your own.",
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
                                "but my ",
                                {
                                    value: sheet.flaw,
                                    onChange: ({ target }) => {
                                        setSheet((prevSheet) => {
                                            prevSheet.flaw = target.value;
                                        });
                                    },
                                    placeholder: "flaw",
                                },
                                "side can get in my way.",
                            ]}
                        />
                        <SuggestionList
                            title={"flaw"}
                            options={flawOptions}
                            handleChange={(option) => {
                                setSheet((prevSheet) => {
                                    prevSheet.flaw = option;
                                });
                            }}
                        />
                    </Stack>
                </Stack>
            }
        />
    );
};

export default Step7;
