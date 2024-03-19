import { type FC, useContext } from "react";

import { ContentCopySharp, DeleteSharp } from "@mui/icons-material";
import EditSharp from "@mui/icons-material/EditSharp";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import createItem from "@/api/items/createItem";
import deleteItem from "@/api/items/deleteItem";
import { MainLayoutContext } from "@/providers/MainLayoutProvider";
import type { Item } from "@/types/data";

import { ActionCard } from "../@common/display";
import { type ActionCardProps } from "../@common/display/ActionCard";
import { RarityTag } from "../@common/tags";
import { rarityTagClass } from "../@common/tags/RarityTag";
import ItemTags from "./ItemTags";

interface ItemActionCardProps {
    item: Item;
    callback: () => void;
}

const ItemActionCard: FC<ItemActionCardProps> = ({ item, callback }) => {
    const router = useRouter();

    const { setSnackbar, setDialog } = useContext(MainLayoutContext);

    const { mutate: deleteItemMutation } = useMutation<unknown, unknown, Item["id"]>({
        mutationFn: async (itemId) => await deleteItem(itemId),
        onSuccess: async () => {
            setSnackbar({
                severity: "success",
                message: "Item deleted successfully!",
            });
            callback();
        },
        onError: () => {
            setSnackbar({
                severity: "error",
                message: "Error while trying to delete item!",
            });
        },
    });

    const { mutate: copyItem } = useMutation<unknown, unknown, Item>({
        mutationFn: async ({ id, ...newItem }) =>
            await createItem({ ...newItem, title: newItem.title + " (Copy)" }),
        onSuccess: () => {
            setSnackbar({
                severity: "success",
                message: "Item copied successfully!",
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

    const customItemActions: ActionCardProps["actions"] = [
        {
            title: "Update",
            Icon: EditSharp,
            handleClick: () => {
                router.push(`/items/update/${item.id}`);
            },
        },
        {
            title: "Delete",
            Icon: DeleteSharp,
            handleClick: () => {
                setDialog({
                    title: "are you sure?",
                    description: "This item data will be forever lost.",
                    handleConfirm: () => {
                        deleteItemMutation(item.id);
                    },
                });
            },
        },
    ];

    const treasureItemActions: ActionCardProps["actions"] = [
        {
            title: "Copy",
            Icon: ContentCopySharp,
            handleClick: () => {
                copyItem(item);
            },
        },
    ];

    return (
        <ActionCard
            key={item.id}
            title={item.title}
            badge={<RarityTag rarity={item.rarity} />}
            tags={<ItemTags item={item} />}
            sx={(theme) => ({
                [`&:hover .${rarityTagClass}`]: {
                    color: theme.palette.text.primary,
                    borderColor: theme.palette.text.primary,
                },
            })}
            actions={item.authorId != null ? customItemActions : treasureItemActions}
        />
    );
};

export default ItemActionCard;
