"use client";

import { type FC, useContext, useEffect } from "react";

import { Box, CircularProgress, Stack } from "@mui/material";
import { type Item } from "@prisma/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import getSingleSheet from "@/api/sheets/getSingleSheet";
import updateSheet from "@/api/sheets/updateSheet";
import { PageTitle } from "@/components/@common/display";
import SheetForm, { type FormSheet } from "@/components/sheet/SheetForm/SheetForm";
import { MainLayoutContext } from "@/providers/MainLayoutProvider";
import { type FullRole, type FullSheet } from "@/types";

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
    const { setSnackbar } = useContext(MainLayoutContext);

    const { mutate, isPending } = useMutation<unknown, unknown, FormSheet>({
        mutationFn: async (newSheet) => await updateSheet(newSheet),
        onSuccess: () => {
            setSnackbar({
                severity: "success",
                message: "Sheet updated successfully!",
            });
            router.push("/sheets");
        },
        onError: () => {
            setSnackbar({
                severity: "error",
                message: "Server error!",
            });
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
    const { data: sheet, refetch } = useQuery({
        queryKey: ["user-sheet-update-by-id", sheetId],
        queryFn: async () => await getSingleSheet(sheetId),
        refetchOnMount: true,
        staleTime: Infinity,
    });

    console.log({ sheet });

    useEffect(() => {
        void refetch();
    }, [refetch]);

    return sheet ? (
        <UpdateSheetPageContent sheet={sheet} roles={roles} items={items} />
    ) : (
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
    );
};

export default UpdateSheetPage;
