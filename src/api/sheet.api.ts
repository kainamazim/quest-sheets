import api from "@/api";
import getSession from "@/server/services/user/getSession";
import type { FullSheet, SheetFilter } from "@/types/data";

export const getManyUserSheets = async (filter: SheetFilter) => {
    const session = await getSession();

    console.log({ session });

    const { data: sheets = [] } = await api.get<FullSheet[]>("/users/sheets");

    return sheets;
};
