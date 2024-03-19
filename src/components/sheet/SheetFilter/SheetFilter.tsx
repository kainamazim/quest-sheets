"use client";

import { type Dispatch, type FC, type SetStateAction } from "react";

import { Box, Button, Stack } from "@mui/material";

import { SearchField } from "@/components/@common/form";
import useIsMobile from "@/hooks/useIsMobile";
import { type CharacterSheet, type Role } from "@/types/data";

import RoleMultiSelect from "./RoleMultiSelect";
import SheetSortSelect from "./SheetSortSelect";

export interface SheetFilterState {
    name: CharacterSheet["name"];
    roleIds: Array<CharacterSheet["roleId"]>;
    sortBy: keyof Pick<CharacterSheet, "createdAt" | "name" | "roleId">;
}

export interface RoleFilterProps {
    filter: SheetFilterState;
    defaultFilter?: SheetFilterState;
    roles: Role[];
    setFilter: Dispatch<SetStateAction<SheetFilterState>>;
}

export const defaultFilter: SheetFilterState = {
    name: "",
    roleIds: [],
    sortBy: "createdAt",
};

const SheetFilter: FC<RoleFilterProps> = ({
    filter,
    setFilter,
    defaultFilter: externalDefaultFilter = defaultFilter,
    roles,
}) => {
    const { name, roleIds, sortBy } = filter;

    const isMobile = useIsMobile();

    const setFilterField: <T extends keyof SheetFilterState>(
        key: T,
        value: SheetFilterState[T],
    ) => void = (key, value) => {
        setFilter((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <Stack gap={1}>
            <SearchField
                stateValue={name}
                label={"Search by name"}
                handleSearch={(newSearch) => {
                    setFilterField("name", newSearch);
                }}
            />
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,

                    ...(isMobile && {
                        "& > *": {
                            flexGrow: 1,
                        },
                    }),
                }}
            >
                <RoleMultiSelect
                    value={roleIds}
                    roles={roles}
                    handleChange={(roles) => {
                        setFilterField("roleIds", roles);
                    }}
                />
                <SheetSortSelect
                    sort={sortBy}
                    handleChange={(newSortBy) => {
                        setFilterField("sortBy", newSortBy);
                    }}
                />
                <Button
                    color="inherit"
                    onClick={() => {
                        setFilter(externalDefaultFilter);
                    }}
                    sx={{ flexBasis: 128 }}
                >
                    {"Reset Filter"}
                </Button>
            </Box>
        </Stack>
    );
};

export default SheetFilter;
