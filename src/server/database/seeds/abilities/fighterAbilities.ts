import { type Ability } from "@prisma/client";

import {
    fighterBodyPath,
    fighterCamaraderiePath,
    fighterDuelingPath,
    fighterLeadershipPath,
    fighterLegendaryPath,
    fighterTacticsPath,
} from "../learningPaths/fighterLearningPaths";

const fighterDuelingAbilities: Ability[] = [
    {
        id: 1,
        title: "counterattack",
        description: "Quickly turn the tables on an attacker who makes a mistake.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: fighterDuelingPath.id,
        order: 1,
    },
    {
        id: 2,
        title: "wild attack",
        description: "Strike a foe with reckless power.",
        activationCost: 0,
        rollTheDie: true,
        learningPathId: fighterDuelingPath.id,
        order: 2,
    },
    {
        id: 3,
        title: "overpower",
        description: "Put an enemy in a compromised position.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: fighterDuelingPath.id,
        order: 3,
    },
    {
        id: 4,
        title: "disarm",
        description: "Strip a foe of their weapon or take it for yourself.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: fighterDuelingPath.id,
        order: 4,
    },
    {
        id: 5,
        title: "duel",
        description: "Compel a nearby creature to fight you in single combat.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: fighterDuelingPath.id,
        order: 5,
    },
];

const fighterTacticsAbilities: Ability[] = [
    {
        id: 6,
        title: "provoke",
        description:
            "Draw the attention of a nearby creature by rudely taunting them.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: fighterTacticsPath.id,
        order: 1,
    },
    {
        id: 7,
        title: "intercept",
        description: "Rush in to interrupt an attack on someone else.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: fighterTacticsPath.id,
        order: 2,
    },
    {
        id: 8,
        title: "charge",
        description: "Violently barrel through anything in your path.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: fighterTacticsPath.id,
        order: 3,
    },
    {
        id: 9,
        title: "retreat",
        description:
            "Provoke nearby creatures to give your allies cover to withdraw.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: fighterTacticsPath.id,
        order: 4,
    },
    {
        id: 10,
        title: "whirlwind",
        description: "Become a tornado of martial fury.",
        activationCost: 2,
        rollTheDie: true,
        learningPathId: fighterTacticsPath.id,
        order: 5,
    },
];

const fighterCamaraderieAbilities: Ability[] = [
    {
        id: 11,
        title: "summon the blood",
        description: "Recite a poem to bolster the spirits of your party.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: fighterCamaraderiePath.id,
        order: 1,
    },
    {
        id: 12,
        title: "valiant soliloquy",
        description:
            "Give a rousing speech to your allies, inspiring them to overcome the odds.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: fighterCamaraderiePath.id,
        order: 2,
    },
    {
        id: 13,
        title: "war story",
        description:
            "Earn extra AP by recounting a battle from your past adventures.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: fighterCamaraderiePath.id,
        order: 3,
    },
    {
        id: 14,
        title: "marshal",
        description:
            "Organize the help of your allies to overcome a test of strength.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: fighterCamaraderiePath.id,
        order: 4,
    },
    {
        id: 15,
        title: "bond",
        description:
            "Form an unbreakable partnership with one of your party members.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: fighterCamaraderiePath.id,
        order: 5,
    },
];

const fighterLeadershipAbilities: Ability[] = [
    {
        id: 16,
        title: "size up",
        description:
            "Evaluate the capabilities and vulnerabilities of a nearby creature.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: fighterLeadershipPath.id,
        order: 1,
    },
    {
        id: 17,
        title: "plan",
        description: "Prepare your party before combat to ambush your enemies.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: fighterLeadershipPath.id,
        order: 2,
    },
    {
        id: 18,
        title: "recruit",
        description: "Command a nearby commoner or minion to assist you.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: fighterLeadershipPath.id,
        order: 3,
    },
    {
        id: 19,
        title: "attendant",
        description:
            "Permanently call an NPC Fighter into service as your ally and apprentice.",
        activationCost: 7,
        rollTheDie: false,
        learningPathId: fighterLeadershipPath.id,
        order: 4,
    },
];

const fighterBodyAbilities: Ability[] = [
    {
        id: 20,
        title: "technique",
        description: "Make your body as deadly as common weapons.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: fighterBodyPath.id,
        order: 1,
    },
    {
        id: 21,
        title: "flow",
        description: "Enter a state of intense focus after rolling a Triumph.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: fighterBodyPath.id,
        order: 2,
    },
    {
        id: 22,
        title: "yawp",
        description: "Make a show of bravado to frighten nearby creatures.",
        activationCost: 1,
        rollTheDie: true,
        learningPathId: fighterBodyPath.id,
        order: 3,
    },
    {
        id: 23,
        title: "focus",
        description:
            "You clear your mind, allowing you to surpass your normal limits.",
        activationCost: 5,
        rollTheDie: false,
        learningPathId: fighterBodyPath.id,
        order: 4,
    },
    {
        id: 24,
        title: "defy death",
        description:
            "If you would die from an enemy’s attack, you overcome fate to make a last stand.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: fighterBodyPath.id,
        order: 5,
    },
];

const fighterLegendaryAbilities: Ability[] = [
    {
        id: 25,
        title: "limit break",
        description:
            "Achieve a transcendent unity of mind and body to achieve one of three supernatural feats.",
        activationCost: 7,
        rollTheDie: false,
        learningPathId: fighterLegendaryPath.id,
        order: 1,
    },
    {
        id: 26,
        title: "champion",
        description:
            "Tales of your heroic deeds have spread widely, unlocking heroic abilities.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: fighterLegendaryPath.id,
        order: 2,
    },
    {
        id: 27,
        title: "steel pact",
        description: "Form a permanent, extraordinary bond with one of your weapons.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: fighterLegendaryPath.id,
        order: 3,
    },
];

export const fighterAbilities: Ability[] = [
    ...fighterDuelingAbilities,
    ...fighterTacticsAbilities,
    ...fighterCamaraderieAbilities,
    ...fighterLeadershipAbilities,
    ...fighterBodyAbilities,
    ...fighterLegendaryAbilities,
];
