import api from "@/api";
import type { FormSheet } from "@/types";
import { type CharacterSheet } from "@/types/data";

const updateSheet = async (sheet: FormSheet): Promise<CharacterSheet> => {
    const { data } = await api.post<CharacterSheet>("/api/sheets/update", { sheet });

    return data;
};

export default updateSheet;
