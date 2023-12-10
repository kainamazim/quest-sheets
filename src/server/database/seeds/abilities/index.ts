import { type Ability } from "@prisma/client";

import { doctorAbilities } from "./doctorAbilities";
import { fighterAbilities } from "./fighterAbilities";
import { invokerAbilities } from "./invokerAbilities";
import { magicianAbilities } from "./magicianAbilities";
import { naturalistAbilities } from "./naturalistAbilities";
import { rangerAbilities } from "./rangerAbilities";
import { spyAbilities } from "./spyAbilities";
import { wizardAbilities } from "./wizardAbilities";

const abilities: Ability[] = [
    ...fighterAbilities,
    ...invokerAbilities,
    ...rangerAbilities,
    ...naturalistAbilities,
    ...doctorAbilities,
    ...spyAbilities,
    ...magicianAbilities,
    ...wizardAbilities,
];

export default abilities;
