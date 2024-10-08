import React, { type FC } from "react";

import { type Item } from "@prisma/client";

import ViewCard, { type ViewCardProps } from "@/components/@common/display/ViewCard";

import ItemTags from "./ItemTags";

export interface ItemViewCardProps
    extends Pick<ViewCardProps, "checked" | "handleChange"> {
    item: Item;
}

const ItemViewCard: FC<ItemViewCardProps> = ({ item, ...cardProps }) => {
    return (
        <ViewCard
            title={item.title}
            description={item.description ?? ""}
            tags={<ItemTags item={item} showRarity />}
            {...cardProps}
        />
    );
};

export default ItemViewCard;
