"use client";

import { type FC } from "react";

import type { CharacterSheet } from "@/types/data";

import DefaultTag from "./DefaultTag";

interface AdventurePointTagProps {
    adventurePoints: CharacterSheet["currentAdventurePoints"] | null;
    title?: string;
}

const AdventurePointTag: FC<AdventurePointTagProps> = ({
    adventurePoints,
    title = "Adventure Points",
}) => {
    const active = Boolean(adventurePoints != null && adventurePoints > 0);

    return (
        <DefaultTag
            title={title}
            sx={(theme) => ({
                width: "48px",

                color: theme.palette.background.default,
                backgroundColor: active
                    ? theme.palette.text.primary
                    : theme.palette.grey[700],
                border: `${
                    active ? theme.palette.text.primary : theme.palette.grey[700]
                } solid 2px`,
                position: "relative",
                opacity: active ? 1 : 0.5,

                "&::after": {
                    content: '""',
                    position: "absolute",
                    right: -15,
                    top: -2,
                    borderTop: "10px solid transparent",
                    borderBottom: "11px solid transparent",
                    borderLeft: `13px solid ${
                        active ? theme.palette.text.primary : theme.palette.grey[700]
                    }`,
                },
            })}
        >
            {active ? adventurePoints : 0}
        </DefaultTag>
    );
};

export default AdventurePointTag;
