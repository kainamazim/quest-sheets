import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import getSheets from "@/api/sheets/getSheets";
import { type SheetFilterState, defaultFilter } from "@/components/sheet/SheetFilter";
import type { FullSheet } from "@/types/data";

export interface UseSheetsDataInput {
    initialFilter?: SheetFilterState;
    initialSheets?: FullSheet[];
}

const useSheetsData = ({
    initialFilter = defaultFilter,
    initialSheets = [],
}: UseSheetsDataInput = {}) => {
    const [filter, setFilter] = useState<SheetFilterState>(initialFilter);

    const {
        data: sheets,
        isPending,
        refetch,
    } = useQuery({
        queryKey: ["sheet", "list", filter],
        queryFn: async () => await getSheets(filter),
        initialData: initialSheets,
        staleTime: Infinity,
    });

    useEffect(() => {
        void refetch();
    }, [refetch, filter]);

    return { sheets, isPending, refetch, filter, setFilter };
};

export default useSheetsData;
