import { type Item } from "@prisma/client";

import api from "@/api";
import { type FormItem } from "@/components/item/ItemForm";

const updateItem = async (item: FormItem): Promise<Item> => {
    const { data } = await api.post<Item>("/api/items/update", { item });

    return data;
};

export default updateItem;
