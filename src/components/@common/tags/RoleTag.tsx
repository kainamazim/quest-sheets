"use client";

import { type FC } from "react";

import { type Role } from "@/types/data";

import DefaultTag from "./DefaultTag";

interface RoleTagProps {
    role: Role["title"];
    active?: boolean;
}

export const roleTagClass = "role-tag-style";

const RoleTag: FC<RoleTagProps> = ({ role, active = false }) => {
    return (
        <DefaultTag
            title={"Role"}
            className={roleTagClass}
            sx={(theme) => ({
                border: `solid 2px`,
                cursor: "pointer",
                backgroundColor: theme.palette.background.paper,

                color: active ? theme.palette.text.primary : theme.palette.grey[500],
                borderColor: active
                    ? theme.palette.text.primary
                    : theme.palette.grey[500],

                "&:hover": {
                    color: theme.palette.text.primary,
                    borderColor: theme.palette.text.primary,
                },
            })}
        >
            {role}
        </DefaultTag>
    );
};

export default RoleTag;
