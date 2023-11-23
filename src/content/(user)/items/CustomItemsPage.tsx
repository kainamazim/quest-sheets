"use client";

import { type FC } from "react";

import AddSharpIcon from "@mui/icons-material/AddSharp";
import { Button, Stack } from "@mui/material";
import { type Item } from "@prisma/client";
import { useRouter } from "next/navigation";

import { PageTitle } from "@/components/@common/display";
import ItemActionCard from "@/components/item/ItemActionCard";
import { defaultFilter } from "@/components/item/ItemFilter";
import ItemList from "@/components/item/ItemList";

interface CustomItemsPageProps {
    items: Item[];
}

const CustomItemsPage: FC<CustomItemsPageProps> = ({ items: initialItems }) => {
    const router = useRouter();

    return (
        <Stack>
            <PageTitle title="custom items" />
            <Stack gap={4}>
                <ItemList
                    initialItems={initialItems}
                    initialFilter={{ ...defaultFilter, author: "user" }}
                    renderItem={(item, { refetch }) => (
                        <ItemActionCard
                            key={item.id}
                            item={item}
                            callback={() => {
                                void refetch();
                            }}
                        />
                    )}
                />
                <Button
                    color="inherit"
                    endIcon={<AddSharpIcon />}
                    onClick={() => {
                        router.push("/items/new");
                    }}
                >
                    {"New Item"}
                </Button>
            </Stack>
        </Stack>
    );
};

export default CustomItemsPage;
