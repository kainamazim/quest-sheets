import { type Ability } from "@prisma/client";

import {
    magicianClairvoyancePath,
    magicianConjurationPath,
    magicianLegendaryPath,
    magicianMannequinsPath,
    magicianMayhemPath,
    magicianMindControlPath,
    magicianMisdirectionPath,
} from "../learningPaths/magicianLearningPaths";

const magicianMisdirectionAbilities: Ability[] = [
    {
        id: 164,
        title: "magic tricks",
        description:
            "Produce a tiny magical effect to surprise, delight, or confuse those around you.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: magicianMisdirectionPath.id,
        order: 1,
    },
    {
        id: 165,
        title: "mesmerize",
        description: "Dazzle a nearby creature with an optical illusion.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: magicianMisdirectionPath.id,
        order: 2,
    },
    {
        id: 166,
        title: "overthere",
        description:
            "Make a suggestive gesture, redirecting a hostile creature’s attention.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: magicianMisdirectionPath.id,
        order: 3,
    },
    {
        id: 167,
        title: "mirage",
        description:
            "Conjure a major illusion that can be programmed with looping mechanics.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: magicianMisdirectionPath.id,
        order: 4,
    },
    {
        id: 168,
        title: "invisibility",
        description: "Make a creature or object invisible.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: magicianMisdirectionPath.id,
        order: 5,
    },
];

const magicianMannequinsAbilities: Ability[] = [
    {
        id: 169,
        title: "splitting image",
        description:
            "Produce a tiny magical effect to surprise, delight, or confuse those around you.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: magicianMannequinsPath.id,
        order: 1,
    },
    {
        id: 170,
        title: "phantom menace",
        description: "Dazzle a nearby creature with an optical illusion.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: magicianMannequinsPath.id,
        order: 2,
    },
    {
        id: 171,
        title: "illusory creature",
        description:
            "Make a suggestive gesture, redirecting a hostile creature’s attention.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: magicianMannequinsPath.id,
        order: 3,
    },
];

const magicianClairvoyanceAbilities: Ability[] = [
    {
        id: 172,
        title: "magic eye",
        description: "You briefly gain the ability to see beyond physical reality.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: magicianClairvoyancePath.id,
        order: 1,
    },
    {
        id: 173,
        title: "whisper",
        description:
            "You telepathically send a message to a nearby creature, or open a link with them for a conversation.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: magicianClairvoyancePath.id,
        order: 2,
    },
    {
        id: 174,
        title: "message",
        description:
            "You open a telepathic communication link with a creature, even if you don’t know where they are.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: magicianClairvoyancePath.id,
        order: 3,
    },
    {
        id: 175,
        title: "interpret",
        description:
            "You enter the mind of a nearby creature and learn their language.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: magicianClairvoyancePath.id,
        order: 4,
    },
    {
        id: 176,
        title: "insight",
        description:
            "You gaze into the mind of a creature, learning their most prominent intention.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: magicianClairvoyancePath.id,
        order: 5,
    },
];

const magicianConjurationAbilities: Ability[] = [
    {
        id: 177,
        title: "little bird",
        description: "You summon an illusory bird that keeps watch over an area.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: magicianConjurationPath.id,
        order: 1,
    },
    {
        id: 178,
        title: "helen’s fantastic feast",
        description:
            "Summon an elaborate feast that restores the hit points of your guests.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: magicianConjurationPath.id,
        order: 2,
    },
    {
        id: 179,
        title: "monitor",
        description:
            "Summon a small illusory servant that you can direct to scout ahead of you.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: magicianConjurationPath.id,
        order: 3,
    },
    {
        id: 180,
        title: "shadow haven",
        description:
            "Create a secret dwelling in a shadow plane that only you and your friends can access.",
        activationCost: 5,
        rollTheDie: false,
        learningPathId: magicianConjurationPath.id,
        order: 4,
    },
];

const magicianMindControlAbilities: Ability[] = [
    {
        id: 181,
        title: "bamboozle",
        description: "Make a creature mildly confused about a specific subject.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: magicianMindControlPath.id,
        order: 1,
    },
    {
        id: 182,
        title: "wren’s delightful dream",
        description:
            "Give a creature a deeply comforting dream that makes them feel beloved and forgiving.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: magicianMindControlPath.id,
        order: 2,
    },
    {
        id: 183,
        title: "perky profanation",
        description: "Curse a nearby creature to behave absurdly.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: magicianMindControlPath.id,
        order: 3,
    },
    {
        id: 184,
        title: "fear",
        description:
            "Breach the mind of a creature to haunt them with their worst fear.",
        activationCost: 4,
        rollTheDie: true,
        learningPathId: magicianMindControlPath.id,
        order: 4,
    },
];

const magicianMayhemAbilities: Ability[] = [
    {
        id: 185,
        title: "scintillate",
        description:
            "Launch a streaking bolt of sparks to harm an enemy or create a harmless firework.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: magicianMayhemPath.id,
        order: 1,
    },
    {
        id: 186,
        title: "bedazzle",
        description: "Summon prismatic bolts that can impale and dazzle enemies.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: magicianMayhemPath.id,
        order: 2,
    },
    {
        id: 187,
        title: "loosen",
        description:
            "Create a cascading wave of magic mischief that loosens things that are fastened or tightened.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: magicianMayhemPath.id,
        order: 3,
    },
    {
        id: 188,
        title: "chaos ball",
        description:
            "Summon a small elastic ball that bounces chaotically, shattering small and fragile objects.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: magicianMayhemPath.id,
        order: 4,
    },
];

const magicianLegendaryAbilities: Ability[] = [
    {
        id: 189,
        title: "peerless pilot",
        description: "Conjure a fantastic hot air balloon from another dimension.",
        activationCost: 8,
        rollTheDie: false,
        learningPathId: magicianLegendaryPath.id,
        order: 1,
    },
    {
        id: 190,
        title: "control",
        description:
            "Dominate the mind of a nearby creature, taking complete control of them.",
        activationCost: 5,
        rollTheDie: false,
        learningPathId: magicianLegendaryPath.id,
        order: 2,
    },
    {
        id: 191,
        title: "perfect gift",
        description:
            "Glimpse the mind of a creature to summon an emotionally priceless gift for them.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: magicianLegendaryPath.id,
        order: 3,
    },
    {
        id: 192,
        title: "invasion",
        description:
            "Enter the dream of a creature to implant an idea in their mind.",
        activationCost: 5,
        rollTheDie: false,
        learningPathId: magicianLegendaryPath.id,
        order: 4,
    },
];

export const magicianAbilities: Ability[] = [
    ...magicianMisdirectionAbilities,
    ...magicianMannequinsAbilities,
    ...magicianClairvoyanceAbilities,
    ...magicianConjurationAbilities,
    ...magicianMindControlAbilities,
    ...magicianMayhemAbilities,
    ...magicianLegendaryAbilities,
];
