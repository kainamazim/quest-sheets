export interface Ability {
    id: number;

    title: string;
    description: string;

    activationCost: number;
    rollTheDie: boolean;

    learningPathId: number;
    order: number;
}
