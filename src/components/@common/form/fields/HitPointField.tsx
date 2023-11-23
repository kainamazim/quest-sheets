import { type FC } from "react";

import { Stack } from "@mui/material";
import { type CharacterSheet } from "@prisma/client";

import { HitPointTag } from "../../tags";
import NumberField from "./NumberField";

interface HitPointFieldProps {
    defaultValue: CharacterSheet["currentHitPoints"];
    onChange: (newDamage: CharacterSheet["currentHitPoints"]) => void;
}

const HitPointField: FC<HitPointFieldProps> = ({
    defaultValue: currentHitPoints,
    onChange,
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newHitPoints = Number(event.target.value);

        if (newHitPoints >= 0 && newHitPoints <= 10) onChange(newHitPoints);
    };

    return (
        <Stack direction={"row"} alignItems={"flex-end"} gap={1}>
            <NumberField
                id={"character-hit-points"}
                label={"Hit Points"}
                value={currentHitPoints ?? 0}
                onChange={handleChange}
                sx={{ width: "100px" }}
            />
            <HitPointTag hitPoints={currentHitPoints} />
        </Stack>
    );
};

export default HitPointField;
