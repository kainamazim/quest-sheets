import { type CharacterSheet } from "@prisma/client";

import api from "@/api";
import type { FormSheet } from "@/types";

const createSheet = async (sheet: FormSheet): Promise<CharacterSheet> => {
    const { data } = await api.post<CharacterSheet>("/api/sheets/new", { sheet });

    return data;
};

export default createSheet;
