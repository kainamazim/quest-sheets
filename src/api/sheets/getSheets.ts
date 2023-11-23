import api from "@/api";
import { type SheetFilterState } from "@/components/sheet/SheetFilter";
import { type FullSheet } from "@/types";

const getSheets = async (filter: SheetFilterState): Promise<FullSheet[]> => {
    const { data } = await api.post<FullSheet[]>("/api/sheets", {
        filter,
    });
    return data;
};

export default getSheets;
