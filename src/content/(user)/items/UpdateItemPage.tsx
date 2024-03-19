"use client";

import { type FC, useContext, useEffect } from "react";

import { Box, CircularProgress, Stack } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import getSingleItem from "@/api/items/getSingleItem";
import updateItem from "@/api/items/updateItem";
import { PageTitle } from "@/components/@common/display";
import ItemForm, { type FormItem } from "@/components/item/ItemForm";
import { MainLayoutContext } from "@/providers/MainLayoutProvider";
import type { Item } from "@/types/data";

interface UpdateItemPageContentProps {
    item: Item;
}

const UpdateItemPageContent: FC<UpdateItemPageContentProps> = ({ item }) => {
    const router = useRouter();
    const { setSnackbar } = useContext(MainLayoutContext);

    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation<unknown, unknown, FormItem>({
        mutationFn: async (newItem) => await updateItem(newItem),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["item"] });
            await queryClient.refetchQueries();

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

interface UpdateItemPageProps {
    itemId: Item["id"];
}

const UpdateItemPage: FC<UpdateItemPageProps> = ({ itemId }) => {
    const {
        data: item,
        refetch,
        isPending,
    } = useQuery({
        queryKey: ["item", "update", itemId],
        queryFn: async () => await getSingleItem(itemId),
        staleTime: Infinity,
    });

    useEffect(() => {
        void refetch();
    }, [refetch]);

    return isPending || typeof item === "undefined" ? (
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
        <UpdateItemPageContent item={item} />
    );
};

export default UpdateItemPage;
