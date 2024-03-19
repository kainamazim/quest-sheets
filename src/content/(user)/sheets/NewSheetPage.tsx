"use client";

import { type FC, useContext } from "react";

import { Stack } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import createSheet from "@/api/sheets/createSheet";
import { PageTitle } from "@/components/@common/display";
import SheetForm from "@/components/sheet/SheetForm/SheetForm";
import { MainLayoutContext } from "@/providers/MainLayoutProvider";
import type { FormSheet, FullRole } from "@/types";
import type { Item } from "@/types/data";

interface NewSheetPageProps {
    roles: FullRole[];
    items: Item[];
}

const NewSheetPage: FC<NewSheetPageProps> = ({ roles, items }) => {
    const router = useRouter();
    const { setSnackbar } = useContext(MainLayoutContext);

    const { mutate, isPending } = useMutation<unknown, unknown, FormSheet>({
        mutationFn: async (newSheet) => await createSheet(newSheet),
        onSuccess: () => {
            setSnackbar({
                severity: "success",
                message: "New sheet added successfully!",
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
            <PageTitle title="new character sheet" />
            <SheetForm
                loading={isPending}
                items={items}
                roles={roles}
                onSubmit={(newSheet) => {
                    mutate(newSheet);
                }}
            />
        </Stack>
    );
};

export default NewSheetPage;
