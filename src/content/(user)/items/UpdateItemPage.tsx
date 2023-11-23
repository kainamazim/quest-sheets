"use client";

import { type FC, useContext } from "react";

import { Stack } from "@mui/material";
import { type Item } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import updateItem from "@/api/items/updateItem";
import { PageTitle } from "@/components/@common/display";
import ItemForm, { type FormItem } from "@/components/item/ItemForm";
import { MainLayoutContext } from "@/providers/MainLayoutProvider";

interface UpdateItemPageProps {
    item: Item;
}

const UpdateItemPage: FC<UpdateItemPageProps> = ({ item }) => {
    const router = useRouter();
    const { setSnackbar } = useContext(MainLayoutContext);

    const { mutate, isPending } = useMutation<unknown, unknown, FormItem>({
        mutationFn: async (newItem) => await updateItem(newItem),
        onSuccess: () => {
            setSnackbar({
                severity: "success",
                message: "Item updated successfully!",
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
            <PageTitle title="update item" />
            <ItemForm
                item={item}
                onSubmit={(newItem) => {
                    mutate(newItem);
                }}
                loading={isPending}
            />
        </Stack>
    );
};

export default UpdateItemPage;
