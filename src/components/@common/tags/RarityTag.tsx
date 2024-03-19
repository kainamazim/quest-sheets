"use client";

import { type FC } from "react";

import type { Item } from "@/types/data";

import DefaultTag from "./DefaultTag";

interface RarityTagProps {
    rarity: Item["rarity"];
    active?: boolean;
}

const rarityTagIcon: Record<Item["rarity"], string> = {
    common: "I",
    uncommon: "II",
    rare: "III",
    legendary: "IV",
    supreme: "V",
};

const rarityTagTitle: Record<Item["rarity"], string> = {
    common: "Common",
    uncommon: "Uncommon",
    rare: "Rare",
    legendary: "Legendary",
    supreme: "Supreme",
};

export const rarityTagClass = "item-rarity-tag-style";

const RarityTag: FC<RarityTagProps> = ({ rarity, active = false }) => {
    return (
        <DefaultTag
            title={rarityTagTitle[rarity]}
            className={rarityTagClass}
            sx={(theme) => ({
                border: `solid 2px`,
                cursor: "pointer",
                backgroundColor: theme.palette.background.paper,

                color: active ? theme.palette.text.primary : theme.palette.grey[500],
                borderColor: active
                    ? theme.palette.text.primary
                    : theme.palette.grey[500],

                width: "36px",

                "&:hover": {
                    color: theme.palette.text.primary,
                    borderColor: theme.palette.text.primary,
                },
            })}
        >
            {rarityTagIcon[rarity]}
        </DefaultTag>
    );
};

export default RarityTag;
