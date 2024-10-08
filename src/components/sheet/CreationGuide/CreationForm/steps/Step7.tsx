import type { FC } from "react";

import { Stack } from "@mui/material";

import DoubleSideSections from "@/components/@common/display/DoubleSideSections";
import TextSection from "@/components/@common/display/TextSection";
import { PhraseField } from "@/components/@common/form";

import type { NewSheetFormStepProps } from "../CreationFormProps";
import { TraitOption } from "../fields";
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
                    <Stack gap={3}>
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
                                    autoFocus: true,
                                },
                                "side can get in my way.",
                            ]}
                        />
                        <Stack flexDirection={"row"} flexWrap={"wrap"} gap={2}>
                            {flawOptions.map((flaw, index) => (
                                <TraitOption
                                    key={flaw.title + index}
                                    trait={flaw}
                                    handleClick={() => {
                                        setSheet((prevSheet) => {
                                            prevSheet.flaw = flaw.title;
                                        });
                                    }}
                                />
                            ))}
                        </Stack>
                    </Stack>
                </Stack>
            }
        />
    );
};

export default Step7;
