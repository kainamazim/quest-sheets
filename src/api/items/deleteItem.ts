import { type Item } from "@prisma/client";

import api from "@/api";

const deleteItem = async (itemId: Item["id"]): Promise<Item> => {
    const { data } = await api.post<Item>("/api/items/delete", { itemId });

    return data;
};

export default deleteItem;
