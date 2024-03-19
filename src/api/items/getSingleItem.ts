import api from "@/api";
import type { Item } from "@/types/data";

const getSingleItem = async (itemId: Item["id"]): Promise<Item> => {
    const { data } = await api.post<Item>("/api/items/get", { itemId });

    return data;
};

export default getSingleItem;
