"use client";

import { type FC, useState } from "react";

import { Stack, Switch } from "@mui/material";
import { type Item } from "@prisma/client";

import { RollTheDieTag } from "../tags";

interface RollTheDieSwitchProps {
    defaultChecked: Item["rollTheDie"];
    onChange: (checked: Item["rollTheDie"]) => void;
}

const RollTheDieSwitch: FC<RollTheDieSwitchProps> = ({
    defaultChecked,
    onChange,
}) => {
    const [checked, setChecked] = useState(defaultChecked);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = event.target.checked;

        setChecked(newChecked);
        onChange(newChecked);
    };

    return (
        <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
            <Switch checked={checked} onChange={handleChange} />
            <RollTheDieTag checked={checked} />
        </Stack>
    );
};

export default RollTheDieSwitch;
