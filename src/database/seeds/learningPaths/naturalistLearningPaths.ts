import { type LearningPath } from "@prisma/client";

import { naturalistRole } from "../roles";

export const naturalistShapeshifterPath: LearningPath = {
    id: 19,
    title: "shapeshifter",
    roleId: naturalistRole.id,
};

export const naturalistSummonerPath: LearningPath = {
    id: 20,
    title: "summoner",
    roleId: naturalistRole.id,
};

export const naturalistElementalistPath: LearningPath = {
    id: 21,
    title: "elementalist",
    roleId: naturalistRole.id,
};

export const naturalistStormcallerPath: LearningPath = {
    id: 22,
    title: "stormcaller",
    roleId: naturalistRole.id,
};

export const naturalistSpiritcallerPath: LearningPath = {
    id: 23,
    title: "spiritcaller",
    roleId: naturalistRole.id,
};

export const naturalistEcologistPath: LearningPath = {
    id: 24,
    title: "ecologist",
    roleId: naturalistRole.id,
};

export const naturalistLegendaryPath: LearningPath = {
    id: 25,
    title: "legendary",
    roleId: naturalistRole.id,
};

export const naturalistLearningPaths: LearningPath[] = [
    naturalistShapeshifterPath,
    naturalistSummonerPath,
    naturalistElementalistPath,
    naturalistStormcallerPath,
    naturalistSpiritcallerPath,
    naturalistEcologistPath,
    naturalistLegendaryPath,
];
