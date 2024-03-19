export enum ItemRarityEnum {
    common = "common",
    uncommon = "uncommon",
    rare = "rare",
    legendary = "legendary",
    supreme = "supreme",
}
export type ItemRarity = (typeof ItemRarityEnum)[keyof typeof ItemRarityEnum];

export interface Item {
    id: number;

    createdAt: string;
    updatedAt: string;

    authorId: number | null;

    rarity: ItemRarity;

    title: string;
    description: string;

    damage: number;
    activationCost: number;

    rollTheDie: boolean;
}
