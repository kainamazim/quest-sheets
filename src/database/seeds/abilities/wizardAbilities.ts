import { type Ability } from "@prisma/client";

import {
    wizardConjurationPath,
    wizardEvocationPath,
    wizardLegendaryPath,
    wizardMagecraftPath,
    wizardPlaneshiftingPath,
    wizardProtectionPath,
    wizardTrickeryPath,
} from "../learningPaths/wizardLearningPaths";

const wizardEvocationAbilities: Ability[] = [
    {
        id: 193,
        title: "magic strike",
        description: "Shoot a shimmering missile of force from your wand or staff.",
        activationCost: 2,
        rollTheDie: true,
        learningPathId: wizardEvocationPath.id,
        order: 1,
    },
    {
        id: 194,
        title: "kindle",
        description: "Rub your hands together, igniting a target on fire.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: wizardEvocationPath.id,
        order: 2,
    },
    {
        id: 195,
        title: "clap",
        description: "Create a thunderous wave of force by clapping your hands.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: wizardEvocationPath.id,
        order: 3,
    },
    {
        id: 196,
        title: "telekinesis",
        description: "Move a nearby creature or object using only your mind.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: wizardEvocationPath.id,
        order: 4,
    },
    {
        id: 197,
        title: "last light",
        description:
            "Channel a blinding beam of light at a target that ignites flammable objects and can melt steel.",
        activationCost: 5,
        rollTheDie: false,
        learningPathId: wizardEvocationPath.id,
        order: 5,
    },
];

const wizardConjurationAbilities: Ability[] = [
    {
        id: 198,
        title: "familiar",
        description: "You summon a tiny spectral creature who becomes your ally.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: wizardConjurationPath.id,
        order: 1,
    },
    {
        id: 199,
        title: "pegasus cloak",
        description:
            "Bestow yourself and nearby creatures with an illusory cloak that allows them to levitate.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: wizardConjurationPath.id,
        order: 2,
    },
    {
        id: 200,
        title: "force field",
        description:
            "Create a paper-thin wall of force that can stop objects from passing through.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: wizardConjurationPath.id,
        order: 3,
    },
    {
        id: 201,
        title: "conjure",
        description: "Imagine an object, causing it to appear nearby.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: wizardConjurationPath.id,
        order: 4,
    },
];

const wizardPlaneshiftingAbilities: Ability[] = [
    {
        id: 202,
        title: "blink",
        description: "Vanish and reappear somewhere nearby.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: wizardPlaneshiftingPath.id,
        order: 1,
    },
    {
        id: 203,
        title: "gate",
        description: "Teleport back to a special place you have bound yourself to.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: wizardPlaneshiftingPath.id,
        order: 2,
    },
    {
        id: 204,
        title: "portal",
        description: "Conjure a series of portals that are linked to one another.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: wizardPlaneshiftingPath.id,
        order: 3,
    },
    {
        id: 205,
        title: "dark door",
        description:
            "Knock on a door, making it a temporary portal to a shadow plane.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: wizardPlaneshiftingPath.id,
        order: 4,
    },
    {
        id: 206,
        title: "teleport",
        description: "Snap your fingers, teleporting to any place you choose.",
        activationCost: 5,
        rollTheDie: true,
        learningPathId: wizardPlaneshiftingPath.id,
        order: 5,
    },
];

const wizardMagecraftAbilities: Ability[] = [
    {
        id: 207,
        title: "no",
        description: "Neutralize a spell that another creature is casting.",
        activationCost: 2,
        rollTheDie: true,
        learningPathId: wizardMagecraftPath.id,
        order: 1,
    },
    {
        id: 208,
        title: "reflect",
        description:
            "Produce a counterspell that reflects a spell another creature is casting.",
        activationCost: 3,
        rollTheDie: true,
        learningPathId: wizardMagecraftPath.id,
        order: 2,
    },
    {
        id: 209,
        title: "enscroll",
        description: "Create a Spell Scroll that contains a spell you know.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: wizardMagecraftPath.id,
        order: 3,
    },
    {
        id: 210,
        title: "spellsteal",
        description:
            "Glimpse a creature’s mind to learn a spell you have observed them casting.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: wizardMagecraftPath.id,
        order: 4,
    },
];

const wizardProtectionAbilities: Ability[] = [
    {
        id: 211,
        title: "sense magic",
        description:
            "Get a tingling feeling in your bones when you’re near magic, and discern its nature.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: wizardProtectionPath.id,
        order: 1,
    },
    {
        id: 212,
        title: "aura’s silvery broadcast",
        description:
            "Broadcast a message up to 20 words in length to every creature within one kilometer.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: wizardProtectionPath.id,
        order: 2,
    },
    {
        id: 213,
        title: "scry",
        description:
            "Flash forward in time to glimpse your actions in the near future.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: wizardProtectionPath.id,
        order: 3,
    },
    {
        id: 214,
        title: "see",
        description: "See through all magical deceptions for the next hour.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: wizardProtectionPath.id,
        order: 4,
    },
    {
        id: 215,
        title: "find",
        description:
            "Discover the location of an object you have held before, and teleport it to your location.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: wizardProtectionPath.id,
        order: 5,
    },
];

const wizardTrickeryAbilities: Ability[] = [
    {
        id: 216,
        title: "speak",
        description: "Speak silently into the mind of a nearby creature.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: wizardTrickeryPath.id,
        order: 1,
    },
    {
        id: 217,
        title: "pinch",
        description: "Briefly imbue your fingers with supernatural strength.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: wizardTrickeryPath.id,
        order: 2,
    },
    {
        id: 218,
        title: "stretch",
        description:
            "Enlarge or shrink a nearby creature or object by up to twice or half its size.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: wizardTrickeryPath.id,
        order: 3,
    },
    {
        id: 219,
        title: "undo",
        description: "Speak a word of power, reversing the fate of a nearby object.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: wizardTrickeryPath.id,
        order: 4,
    },
];

const wizardLegendaryAbilities: Ability[] = [
    {
        id: 220,
        title: "rift",
        description:
            "Summon a magnificent gateway that contains a portal to The Rift.",
        activationCost: 5,
        rollTheDie: false,
        learningPathId: wizardLegendaryPath.id,
        order: 1,
    },
    {
        id: 221,
        title: "transcendence",
        description:
            "Embark on an incredible quest for knowledge that expands your consciousness far beyond yourself.",
        activationCost: 5,
        rollTheDie: false,
        learningPathId: wizardLegendaryPath.id,
        order: 2,
    },
    {
        id: 222,
        title: "planecraft",
        description:
            "Conjure a shadow plane and fill it with anything you can imagine.",
        activationCost: 8,
        rollTheDie: false,
        learningPathId: wizardLegendaryPath.id,
        order: 3,
    },
    {
        id: 223,
        title: "create",
        description:
            "Tap raw magic, converting its energy into a perfectly-crafted object that is real in every way.",
        activationCost: 5,
        rollTheDie: false,
        learningPathId: wizardLegendaryPath.id,
        order: 4,
    },
];

export const wizardAbilities: Ability[] = [
    ...wizardEvocationAbilities,
    ...wizardConjurationAbilities,
    ...wizardPlaneshiftingAbilities,
    ...wizardMagecraftAbilities,
    ...wizardProtectionAbilities,
    ...wizardTrickeryAbilities,
    ...wizardLegendaryAbilities,
];
