import api from "@/api";
import { type ItemFilterState } from "@/components/item/ItemFilter";
import type { Item } from "@/types/data";

const getItems = async (filter: ItemFilterState): Promise<Item[]> => {
    const { data } = await api.post<Item[]>("/api/items", {
        filter,
    });

    return data;
};

export default getItems;
