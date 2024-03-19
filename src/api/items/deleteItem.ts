import api from "@/api";
import type { Item } from "@/types/data";

const deleteItem = async (itemId: Item["id"]): Promise<Item> => {
    const { data } = await api.post<Item>("/api/items/delete", { itemId });

    return data;
};

export default deleteItem;
