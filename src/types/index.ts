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

export interface NewSheet
    extends Omit<
        FullSheet,
        "id" | "role" | "roleId" | "createdAt" | "updatedAt" | "authorId"
    > {
    roleId?: FullSheet["roleId"];
}

export type FormSheet = FullSheet | NewSheet;

export type SetFormSheetField = <T extends keyof FullSheet>(
    field: T,
    value: FullSheet[T],
) => void;

export type FormSheetErrors = Array<keyof NewSheet>;
