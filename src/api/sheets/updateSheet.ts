import { type CharacterSheet } from "@prisma/client";

import api from "@/api";
import type { FormSheet } from "@/types";

const updateSheet = async (sheet: FormSheet): Promise<CharacterSheet> => {
    const { data } = await api.post<CharacterSheet>("/api/sheets/update", { sheet });

    return data;
};

export default updateSheet;
