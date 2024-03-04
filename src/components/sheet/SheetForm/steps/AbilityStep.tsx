import { type FC } from "react";

import { Stack } from "@mui/material";

import type { FormSheet, FullRole, SetFormSheetField } from "@/types";

import PathAccordion from "../../../role/learningPath/PathAccordion";

interface AbilityStepProps {
    sheet: FormSheet;
    setField: SetFormSheetField;
    role: FullRole;
}

const AbilityStep: FC<AbilityStepProps> = ({ sheet, setField, role }) => {
    const sheetAbilitiesIds = sheet.abilities.map((ability) => ability.id);

    return (
        <Stack>
            <Stack gap={2}>
                {role.learningPaths.map((learningPath) => {
                    const learningPathAbilityIds = learningPath.abilities.map(
                        ({ id }) => id,
                    );
                    const selectedAbilities = sheetAbilitiesIds.filter((id) =>
                        learningPathAbilityIds.includes(id),
                    );

                    return (
                        <PathAccordion
                            key={learningPath.id}
                            learningPath={learningPath}
                            badgeContent={
                                selectedAbilities.length ===
                                learningPath.abilities.length
                                    ? "Full"
                                    : selectedAbilities.length
                            }
                            abilities={learningPath.abilities.map((ability) => ({
                                ability,
                                checked: sheetAbilitiesIds.includes(ability.id),
                                handleChange: (newChecked) => {
                                    const newAbilities = newChecked
                                        ? [...sheet.abilities, ability]
                                        : sheet.abilities.filter(
                                              ({ id: abilityId }) =>
                                                  abilityId !== ability.id,
                                          );
                                    setField("abilities", newAbilities);
                                },
                            }))}
                        />
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default AbilityStep;
