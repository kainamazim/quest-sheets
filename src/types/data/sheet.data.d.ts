export interface CharacterSheet {
    id: number;
    createdAt: string;
    updatedAt: string;
    name: string;
    description: string;
    currentHitPoints: number;
    currentAdventurePoints: number;
    roleId: number;
    authorId: number;
}

export interface FullSheet extends CharacterSheet {
    role: Role;
    abilities: Ability[];
    items: Item[];
}

export type SortBySheet = keyof Pick<CharacterSheet, "createdAt" | "name" | "roleId">;

export interface SheetFilter {
    name: CharacterSheet["name"];
    roleIds: Array<CharacterSheet["roleId"]>;
    sortBy: SortBySheet;
}
