import { type LearningPath } from "@prisma/client";

import { magicianRole } from "../roles";

export const magicianMisdirectionPath: LearningPath = {
    id: 41,
    title: "misdirection",
    roleId: magicianRole.id,
};

export const magicianMannequinsPath: LearningPath = {
    id: 42,
    title: "mannequins",
    roleId: magicianRole.id,
};

export const magicianClairvoyancePath: LearningPath = {
    id: 43,
    title: "clairvoyance",
    roleId: magicianRole.id,
};

export const magicianConjurationPath: LearningPath = {
    id: 44,
    title: "conjuration",
    roleId: magicianRole.id,
};

export const magicianMindControlPath: LearningPath = {
    id: 45,
    title: "mind control",
    roleId: magicianRole.id,
};

export const magicianMayhemPath: LearningPath = {
    id: 46,
    title: "mayhem",
    roleId: magicianRole.id,
};

export const magicianLegendaryPath: LearningPath = {
    id: 47,
    title: "legendary",
    roleId: magicianRole.id,
};

export const magicianLearningPaths: LearningPath[] = [
    magicianMisdirectionPath,
    magicianMannequinsPath,
    magicianClairvoyancePath,
    magicianConjurationPath,
    magicianMindControlPath,
    magicianMayhemPath,
    magicianLegendaryPath,
];
