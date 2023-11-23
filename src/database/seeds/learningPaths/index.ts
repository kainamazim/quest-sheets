import { type LearningPath } from "@prisma/client";

import { doctorLearningPaths } from "./doctorLearningPaths";
import { fighterLearningPaths } from "./fighterLearningPaths";
import { invokerLearningPaths } from "./invokerLearningPaths";
import { magicianLearningPaths } from "./magicianLearningPaths";
import { naturalistLearningPaths } from "./naturalistLearningPaths";
import { rangerLearningPaths } from "./rangerLearningPaths";
import { spyLearningPaths } from "./spyLearningPaths";
import { wizardLearningPaths } from "./wizardLearningPaths";

const learningPaths: LearningPath[] = [
    ...fighterLearningPaths,
    ...invokerLearningPaths,
    ...rangerLearningPaths,
    ...naturalistLearningPaths,
    ...doctorLearningPaths,
    ...spyLearningPaths,
    ...magicianLearningPaths,
    ...wizardLearningPaths,
];

export default learningPaths;
