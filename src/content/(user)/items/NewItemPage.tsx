"use client";

import { type FC, useContext } from "react";

import { Stack } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import createItem from "@/api/items/createItem";
import { PageTitle } from "@/components/@common/display";
import ItemForm, { type FormItem } from "@/components/item/ItemForm";
import { MainLayoutContext } from "@/providers/MainLayoutProvider";

const NewItemPage: FC = () => {
    const router = useRouter();
    const { setSnackbar } = useContext(MainLayoutContext);

    const { mutate, isPending } = useMutation<unknown, unknown, FormItem>({
        mutationFn: async (newItem) => await createItem(newItem),
        onSuccess: () => {
            setSnackbar({
                severity: "success",
                message: "New item added successfully!",
            });
            router.push("/items");
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
            <PageTitle title="new item" />
            <ItemForm
                onSubmit={(newItem) => {
                    mutate(newItem);
                }}
                loading={isPending}
            />
        </Stack>
    );
};

export default NewItemPage;
