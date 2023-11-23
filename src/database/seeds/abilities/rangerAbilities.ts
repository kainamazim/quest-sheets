import { type Ability } from "@prisma/client";

import {
    rangerFriendPath,
    rangerHunterPath,
    rangerLegendaryPath,
    rangerPathfinderPath,
    rangerStoryAndSongPath,
    rangerSurvivalistPath,
} from "../learningPaths/rangerLearningPaths";

const rangerStoryAndSongAbilities: Ability[] = [
    {
        id: 54,
        title: "commune",
        description: "Invent a local saying to charm information out of a commoner.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: rangerStoryAndSongPath.id,
        order: 1,
    },
    {
        id: 55,
        title: "folk song",
        description:
            "Sing a song that kindles bright, somber, or proud feelings in NPCs nearby.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: rangerStoryAndSongPath.id,
        order: 2,
    },
    {
        id: 56,
        title: "speak myth",
        description:
            "Appeal to a local myth to gain the favor of a commoner and receive a favor.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: rangerStoryAndSongPath.id,
        order: 3,
    },
];

const rangerSurvivalistAbilities: Ability[] = [
    {
        id: 57,
        title: "remedy",
        description:
            "You scavenge the area to find a plant-based remedy for an ailment.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: rangerSurvivalistPath.id,
        order: 1,
    },
    {
        id: 58,
        title: "shroud",
        description:
            "You entreat nearby flora to provide the party with protection while camping in wilderness.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: rangerSurvivalistPath.id,
        order: 2,
    },
    {
        id: 59,
        title: "signal",
        description:
            "You create a distress signal, summoning an NPC Ranger to your aid.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: rangerSurvivalistPath.id,
        order: 3,
    },
    {
        id: 60,
        title: "ritual",
        description:
            "You ingest a magic edible to gain supernatural insight about something.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: rangerSurvivalistPath.id,
        order: 4,
    },
];

const rangerPathfinderAbilities: Ability[] = [
    {
        id: 61,
        title: "read the winds",
        description:
            "You sense weather patterns, and can predict the weather in the days ahead.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: rangerPathfinderPath.id,
        order: 1,
    },
    {
        id: 62,
        title: "navigate",
        description:
            "You can’t get lost in wilderness, and you can find a special natural reprieve in times of need.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: rangerPathfinderPath.id,
        order: 2,
    },
    {
        id: 63,
        title: "delve",
        description:
            "You sense the general layout of the next three areas in an underground structure.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: rangerPathfinderPath.id,
        order: 3,
    },
    {
        id: 64,
        title: "speak with trees",
        description:
            "You touch a tree trunk, connecting yourself to the forest. The trees come to your aid.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: rangerPathfinderPath.id,
        order: 4,
    },
];

const rangerHunterAbilities: Ability[] = [
    {
        id: 65,
        title: "track",
        description:
            "You can pick up on tracks left nearby and identify the type of creature that left them.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: rangerHunterPath.id,
        order: 1,
    },
    {
        id: 66,
        title: "farshot",
        description:
            "You sharpen your senses to make a ranged attack on a far away target.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: rangerHunterPath.id,
        order: 2,
    },
    {
        id: 67,
        title: "deadeye",
        description:
            "When you roll a Triumph on a ranged attack, you can disable an enemy’s body.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: rangerHunterPath.id,
        order: 3,
    },
    {
        id: 68,
        title: "stalk",
        description:
            "You and your party can stalk tracked prey without it noticing you, setting up an ambush.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: rangerHunterPath.id,
        order: 4,
    },
    {
        id: 69,
        title: "nemesis",
        description:
            "You mark a specific creature you have met before as your nemesis, giving you an advantage against it.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: rangerHunterPath.id,
        order: 5,
    },
];

const rangerFriendAbilities: Ability[] = [
    {
        id: 70,
        title: "speak with animal",
        description:
            "You form a bond with an animal, allowing you to interpret its thoughts and feelings.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: rangerFriendPath.id,
        order: 1,
    },
    {
        id: 71,
        title: "animal partner",
        description:
            "You bond with a nearby animal who becomes your companion and follows your instructions.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: rangerFriendPath.id,
        order: 2,
    },
    {
        id: 72,
        title: "courier",
        description:
            "You recruit a nearby animal and send it on a mission to deliver an item.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: rangerFriendPath.id,
        order: 3,
    },
    {
        id: 73,
        title: "pair bond",
        description:
            "You develop a telepathic bond with your animal partner, allowing you to enter a trance and take over its body.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: rangerFriendPath.id,
        order: 4,
    },
    {
        id: 74,
        title: "whisper on the wind",
        description:
            "You whisper a message carried by the wind, summoning a flying animal to come to your aid.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: rangerFriendPath.id,
        order: 5,
    },
];

const rangerLegendaryAbilities: Ability[] = [
    {
        id: 75,
        title: "wild celebrity",
        description:
            "Wild animals everywhere now sense you as an ally and will not attack you.",
        activationCost: 6,
        rollTheDie: false,
        learningPathId: rangerLegendaryPath.id,
        order: 1,
    },
    {
        id: 76,
        title: "slayer",
        description:
            "You devastate a group of minions in an impressive acrobatic fashion, reducing their numbers by half.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: rangerLegendaryPath.id,
        order: 2,
    },
    {
        id: 77,
        title: "friend of the land",
        description:
            "You become the friend of a wilderness region, gaining the control of a natural fortress.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: rangerLegendaryPath.id,
        order: 3,
    },
];

export const rangerAbilities: Ability[] = [
    ...rangerStoryAndSongAbilities,
    ...rangerSurvivalistAbilities,
    ...rangerPathfinderAbilities,
    ...rangerHunterAbilities,
    ...rangerFriendAbilities,
    ...rangerLegendaryAbilities,
];
