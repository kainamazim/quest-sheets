import api from "@/api";
import type { FullSheet } from "@/types";

const getSingleSheet = async (sheetId: FullSheet["id"]): Promise<FullSheet> => {
    const { data } = await api.post<FullSheet>("/api/sheets/get", { sheetId });

    return data;
};

export default getSingleSheet;
