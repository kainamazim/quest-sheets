import api from "@/api";
import { type CharacterSheet } from "@/types/data";

const deleteSheet = async (
    sheetId: CharacterSheet["id"],
): Promise<CharacterSheet> => {
    const { data } = await api.post<CharacterSheet>("/api/sheets/delete", {
        sheetId,
    });

    return data;
};

export default deleteSheet;
