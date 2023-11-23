import { type Prisma } from "@prisma/client";

export const supremeItems: Prisma.ItemCreateInput[] = [
    {
        rarity: "supreme",
        rollTheDie: false,
        title: "conservator's ring",
        description: "An unimaginably powerful ring that can consume universes.",
        damage: null,
        activationCost: 9,
    },
    {
        rarity: "supreme",
        rollTheDie: true,
        title: "cosmic forge",
        description:
            "An obsidian ring that allows the bearer to conjure any object into existence.",
        damage: null,
        activationCost: null,
    },
    {
        rarity: "supreme",
        rollTheDie: false,
        title: "dubbin's dire die",
        description: "A 20-sided die that bends the fate of nearby creatures.",
        damage: null,
        activationCost: 4,
    },
    {
        rarity: "supreme",
        rollTheDie: false,
        title: "it whispers to you",
        description: "A humble ring that bestows a terrible and cursed power.",
        damage: null,
        activationCost: null,
    },
    {
        rarity: "supreme",
        rollTheDie: false,
        title: "the hand",
        description: "A pocketwatch that can travel through time.",
        damage: null,
        activationCost: null,
    },
    {
        rarity: "supreme",
        rollTheDie: false,
        title: "wish heart",
        description: "A magic locket that turns wishes into reality.",
        damage: null,
        activationCost: null,
    },
];
