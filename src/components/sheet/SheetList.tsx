import { type FC } from "react";

import { CircularProgress, Divider, Stack } from "@mui/material";
import { type Role } from "@prisma/client";

import useSheetsData, { type UseSheetsDataInput } from "@/hooks/useSheetsData";

import SheetActionCard from "./SheetActionCard";
import SheetFilter from "./SheetFilter";

interface SheetListProps extends UseSheetsDataInput {
    roles: Role[];
}

const SheetList: FC<SheetListProps> = ({ initialSheets, initialFilter, roles }) => {
    const itemsState = useSheetsData({ initialSheets, initialFilter });

    const { filter, setFilter, isPending, refetch, sheets } = itemsState;

    return (
        <Stack gap={4}>
            <SheetFilter
                filter={filter}
                roles={roles}
                setFilter={setFilter}
                defaultFilter={initialFilter}
            />
            <Divider />
            <Stack display={"flex"} direction={"row"} flexWrap={"wrap"} gap={2}>
                {isPending ? (
                    <CircularProgress />
                ) : (
                    sheets.map((sheet) => (
                        <SheetActionCard
                            key={sheet.id}
                            sheet={sheet}
                            callback={() => {
                                void refetch();
                            }}
                        />
                    ))
                )}
            </Stack>
        </Stack>
    );
};

export default SheetList;
