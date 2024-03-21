import type { FC } from "react";

import { Stack } from "@mui/material";

import DoubleSideSections from "@/components/@common/display/DoubleSideSections";
import TextSection from "@/components/@common/display/TextSection";
import { PhraseField } from "@/components/@common/form";

import type { NewSheetFormStepProps } from "../NewSheetFormProps";
import { SuggestionList } from "../fields";
import { bodyOptions, faceOptions, vibeOptions } from "../util";

export interface Step3Props extends NewSheetFormStepProps {}

const flexBasisFields = "12rem";

const Step3: FC<Step3Props> = ({ sheet, setSheet }) => {
    return (
        <DoubleSideSections
            left={
                <TextSection
                    content={[
                        {
                            title: "Enter the scene",
                            paragraphs: [
                                "You can give your character as much detail as you want, but it helps to start with a few distinctive features. Imagine what people would notice when you first enter a room.",
                                "As a starting point, imagine the world is filled with humanlike peoples who need the same things we do: food, safety, love, and fun.",
                                "The features you choose may suggest a unique ancestry, but they don't separate you from others. Assume that peoples of the world are compatible in matters of family, labor, and society.",
                                "You can choose any of the things from this list or create your own. The only rule is that features you choose to describe your character can't give them special powers",
                            ],
                        },
                    ]}
                />
            }
            right={
                <Stack gap={2}>
                    <PhraseField
                        phrase={["When people see me, they first notice my "]}
                    />
                    <PhraseField
                        phrase={[
                            {
                                value: sheet.appearance.body,
                                onChange: ({ target }) => {
                                    setSheet((prevSheet) => {
                                        prevSheet.appearance.body = target.value;
                                    });
                                },
                                placeholder: "body",
                                sx: {
                                    width: "100%",
                                    maxWidth: flexBasisFields,
                                },
                            },
                            ", ",
                            {
                                value: sheet.appearance.face,
                                onChange: ({ target }) => {
                                    setSheet((prevSheet) => {
                                        prevSheet.appearance.face = target.value;
                                    });
                                },
                                placeholder: "face",
                                sx: {
                                    width: "100%",
                                    maxWidth: flexBasisFields,
                                },
                            },
                            " and ",
                            {
                                value: sheet.appearance.vibe,
                                onChange: ({ target }) => {
                                    setSheet((prevSheet) => {
                                        prevSheet.appearance.vibe = target.value;
                                    });
                                },
                                placeholder: "vibe",
                                sx: {
                                    width: "100%",
                                    maxWidth: flexBasisFields,
                                },
                            },
                            ".",
                        ]}
                    />
                    <Stack
                        flexDirection={"row"}
                        flexWrap={"wrap"}
                        gap={3}
                        sx={{
                            "& > *": {
                                flexBasis: flexBasisFields,
                            },
                        }}
                    >
                        <SuggestionList
                            title={"body"}
                            options={bodyOptions}
                            handleChange={(option) => {
                                setSheet((prevSheet) => {
                                    prevSheet.appearance.body = option;
                                });
                            }}
                        />
                        <SuggestionList
                            title={"face"}
                            options={faceOptions}
                            handleChange={(option) => {
                                setSheet((prevSheet) => {
                                    prevSheet.appearance.face = option;
                                });
                            }}
                        />
                        <SuggestionList
                            title={"vibe"}
                            options={vibeOptions}
                            handleChange={(option) => {
                                setSheet((prevSheet) => {
                                    prevSheet.appearance.vibe = option;
                                });
                            }}
                        />
                    </Stack>
                </Stack>
            }
        />
    );
};

export default Step3;
