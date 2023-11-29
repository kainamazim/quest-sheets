import { useEffect, useState } from "react";

import { type Item } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

import getItems from "@/api/items/geItems";
import { type ItemFilterState, defaultFilter } from "@/components/item/ItemFilter";

export interface UseItemsDataInput {
    initialFilter?: ItemFilterState;
    initialItems?: Item[];
}

const useItemsData = ({
    initialFilter = defaultFilter,
    initialItems = [],
}: UseItemsDataInput = {}) => {
    const [filter, setFilter] = useState<ItemFilterState>(initialFilter);

    const {
        data: items,
        isPending,
        refetch,
    } = useQuery({
        queryKey: ["item", "list", filter],
        queryFn: async () => await getItems(filter),
        initialData: initialItems,
        staleTime: Infinity,
    });

    useEffect(() => {
        void refetch();
    }, [refetch, filter]);

    return { items, isPending, refetch, filter, setFilter };
};

export default useItemsData;
