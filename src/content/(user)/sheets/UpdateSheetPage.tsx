"use client";

import type { FC } from "react";
import { useEffect } from "react";

import { Box, CircularProgress, Stack } from "@mui/material";
import type { Item } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import getSingleSheet from "@/api/sheets/getSingleSheet";
import { PageTitle } from "@/components/@common/display";
import SheetForm from "@/components/sheet/SheetForm/SheetForm";
import useUpdateSheet from "@/hooks/useUpdateSheet";
import type { FullRole, FullSheet } from "@/types";

interface UpdateSheetPageProps {
    roles: FullRole[];
    items: Item[];
    sheetId: FullSheet["id"];
}

interface UpdateSheetPageContentProps {
    roles: FullRole[];
    items: Item[];
    sheet: FullSheet;
}

const UpdateSheetPageContent: FC<UpdateSheetPageContentProps> = ({
    roles,
    items,
    sheet,
}) => {
    const router = useRouter();

    const { mutate, isPending } = useUpdateSheet({
        successCallback: () => {
            router.push("/sheets");
        },
    });

    return (
        <Stack>
            <PageTitle title="update character sheet" />
            <SheetForm
                loading={isPending}
                sheet={sheet}
                items={items}
                roles={roles}
                onSubmit={(newSheet) => {
                    mutate(newSheet);
                }}
            />
        </Stack>
    );
};

const UpdateSheetPage: FC<UpdateSheetPageProps> = ({ sheetId, items, roles }) => {
    const {
        data: sheet,
        refetch,
        isPending,
    } = useQuery({
        queryKey: ["sheet", "update", sheetId],
        queryFn: async () => await getSingleSheet(sheetId),
        staleTime: Infinity,
    });

    useEffect(() => {
        void refetch();
    }, [refetch]);

    return isPending || typeof sheet === "undefined" ? (
        <Box
            minHeight={250}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CircularProgress />
        </Box>
    ) : (
        <UpdateSheetPageContent sheet={sheet} roles={roles} items={items} />
    );
};

export default UpdateSheetPage;
