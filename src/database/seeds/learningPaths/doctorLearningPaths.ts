import { type LearningPath } from "@prisma/client";

import { doctorRole } from "../roles";

export const doctorHealingPath: LearningPath = {
    id: 26,
    title: "healing",
    roleId: doctorRole.id,
};

export const doctorAlterationPath: LearningPath = {
    id: 27,
    title: "alteration",
    roleId: doctorRole.id,
};

export const doctorNecromancyPath: LearningPath = {
    id: 28,
    title: "necromancy",
    roleId: doctorRole.id,
};

export const doctorHarmPath: LearningPath = {
    id: 29,
    title: "harm",
    roleId: doctorRole.id,
};

export const doctorPerceptionPath: LearningPath = {
    id: 30,
    title: "perception",
    roleId: doctorRole.id,
};

export const doctorExaminationPath: LearningPath = {
    id: 31,
    title: "examination",
    roleId: doctorRole.id,
};

export const doctorLegendaryPath: LearningPath = {
    id: 32,
    title: "legendary",
    roleId: doctorRole.id,
};

export const doctorLearningPaths: LearningPath[] = [
    doctorHealingPath,
    doctorAlterationPath,
    doctorNecromancyPath,
    doctorHarmPath,
    doctorPerceptionPath,
    doctorExaminationPath,
    doctorLegendaryPath,
];
