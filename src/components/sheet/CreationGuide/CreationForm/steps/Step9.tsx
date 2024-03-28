import type { FC } from "react";

import { Stack } from "@mui/material";
import { type Role } from "@prisma/client";

import TextSection from "@/components/@common/display/TextSection";
import { PhraseField } from "@/components/@common/form";

import type { NewSheetFormStepProps } from "../CreationFormProps";

export interface Step9Props extends NewSheetFormStepProps {
    roles: Role[];
}

const Step9: FC<Step9Props> = ({ sheet, roles }) => {
    const currentRole = roles.find((role) => role.id === sheet.roleId) ?? roles[0];
    return (
        <Stack
            gap={2}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
                paddingBlock: 4,
                paddingInline: 5,
            }}
        >
            <TextSection
                content={[{ title: "Here's Your First Character", paragraphs: [] }]}
            />
            <Stack
                sx={{
                    paddingBlock: 4,
                    paddingInline: 5,

                    borderWidth: 3,
                    borderStyle: "solid",
                    borderColor: (theme) => theme.palette.text.primary,
                }}
            >
                <PhraseField
                    phrase={[
                        "Hello, ",
                        "My name is " + sheet.name + " (" + sheet.pronoun + ").",
                        "I'm " +
                            sheet.age +
                            " years old and stand " +
                            sheet.height +
                            " feet tall.",
                        "I'm the party's " + currentRole.title + ".",
                        "When people see me, they first notice my " +
                            sheet.appearance.body +
                            ", " +
                            sheet.appearance.face +
                            " and " +
                            sheet.appearance.face +
                            ".",
                        "I wear " +
                            sheet.appearance.clothing +
                            " and move with " +
                            sheet.appearance.movement +
                            ".",
                        "I'm from " +
                            sheet.home.short_description +
                            ", where my people are known for " +
                            sheet.home.peculiarity +
                            ".",
                        "I believe in " +
                            sheet.belief +
                            ", but my " +
                            sheet.flaw +
                            " side can get in my way.",
                        "I dream of " + sheet.dream + ".",
                    ]}
                />
            </Stack>
        </Stack>
    );
};

export default Step9;
