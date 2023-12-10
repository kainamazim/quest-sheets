import { type LearningPath } from "@prisma/client";

import { spyRole } from "../roles";

export const spyCharismaPath: LearningPath = {
    id: 33,
    title: "charisma",
    roleId: spyRole.id,
};

export const spyTerminationPath: LearningPath = {
    id: 34,
    title: "termination",
    roleId: spyRole.id,
};

export const spyConcealmentPath: LearningPath = {
    id: 35,
    title: "concealment",
    roleId: spyRole.id,
};

export const spySurveillancePath: LearningPath = {
    id: 36,
    title: "surveillance",
    roleId: spyRole.id,
};

export const spyStenographyPath: LearningPath = {
    id: 37,
    title: "stenography",
    roleId: spyRole.id,
};

export const spyInfiltrationPath: LearningPath = {
    id: 38,
    title: "infiltration",
    roleId: spyRole.id,
};

export const spyImpersonationPath: LearningPath = {
    id: 39,
    title: "impersonation",
    roleId: spyRole.id,
};

export const spyLegendaryPath: LearningPath = {
    id: 40,
    title: "legendary",
    roleId: spyRole.id,
};

export const spyLearningPaths: LearningPath[] = [
    spyCharismaPath,
    spyTerminationPath,
    spyConcealmentPath,
    spySurveillancePath,
    spyStenographyPath,
    spyInfiltrationPath,
    spyImpersonationPath,
    spyLegendaryPath,
];
