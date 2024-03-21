import type { FC } from "react";

import { Stack } from "@mui/material";

import { ViewCard } from "@/components/@common/display";
import DoubleSideSections from "@/components/@common/display/DoubleSideSections";
import TextSection from "@/components/@common/display/TextSection";
import { type FullRole } from "@/types";

import type { NewSheetFormStepProps } from "../NewSheetFormProps";

export interface Step2Props extends NewSheetFormStepProps {
    roles: FullRole[];
}

const Step2: FC<Step2Props> = ({ sheet, setSheetField, roles }) => {
    return (
        <DoubleSideSections
            left={
                <TextSection
                    content={[
                        {
                            title: "Choose a role",
                            paragraphs: [
                                "Your role gives you a unique set of abilities and is a big part of your character’s identity.",
                                "Quest’s ability catalog has over 200 abilities, and each role’s abilities are unique. You’ll start with a small set of special abilities and then learn more as you grow and change during your adventure.",
                            ],
                        },
                    ]}
                />
            }
            right={
                <Stack flexDirection={"row"} gap={2} flexWrap={"wrap"}>
                    {roles.map((role) => (
                        <ViewCard
                            key={role.id}
                            title={role.title}
                            description={role.description}
                            checked={role.id === sheet.roleId}
                            handleChange={(checked) => {
                                setSheetField("roleId", checked ? role.id : null);
                            }}
                        />
                    ))}
                </Stack>
            }
        />
    );
};

export default Step2;
