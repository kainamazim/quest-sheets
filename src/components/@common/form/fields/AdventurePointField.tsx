import { type FC } from "react";

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
    return (
        <Stack direction={"row"} alignItems={"flex-end"} gap={1}>
            <NumberField
                id={"item-activation-cost"}
                label={"Adventure Points"}
                value={defaultValue ?? 0}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const newAdventurePoints = Number(event.target.value);

                    if (newAdventurePoints >= 0 && newAdventurePoints <= 99) {
                        onChange(newAdventurePoints);
                    }
                }}
                sx={{
                    width: "164px",
                }}
            />
            <AdventurePointTag
                adventurePoints={defaultValue}
                title={"Adventure Points"}
            />
        </Stack>
    );
};

export default AdventurePointField;
