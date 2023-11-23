import { type CharacterSheet } from "@prisma/client";

import api from "@/api";

const deleteSheet = async (
    sheetId: CharacterSheet["id"],
): Promise<CharacterSheet> => {
    const { data } = await api.post<CharacterSheet>("/api/sheets/delete", {
        sheetId,
    });

    return data;
};

export default deleteSheet;
