import { type FC, useState } from "react";

import { Stack } from "@mui/material";
import { type Item } from "@prisma/client";

import { AdventurePointTag } from "../../tags";
import NumberField from "./NumberField";

interface ActivationCostFieldProps {
    defaultValue: Item["activationCost"];
    onChange: (newActivationCost: Item["damage"]) => void;
}

const ActivationCostField: FC<ActivationCostFieldProps> = ({
    defaultValue,
    onChange,
}) => {
    const [activationCost, setActivationCost] =
        useState<Item["activationCost"]>(defaultValue);
    return (
        <Stack direction={"row"} alignItems={"flex-end"} gap={1}>
            <NumberField
                id={"item-activation-cost"}
                label={"Activation Cost"}
                value={activationCost ?? ""}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const newActivationCost = Number(event.target.value);

                    if (newActivationCost > -1 && newActivationCost < 100) {
                        setActivationCost(newActivationCost);
                        onChange(newActivationCost);
                    }
                }}
                sx={{
                    width: "140px",
                }}
            />
            <AdventurePointTag
                adventurePoints={activationCost}
                title={"Activation Cost"}
            />
        </Stack>
    );
};

export default ActivationCostField;
