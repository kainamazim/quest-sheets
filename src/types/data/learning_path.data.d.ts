import type { Ability } from "./ability.data";

export interface LearningPath {
    id: number;
    roleId: number;
    title: string;
}

export interface FullLearningPath extends LearningPath {
    abilities: Ability[];
}
