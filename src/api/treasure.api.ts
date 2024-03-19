import api from "@/api";
import type { Item, ItemRarity } from "@/types/data";

export type GetTreasureOutput = Record<ItemRarity, Item[]>;

export const getTreasure = async (): Promise<GetTreasureOutput> => {
    const { data: treasure } = await api.get<GetTreasureOutput>("/book/treasure");

    return treasure;
};
