import React, { type FC } from "react";

import { AdventurePointTag, HitPointTag } from "@/components/@common/tags";
import { type FullSheet } from "@/types";

import SheetItemsTag from "../@common/tags/SheetItemsTag";

export interface ItemTagsProps {
    sheet: FullSheet;
}

const SheetTags: FC<ItemTagsProps> = ({ sheet }) => {
    return (
        <>
            <HitPointTag hitPoints={sheet.currentHitPoints} />

            <SheetItemsTag itemsLength={sheet.items.length} />

            <AdventurePointTag adventurePoints={sheet.currentAdventurePoints} />
        </>
    );
};

export default SheetTags;
