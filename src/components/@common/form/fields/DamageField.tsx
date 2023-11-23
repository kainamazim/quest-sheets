import { type FC, useState } from "react";

import { Stack } from "@mui/material";
import { type Item } from "@prisma/client";

import { DamageTag } from "../../tags";
import NumberField from "./NumberField";

interface DamageFieldProps {
    defaultValue: Item["damage"];
    onChange: (newDamage: Item["damage"]) => void;
}

const DamageField: FC<DamageFieldProps> = ({ defaultValue, onChange }) => {
    const [damage, setDamage] = useState<Item["damage"]>(defaultValue);

    return (
        <Stack direction={"row"} alignItems={"flex-end"} gap={1}>
            <NumberField
                id={"item-damage"}
                label={"Damage"}
                value={damage ?? ""}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const newDamage = Number(event.target.value);

                    if (newDamage > -1 && newDamage < 100) {
                        setDamage(newDamage);
                        onChange(newDamage);
                    }
                }}
                sx={{ width: "100px" }}
            />
            <DamageTag damage={damage} />
        </Stack>
    );
};

export default DamageField;
