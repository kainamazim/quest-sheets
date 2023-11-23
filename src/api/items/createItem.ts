import { type Item } from "@prisma/client";

import api from "@/api";
import { type FormItem } from "@/components/item/ItemForm";

export type NewItem = Omit<Item, "id">;

const createItem = async (item: FormItem): Promise<Item> => {
    const { data } = await api.post<Item>("/api/items/new", { item });
    return data;
};

export default createItem;
