import type { FullLearningPath } from "./learning_path.data";

export interface Role {
    id: number;
    title: string;
    description: string;
}

export interface FullRole extends Role {
    learningPaths: FullLearningPath[];
}
