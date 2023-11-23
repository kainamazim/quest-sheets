"use client";

import { type FC } from "react";

import { type Item } from "@prisma/client";

import DefaultTag from "./DefaultTag";

interface DamageTagProps {
    damage: Item["damage"];
}

const DamageTag: FC<DamageTagProps> = ({ damage }) => {
    const active = Boolean(damage != null && damage > 0);

    return (
        <DefaultTag
            title={"Damage"}
            sx={(theme) => ({
                color: active ? theme.palette.error.main : theme.palette.grey[700],
                backgroundColor: theme.palette.background.default,
                border: `${
                    active ? theme.palette.error.main : theme.palette.grey[700]
                } solid 2px`,
                opacity: active ? 1 : 0.5,
            })}
        >
            {active ? damage : 0}
        </DefaultTag>
    );
};

export default DamageTag;
