"use client";

import { type Dispatch, type FC, type SetStateAction } from "react";

import { Box, Button, Stack } from "@mui/material";

import { SearchField } from "@/components/@common/form";
import useIsMobile from "@/hooks/useIsMobile";
import type { Item } from "@/types/data";

import ItemAuthorSelect from "./ItemAuthorSelect";
import ItemSortSelect from "./ItemSortSelect";
import RarityMultiSelect from "./RarityMultiSelect";

export interface ItemFilterState {
    title: string;
    rarity: Array<Item["rarity"]>;
    sortBy: keyof Pick<Item, "createdAt" | "title" | "rarity">;
    author: "user" | "treasure" | "all";
}

export interface ItemFilterProps {
    filter: ItemFilterState;
    defaultFilter?: ItemFilterState;
    setFilter: Dispatch<SetStateAction<ItemFilterState>>;
}

export const defaultFilter: ItemFilterState = {
    title: "",
    rarity: [],
    sortBy: "createdAt",
    author: "all",
};

const ItemFilter: FC<ItemFilterProps> = ({
    filter,
    setFilter,
    defaultFilter: externalDefaultFilter = defaultFilter,
}) => {
    const { title, rarity, sortBy, author } = filter;

    const isMobile = useIsMobile();

    const setFilterField: <T extends keyof ItemFilterState>(
        key: T,
        value: ItemFilterState[T],
    ) => void = (key, value) => {
        setFilter((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <Stack gap={1}>
            <SearchField
                stateValue={title}
                label={"Search by title"}
                handleSearch={(newSearch) => {
                    setFilterField("title", newSearch);
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
                <RarityMultiSelect
                    value={rarity}
                    handleChange={(rarities) => {
                        setFilterField("rarity", rarities);
                    }}
                />
                <ItemAuthorSelect
                    author={author}
                    handleChange={(newAuthor) => {
                        setFilterField("author", newAuthor);
                    }}
                />
                <ItemSortSelect
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

export default ItemFilter;
