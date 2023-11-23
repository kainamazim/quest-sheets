"use client";

import { type FC, useContext } from "react";

import { Stack } from "@mui/material";
import { type Item } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import updateSheet from "@/api/sheets/updateSheet";
import { PageTitle } from "@/components/@common/display";
import SheetForm, { type FormSheet } from "@/components/sheet/SheetForm/SheetForm";
import { MainLayoutContext } from "@/providers/MainLayoutProvider";
import { type FullRole, type FullSheet } from "@/types";

interface UpdateSheetPageProps {
    roles: FullRole[];
    items: Item[];
    sheet: FullSheet;
}

const UpdateSheetPage: FC<UpdateSheetPageProps> = ({ roles, items, sheet }) => {
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

export default UpdateSheetPage;
