import { type Ability } from "@prisma/client";

import {
    invokerInquiriesPath,
    invokerInvocationPath,
    invokerLegendaryPath,
    invokerVerdictsPath,
    invokerWardsPath,
    invokerWrathPath,
} from "../learningPaths/invokerLearningPaths";

const invokerInvocationAbilities: Ability[] = [
    {
        id: 28,
        title: "declare",
        description:
            "Profess a reason for intervening in a matter, steeling your resolve.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: invokerInvocationPath.id,
        order: 1,
    },
    {
        id: 29,
        title: "petition",
        description: "While regrouping, a petition at the table to receive a boon.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: invokerInvocationPath.id,
        order: 2,
    },
    {
        id: 30,
        title: "invoke",
        description:
            "Leave your worldly body behind to seek answers in a liminal plane of existence.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: invokerInvocationPath.id,
        order: 3,
    },
    {
        id: 31,
        title: "vow",
        description: "Permanently bind yourself in service of an ideal.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: invokerInvocationPath.id,
        order: 4,
    },
];

const invokerInquiriesAbilities: Ability[] = [
    {
        id: 32,
        title: "soul gaze",
        description:
            "You peer into the eyes of another creature to sense their ideals and flaws.",
        activationCost: 1,
        rollTheDie: true,
        learningPathId: invokerInquiriesPath.id,
        order: 1,
    },
    {
        id: 33,
        title: "impression",
        description: "You brush against a creature, feeling its desires.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: invokerInquiriesPath.id,
        order: 2,
    },
    {
        id: 34,
        title: "evil eye",
        description:
            "You close your eyes and sense the worst thing that ever happened nearby.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: invokerInquiriesPath.id,
        order: 3,
    },
    {
        id: 35,
        title: "shadowseek",
        description:
            "You project yourself into a shadow plane to seek the location of a creature or object anywhere in the omniverse.",
        activationCost: 3,
        rollTheDie: true,
        learningPathId: invokerInquiriesPath.id,
        order: 4,
    },
];

const invokerVerdictsAbilities: Ability[] = [
    {
        id: 36,
        title: "inspire",
        description:
            "You recite a meaningful statement, inspiring an NPC to live up to their ideal.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: invokerVerdictsPath.id,
        order: 1,
    },
    {
        id: 37,
        title: "compel truth",
        description:
            "You grip the mind of a nearby creature, forcing it to tell the truth.",
        activationCost: 1,
        rollTheDie: true,
        learningPathId: invokerVerdictsPath.id,
        order: 2,
    },
    {
        id: 38,
        title: "forgive",
        description:
            "You place a forgiving hand on a creature, relieving their conscience of guilt for a past transgression.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: invokerVerdictsPath.id,
        order: 3,
    },
    {
        id: 39,
        title: "liberate",
        description:
            "You channel the weight of your devotion to alleviate an NPC of a character flaw.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: invokerVerdictsPath.id,
        order: 4,
    },
];

const invokerWrathAbilities: Ability[] = [
    {
        id: 40,
        title: "fiery avenger",
        description:
            "You speak a phrase of power, igniting your weapon in magical flame.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: invokerWrathPath.id,
        order: 1,
    },
    {
        id: 41,
        title: "thunderous word",
        description:
            "You speak a word of power that releases a thunderous shockwave.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: invokerWrathPath.id,
        order: 2,
    },
    {
        id: 42,
        title: "lawbringer",
        description:
            "You raise your hand into the sky and summon a deadly spectral warhammer.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: invokerWrathPath.id,
        order: 3,
    },
    {
        id: 43,
        title: "smite",
        description: "You condemn a creature, engulfing it in radiant flame.",
        activationCost: 5,
        rollTheDie: false,
        learningPathId: invokerWrathPath.id,
        order: 4,
    },
    {
        id: 44,
        title: "blazing avenger",
        description:
            "You permanently enchant a weapon, imbuing it with incredible power.",
        activationCost: 6,
        rollTheDie: false,
        learningPathId: invokerWrathPath.id,
        order: 5,
    },
];

const invokerWardsAbilities: Ability[] = [
    {
        id: 45,
        title: "shield",
        description: "Summon a magical shield that blocks damage.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: invokerWardsPath.id,
        order: 1,
    },
    {
        id: 46,
        title: "sigil",
        description:
            "Draw a magic sigil that affects nearby creatures in various ways.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: invokerWardsPath.id,
        order: 2,
    },
    {
        id: 47,
        title: "rebuke",
        description:
            "You issue a word of power to an attacker, knocking them backward.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: invokerWardsPath.id,
        order: 3,
    },
    {
        id: 48,
        title: "oblation",
        description:
            "You place your hands on a creature and utter a loving phrase, restoring their hit points.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: invokerWardsPath.id,
        order: 4,
    },
    {
        id: 49,
        title: "befizzle",
        description: "You curse a creature, rendering it unable to use magic.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: invokerWardsPath.id,
        order: 5,
    },
];

const invokerLegendaryAbilities: Ability[] = [
    {
        id: 50,
        title: "wraith",
        description: "You now enter an ethereal form when at 0 HP.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: invokerLegendaryPath.id,
        order: 1,
    },
    {
        id: 51,
        title: "sacrifice",
        description:
            "You bring a creature back from the dead, at a cost to your own soul…",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: invokerLegendaryPath.id,
        order: 2,
    },
    {
        id: 52,
        title: "prophecy",
        description: "You glimpse a creature’s fate, shaping its future.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: invokerLegendaryPath.id,
        order: 3,
    },
    {
        id: 53,
        title: "eternity gate",
        description:
            "You project yourself past all realities into the beyond to seek and find a single truth.",
        activationCost: 7,
        rollTheDie: true,
        learningPathId: invokerLegendaryPath.id,
        order: 4,
    },
];

export const invokerAbilities: Ability[] = [
    ...invokerInvocationAbilities,
    ...invokerInquiriesAbilities,
    ...invokerVerdictsAbilities,
    ...invokerWrathAbilities,
    ...invokerWardsAbilities,
    ...invokerLegendaryAbilities,
];
