import { type Prisma } from "@prisma/client";

export const commonItems: Prisma.ItemCreateInput[] = [
    {
        rarity: "common",
        rollTheDie: false,
        title: "lockpicks",
        description:
            "A set of 5 lockpicks that can be used to try to bypass doors and other things with simple locks.",
        damage: null,
        activationCost: null,
    },
    {
        rarity: "common",
        rollTheDie: false,
        title: "magic rope",
        description:
            "A 50-foot rope that can automatically coil itself. It can also shrink to the size of a spool of yarn for easy carrying, and expand back to its normal size on its owner's command.",
        damage: null,
        activationCost: null,
    },
    {
        rarity: "common",
        rollTheDie: false,
        title: "magic flask",
        description:
            "A magic flask that automatically replenishes itself with a spirit of your choice. (Choose once.)",
        damage: null,
        activationCost: null,
    },
    {
        rarity: "common",
        rollTheDie: false,
        title: "magic candle",
        description:
            "A powerful candle that can light itself and snuff itself out on its owner's command. It drips wax but never seems to lose any",
        damage: null,
        activationCost: null,
    },
    {
        rarity: "common",
        rollTheDie: false,
        title: "kiln gauze",
        description:
            "A container of magic gauze that can be used to repair broken metal weapons like swords. When the gauze is wrapped around a severed weapon, it welds the weapon back together in a flash. There is enough gauze in each container to repair one weapon",
        damage: null,
        activationCost: null,
    },
    {
        rarity: "common",
        rollTheDie: false,
        title: "friend flute",
        description:
            "This is a small magic whistle that knows who your friends are. When you blow in the whistle, only your friends nearby can hear its sound.",
        damage: null,
        activationCost: null,
    },
    {
        rarity: "common",
        rollTheDie: false,
        title: "skycaller amulets",
        description:
            "A pair of magic amulets that allow their owners to communicate with each other at any distance within the same world. When held in the hand, the amulets allow the bearers to communicate with each other telepathically by wishing for the link to be created. Each pair of amulets can only communicate with each other and can only be activated up to three times a day. Each time the link is activated, the wearers may communicate for up to 5 minutes.",
        damage: null,
        activationCost: null,
    },
    {
        rarity: "common",
        rollTheDie: false,
        title: "brell's tent in a tin",
        description:
            "A colorful tin canister that's magically pressurized. When you unlock the canister and set it on the ground, the lid blows off a few moments later, deploying a large magic tent that can fit 30 people. Sound cannot escape the inside of the tent. A switch on the side of the tin teleports the tent back inside and closes the lid.",
        damage: null,
        activationCost: null,
    },
];
