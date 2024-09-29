import { type FC, type ReactElement } from "react";

import { CircularProgress, Divider, Stack } from "@mui/material";
import { type Item } from "@prisma/client";

import useItemsData, { type UseItemsDataInput } from "@/hooks/useItemsData";

import ItemFilter from "./ItemFilter";

interface ItemListProps extends UseItemsDataInput {
    renderItem: (
        item: Item,
        itemsState: ReturnType<typeof useItemsData>,
    ) => ReactElement;
}

const ItemList: FC<ItemListProps> = ({ initialItems, initialFilter, renderItem }) => {
    const itemsState = useItemsData({
        initialItems,
        initialFilter,
    });

    const { filter, setFilter, isPending, items } = itemsState;

    return (
        <Stack gap={4}>
            <ItemFilter
                filter={filter}
                setFilter={setFilter}
                defaultFilter={initialFilter}
            />
            <Divider />
            <Stack display={"flex"} direction={"row"} flexWrap={"wrap"} gap={2}>
                {isPending ? (
                    <CircularProgress />
                ) : (
                    items.map((item) => renderItem(item, itemsState))
                )}
            </Stack>
        </Stack>
    );
};

export default ItemList;
