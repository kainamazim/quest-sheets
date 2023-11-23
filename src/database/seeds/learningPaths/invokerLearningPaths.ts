import { type LearningPath } from "@prisma/client";

import { invokerRole } from "../roles";

export const invokerInvocationPath: LearningPath = {
    id: 7,
    title: "invocation",
    roleId: invokerRole.id,
};

export const invokerInquiriesPath: LearningPath = {
    id: 8,
    title: "inquiries",
    roleId: invokerRole.id,
};

export const invokerVerdictsPath: LearningPath = {
    id: 9,
    title: "verdicts",
    roleId: invokerRole.id,
};

export const invokerWrathPath: LearningPath = {
    id: 10,
    title: "wrath",
    roleId: invokerRole.id,
};

export const invokerWardsPath: LearningPath = {
    id: 11,
    title: "wards",
    roleId: invokerRole.id,
};

export const invokerLegendaryPath: LearningPath = {
    id: 12,
    title: "legendary",
    roleId: invokerRole.id,
};

export const invokerLearningPaths: LearningPath[] = [
    invokerInvocationPath,
    invokerInquiriesPath,
    invokerVerdictsPath,
    invokerWrathPath,
    invokerWardsPath,
    invokerLegendaryPath,
];
