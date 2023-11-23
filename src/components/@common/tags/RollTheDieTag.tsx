"use client";

import { type FC } from "react";

import DefaultTag from "./DefaultTag";

interface RollTheDieTagProps {
    checked: boolean;
}

const RollTheDieTag: FC<RollTheDieTagProps> = ({ checked }) => {
    return (
        <DefaultTag
            title={checked ? "You should roll the dice to use it." : ""}
            sx={({ palette: { text, background, grey } }) => ({
                backgroundColor: checked ? text.primary : grey[700],
                color: background.default,
                border: `${checked ? text.primary : grey[700]} solid 1px`,
                opacity: checked ? 1 : 0.5,
            })}
        >
            {"Roll The Die"}
        </DefaultTag>
    );
};

export default RollTheDieTag;
