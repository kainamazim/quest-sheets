import React, { type FC } from "react";

import {
    AdventurePointTag,
    DamageTag,
    RarityTag,
    RollTheDieTag,
    TreasureTag,
} from "@/components/@common/tags";
import type { Item } from "@/types/data";

export interface ItemTagsProps {
    item: Item;
    showRarity?: boolean;
}

const ItemTags: FC<ItemTagsProps> = ({ item, showRarity = false }) => {
    return (
        <>
            {showRarity && <RarityTag rarity={item.rarity} />}
            {item.authorId == null && <TreasureTag />}
            {Boolean(item.rollTheDie) && (
                <RollTheDieTag checked={Boolean(item.rollTheDie)} />
            )}
            {Boolean(item.damage) && <DamageTag damage={item.damage} />}
            {Boolean(item.activationCost) && (
                <AdventurePointTag
                    adventurePoints={item.activationCost}
                    title={"Activation Cost"}
                />
            )}
        </>
    );
};

export default ItemTags;
