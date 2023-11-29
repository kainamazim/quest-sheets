import type { Item } from "@prisma/client";

import api from "@/api";

const getSingleItem = async (itemId: Item["id"]): Promise<Item> => {
    const { data } = await api.post<Item>("/api/items/get", { itemId });

    return data;
};

export default getSingleItem;
