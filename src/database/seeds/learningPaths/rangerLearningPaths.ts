import { type LearningPath } from "@prisma/client";

import { rangerRole } from "../roles";

export const rangerStoryAndSongPath: LearningPath = {
    id: 13,
    title: "story and song",
    roleId: rangerRole.id,
};

export const rangerSurvivalistPath: LearningPath = {
    id: 14,
    title: "survivalist",
    roleId: rangerRole.id,
};

export const rangerPathfinderPath: LearningPath = {
    id: 15,
    title: "pathfinder",
    roleId: rangerRole.id,
};

export const rangerHunterPath: LearningPath = {
    id: 16,
    title: "hunter",
    roleId: rangerRole.id,
};

export const rangerFriendPath: LearningPath = {
    id: 17,
    title: "friend",
    roleId: rangerRole.id,
};

export const rangerLegendaryPath: LearningPath = {
    id: 18,
    title: "legendary",
    roleId: rangerRole.id,
};

export const rangerLearningPaths: LearningPath[] = [
    rangerStoryAndSongPath,
    rangerSurvivalistPath,
    rangerPathfinderPath,
    rangerHunterPath,
    rangerFriendPath,
    rangerLegendaryPath,
];
