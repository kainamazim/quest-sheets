import { type LearningPath } from "@prisma/client";

import { fighterRole } from "../roles";

export const fighterDuelingPath: LearningPath = {
    id: 1,
    title: "dueling",
    roleId: fighterRole.id,
};

export const fighterTacticsPath: LearningPath = {
    id: 2,
    title: "tactics",
    roleId: fighterRole.id,
};

export const fighterCamaraderiePath: LearningPath = {
    id: 3,
    title: "camaraderie",
    roleId: fighterRole.id,
};

export const fighterLeadershipPath: LearningPath = {
    id: 4,
    title: "leadership",
    roleId: fighterRole.id,
};

export const fighterBodyPath: LearningPath = {
    id: 5,
    title: "body",
    roleId: fighterRole.id,
};

export const fighterLegendaryPath: LearningPath = {
    id: 6,
    title: "legendary",
    roleId: fighterRole.id,
};

export const fighterLearningPaths: LearningPath[] = [
    fighterDuelingPath,
    fighterTacticsPath,
    fighterCamaraderiePath,
    fighterLeadershipPath,
    fighterBodyPath,
    fighterLegendaryPath,
];
