import type {
    Ability,
    CharacterSheet,
    Item,
    LearningPath,
    Role,
} from "@prisma/client";

export interface FullLearningPath extends LearningPath {
    abilities: Ability[];
}

export interface FullRole extends Role {
    learningPaths: FullLearningPath[];
}

export interface FullSheet extends CharacterSheet {
    role: Role;
    abilities: Ability[];
    items: Item[];
}
