import { type Prisma } from "@prisma/client";

import { commonItems } from "./common";
import { legendaryItems } from "./legendary";
import { rareItems } from "./rare";
import { supremeItems } from "./supreme";
import { uncommonItems } from "./uncommon";

const treasure: Prisma.ItemCreateInput[] = [
    ...commonItems,
    ...uncommonItems,
    ...rareItems,
    ...legendaryItems,
    ...supremeItems,
];

export default treasure;
