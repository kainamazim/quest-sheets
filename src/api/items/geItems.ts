import { type Item } from "@prisma/client";

import api from "@/api";
import { type ItemFilterState } from "@/components/item/ItemFilter";

const getItems = async (filter: ItemFilterState): Promise<Item[]> => {
    const { data } = await api.post<Item[]>("/api/items", {
        filter,
    });

    return data;
};

export default getItems;
