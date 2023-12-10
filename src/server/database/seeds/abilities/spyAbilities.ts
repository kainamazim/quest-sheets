import { type Ability } from "@prisma/client";

import {
    spyCharismaPath,
    spyConcealmentPath,
    spyImpersonationPath,
    spyInfiltrationPath,
    spyLegendaryPath,
    spyStenographyPath,
    spySurveillancePath,
    spyTerminationPath,
} from "../learningPaths/spyLearningPaths";

const spyCharismaAbilities: Ability[] = [
    {
        id: 136,
        title: "cosmopolitan",
        description:
            "Invent a local mannerism to fool commoners about your identity.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: spyCharismaPath.id,
        order: 1,
    },
    {
        id: 137,
        title: "silver tongue",
        description: "Use quick thinking and charm to evade suspicion.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: spyCharismaPath.id,
        order: 2,
    },
    {
        id: 138,
        title: "don’t you know who i am?",
        description:
            "Enlist your party members to establish a fantastical ruse about your identity.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: spyCharismaPath.id,
        order: 3,
    },
];

const spyTerminationAbilities: Ability[] = [
    {
        id: 139,
        title: "sneak attack",
        description: "Make a quick attack on a foe who is distracted.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: spyTerminationPath.id,
        order: 1,
    },
    {
        id: 140,
        title: "poison",
        description:
            "Combine basic goods from a general store to create one of five poisons.",
        activationCost: 6,
        rollTheDie: false,
        learningPathId: spyTerminationPath.id,
        order: 2,
    },
    {
        id: 141,
        title: "death hand",
        description:
            "A magic, single-shot hand cannon that uses a silent magic charge to shoot a slug.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: spyTerminationPath.id,
        order: 3,
    },
    {
        id: 142,
        title: "bounty",
        description:
            "Enlist bounty hunters to pursue and capture or kill a marked target.",
        activationCost: 5,
        rollTheDie: true,
        learningPathId: spyTerminationPath.id,
        order: 4,
    },
];

const spyConcealmentAbilities: Ability[] = [
    {
        id: 143,
        title: "strap",
        description:
            "Conceal up to two weapons in your clothing without being noticed.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: spyConcealmentPath.id,
        order: 1,
    },
    {
        id: 144,
        title: "disguise",
        description: "Use found objects nearby to create a convincing disguise.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: spyConcealmentPath.id,
        order: 2,
    },
    {
        id: 145,
        title: "blink pack",
        description:
            "A magical messenger pack with a hidden switch that conceals items.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: spyConcealmentPath.id,
        order: 3,
    },
    {
        id: 146,
        title: "needful hilt",
        description:
            "A magic hilt that can morph into a weapon that you imagine when needed.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: spyConcealmentPath.id,
        order: 4,
    },
    {
        id: 147,
        title: "shadow",
        description: "A magic cape that makes everything but your shadow invisible.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: spyConcealmentPath.id,
        order: 5,
    },
];

const spySurveillanceAbilities: Ability[] = [
    {
        id: 148,
        title: "tracker",
        description:
            "A magic compass and tag that allows you to track something you put the tag on.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: spySurveillancePath.id,
        order: 1,
    },
    {
        id: 149,
        title: "spyglasses",
        description:
            "Magic eyeglasses that let you see in the dark and can be upgraded with additional capabilities.",
        activationCost: 6,
        rollTheDie: false,
        learningPathId: spySurveillancePath.id,
        order: 2,
    },
    {
        id: 150,
        title: "cloner",
        description:
            "A magic amulet that allows you to eavesdrop on a communications device.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: spySurveillancePath.id,
        order: 3,
    },
    {
        id: 151,
        title: "seeker",
        description: "A levitating orb that can scout adjacent rooms for you.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: spySurveillancePath.id,
        order: 4,
    },
];

const spyStenographyAbilities: Ability[] = [
    {
        id: 152,
        title: "dossier",
        description: "A magic book that you can use to copy documents.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: spyStenographyPath.id,
        order: 1,
    },
    {
        id: 153,
        title: "mimic",
        description: "A magic pen that guides your hand to create forgeries.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: spyStenographyPath.id,
        order: 2,
    },
    {
        id: 154,
        title: "listener",
        description: "A magic gem that can be activated to record sounds nearby.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: spyStenographyPath.id,
        order: 3,
    },
    {
        id: 155,
        title: "crypto",
        description:
            "A magic ring that can translate languages and decode secret messages.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: spyStenographyPath.id,
        order: 4,
    },
];

const spyInfiltrationAbilities: Ability[] = [
    {
        id: 156,
        title: "feather hook",
        description:
            "A magical grappling hook that gently glides itself upward like a balloon.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: spyInfiltrationPath.id,
        order: 1,
    },
    {
        id: 157,
        title: "bricolage",
        description:
            "Improvise one of four useful devices using everyday objects nearby.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: spyInfiltrationPath.id,
        order: 2,
    },
    {
        id: 158,
        title: "needful key",
        description: "A magic key that can morph to fit a lock.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: spyInfiltrationPath.id,
        order: 3,
    },
    {
        id: 159,
        title: "blueprint",
        description:
            "A magic folio that can reveal the floorplan of a building when pressed on one of its walls.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: spyInfiltrationPath.id,
        order: 4,
    },
];

const spyImpersonationAbilities: Ability[] = [
    {
        id: 160,
        title: "persona",
        description:
            "You can carefully prepare a convincing alternate identity. You can create the persona of a commoner, an officer, or an aristocrat.",
        activationCost: 6,
        rollTheDie: false,
        learningPathId: spyImpersonationPath.id,
        order: 1,
    },
];

const spyLegendaryAbilities: Ability[] = [
    {
        id: 161,
        title: "shadow cutter",
        description:
            "A wearable magic bracelet that can be stretched to create a hole in solid objects.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: spyLegendaryPath.id,
        order: 1,
    },
    {
        id: 162,
        title: "the artifice",
        description:
            "A small mask that projects an illusion, transforming your image and voice.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: spyLegendaryPath.id,
        order: 2,
    },
    {
        id: 163,
        title: "nightcrawler",
        description:
            "Infiltrate a person’s office, encampment, or home to discover sensitive information about them.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: spyLegendaryPath.id,
        order: 3,
    },
];

export const spyAbilities: Ability[] = [
    ...spyCharismaAbilities,
    ...spyTerminationAbilities,
    ...spyConcealmentAbilities,
    ...spySurveillanceAbilities,
    ...spyStenographyAbilities,
    ...spyInfiltrationAbilities,
    ...spyImpersonationAbilities,
    ...spyLegendaryAbilities,
];
