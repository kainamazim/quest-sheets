import api from "@/api";
import type { FormSheet } from "@/types";
import { type CharacterSheet } from "@/types/data";

const createSheet = async (sheet: FormSheet): Promise<CharacterSheet> => {
    const { data } = await api.post<CharacterSheet>("/api/sheets/new", { sheet });

    return data;
};

export default createSheet;
