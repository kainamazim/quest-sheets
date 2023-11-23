import { type Ability } from "@prisma/client";

import {
    naturalistEcologistPath,
    naturalistElementalistPath,
    naturalistLegendaryPath,
    naturalistShapeshifterPath,
    naturalistSpiritcallerPath,
    naturalistStormcallerPath,
    naturalistSummonerPath,
} from "../learningPaths/naturalistLearningPaths";

const naturalistShapeshifterAbilities: Ability[] = [
    {
        id: 78,
        title: "animal form",
        description:
            "You take the form of a wild animal, adopting its shape, senses, and range of motion.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: naturalistShapeshifterPath.id,
        order: 1,
    },
    {
        id: 79,
        title: "gills",
        description:
            "You enchant nearby creatures, allowing them to breathe underwater.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: naturalistShapeshifterPath.id,
        order: 2,
    },
    {
        id: 80,
        title: "steelsprout",
        description:
            "You turn a nearby metal object into a weave of delicate plants.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: naturalistShapeshifterPath.id,
        order: 3,
    },
    {
        id: 81,
        title: "petrify",
        description:
            "You turn the surface of a creature to stone, or encase your own body with a protective shell.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: naturalistShapeshifterPath.id,
        order: 4,
    },
    {
        id: 82,
        title: "shapeshift",
        description:
            "A master version of your Animal Form spell that allows you to become a more powerful animal.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: naturalistShapeshifterPath.id,
        order: 5,
    },
];

const naturalistSummonerAbilities: Ability[] = [
    {
        id: 83,
        title: "thorn",
        description:
            "You conjure a poisonous thorn and shoot it toward a nearby target.",
        activationCost: 0,
        rollTheDie: true,
        learningPathId: naturalistSummonerPath.id,
        order: 1,
    },
    {
        id: 84,
        title: "wild font",
        description:
            "You touch a container holding food, water, or oil, causing it to spill an excess of its contents.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: naturalistSummonerPath.id,
        order: 2,
    },
    {
        id: 85,
        title: "evening star",
        description:
            "You summon a wisp of light in the sky, casting daylight on a huge area.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: naturalistSummonerPath.id,
        order: 3,
    },
    {
        id: 86,
        title: "aurora",
        description:
            "You conjure a dazzling prismatic aurora in the sky that dazzles creatures up to a kilometer away.",
        activationCost: 5,
        rollTheDie: false,
        learningPathId: naturalistSummonerPath.id,
        order: 4,
    },
    {
        id: 87,
        title: "echoes of creation",
        description:
            "You summon a coterie of magical wisps that restore the hit points of all creatures in your scene.",
        activationCost: 6,
        rollTheDie: false,
        learningPathId: naturalistSummonerPath.id,
        order: 5,
    },
];

const naturalistElementalistAbilities: Ability[] = [
    {
        id: 88,
        title: "freeze",
        description:
            "You blow cool air, creating freezing winds that swirl around a nearby target.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: naturalistElementalistPath.id,
        order: 1,
    },
    {
        id: 89,
        title: "burn",
        description:
            "You blow hot air, creating scorching winds that can ignite a target in flame nearby.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: naturalistElementalistPath.id,
        order: 2,
    },
    {
        id: 90,
        title: "shock",
        description:
            "You call down a bolt of lightning from the sky to strike a target you can see.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: naturalistElementalistPath.id,
        order: 3,
    },
    {
        id: 91,
        title: "fireball",
        description:
            "You shape an orb of fire and send it streaking toward a target, where it creates a devastating explosion.",
        activationCost: 5,
        rollTheDie: true,
        learningPathId: naturalistElementalistPath.id,
        order: 4,
    },
];

const naturalistStormcallerAbilities: Ability[] = [
    {
        id: 92,
        title: "cloudcall",
        description:
            "You create a thick fog that rapidly expands around you, concealing the area.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: naturalistStormcallerPath.id,
        order: 1,
    },
    {
        id: 93,
        title: "vortex",
        description:
            "You create a howling vortex in a body of liquid nearby that can suck in objects and creatures.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: naturalistStormcallerPath.id,
        order: 2,
    },
    {
        id: 94,
        title: "gale",
        description:
            "You create a ferocious windstorm that kicks up dust and small objects and obscures vision.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: naturalistStormcallerPath.id,
        order: 3,
    },
    {
        id: 95,
        title: "riverfury",
        description:
            "You whisper a magical incantation to a nearby river, calling forth a torrent of water from upstream.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: naturalistStormcallerPath.id,
        order: 4,
    },
    {
        id: 96,
        title: "stormcall",
        description:
            "You produce a terrifying storm whose effects you can control while it is active.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: naturalistStormcallerPath.id,
        order: 5,
    },
];

const naturalistSpiritcallerAbilities: Ability[] = [
    {
        id: 97,
        title: "wild aspect",
        description:
            "You harness the aspect of one of three wild creatures, gaining heightened physical capabilities.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: naturalistSpiritcallerPath.id,
        order: 1,
    },
    {
        id: 98,
        title: "prey sense",
        description:
            "You sharpen your senses and can feel a subtle signal when danger is near.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: naturalistSpiritcallerPath.id,
        order: 2,
    },
    {
        id: 99,
        title: "nature’s watch",
        description:
            "You extend your senses far beyond your normal capabilities, allowing you to detect the hidden and unreal.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: naturalistSpiritcallerPath.id,
        order: 3,
    },
];

const naturalistEcologistAbilities: Ability[] = [
    {
        id: 100,
        title: "command nature",
        description:
            "You recite a brief poem to the plants around you, causing them to produce an effect.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: naturalistEcologistPath.id,
        order: 1,
    },
    {
        id: 101,
        title: "memories of stone",
        description:
            "You channel the ancient wisdom of a stone monument, learning important information about your world.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: naturalistEcologistPath.id,
        order: 2,
    },
    {
        id: 102,
        title: "shift season",
        description:
            "You manipulate the elements to change the current season everywhere within one kilometer of you.",
        activationCost: 4,
        rollTheDie: true,
        learningPathId: naturalistEcologistPath.id,
        order: 3,
    },
];

const naturalistLegendaryAbilities: Ability[] = [
    {
        id: 103,
        title: "nature’s wrath",
        description:
            "You channel elemental fury, creating one of three natural disasters with an enormous impact on the environment.",
        activationCost: 7,
        rollTheDie: false,
        learningPathId: naturalistLegendaryPath.id,
        order: 1,
    },
    {
        id: 104,
        title: "wild evolution",
        description:
            "Your physical essence becomes permanently intertwined with a chosen animal’s form, allowing you to shapeshift at will.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: naturalistLegendaryPath.id,
        order: 2,
    },
    {
        id: 105,
        title: "world wish",
        description:
            "You sacrifice yourself to become the seed for a new world, creating life across a planet.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: naturalistLegendaryPath.id,
        order: 3,
    },
    {
        id: 106,
        title: "to dust",
        description:
            "You return a crafted object to nature, instantly reducing it to dust.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: naturalistLegendaryPath.id,
        order: 4,
    },
];

export const naturalistAbilities: Ability[] = [
    ...naturalistShapeshifterAbilities,
    ...naturalistSummonerAbilities,
    ...naturalistElementalistAbilities,
    ...naturalistStormcallerAbilities,
    ...naturalistSpiritcallerAbilities,
    ...naturalistEcologistAbilities,
    ...naturalistLegendaryAbilities,
];
