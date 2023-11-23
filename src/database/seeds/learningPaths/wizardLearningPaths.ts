import { type LearningPath } from "@prisma/client";

import { wizardRole } from "../roles";

export const wizardEvocationPath: LearningPath = {
    id: 48,
    title: "evocation",
    roleId: wizardRole.id,
};

export const wizardConjurationPath: LearningPath = {
    id: 49,
    title: "conjuration",
    roleId: wizardRole.id,
};

export const wizardPlaneshiftingPath: LearningPath = {
    id: 50,
    title: "planeshifting",
    roleId: wizardRole.id,
};

export const wizardMagecraftPath: LearningPath = {
    id: 51,
    title: "magecraft",
    roleId: wizardRole.id,
};

export const wizardProtectionPath: LearningPath = {
    id: 52,
    title: "protection",
    roleId: wizardRole.id,
};

export const wizardTrickeryPath: LearningPath = {
    id: 53,
    title: "trickery",
    roleId: wizardRole.id,
};

export const wizardLegendaryPath: LearningPath = {
    id: 54,
    title: "legendary",
    roleId: wizardRole.id,
};

export const wizardLearningPaths: LearningPath[] = [
    wizardEvocationPath,
    wizardConjurationPath,
    wizardPlaneshiftingPath,
    wizardMagecraftPath,
    wizardProtectionPath,
    wizardTrickeryPath,
    wizardLegendaryPath,
];
