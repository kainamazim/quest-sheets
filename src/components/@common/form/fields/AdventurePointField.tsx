import { type FC, useState } from "react";

import { Stack } from "@mui/material";
import { type CharacterSheet } from "@prisma/client";

import { AdventurePointTag } from "../../tags";
import NumberField from "./NumberField";

interface AdventurePointFieldProps {
    defaultValue: CharacterSheet["currentAdventurePoints"];
    onChange: (newAdventurePoints: CharacterSheet["currentAdventurePoints"]) => void;
}

const AdventurePointField: FC<AdventurePointFieldProps> = ({
    defaultValue,
    onChange,
}) => {
    const [adventurePoints, setAdventurePoints] =
        useState<CharacterSheet["currentAdventurePoints"]>(defaultValue);
    return (
        <Stack direction={"row"} alignItems={"flex-end"} gap={1}>
            <NumberField
                id={"item-activation-cost"}
                label={"Adventure Points"}
                value={adventurePoints ?? 0}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const newAdventurePoints = Number(event.target.value);

                    if (newAdventurePoints >= 0 && newAdventurePoints <= 99) {
                        setAdventurePoints(newAdventurePoints);
                        onChange(newAdventurePoints);
                    }
                }}
                sx={{
                    width: "164px",
                }}
            />
            <AdventurePointTag
                adventurePoints={adventurePoints}
                title={"Adventure Points"}
            />
        </Stack>
    );
};

export default AdventurePointField;
