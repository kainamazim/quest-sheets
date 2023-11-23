import React, { type FC } from "react";

import { Box } from "@mui/material";

import { SectionAccordion } from "../@common/display";
import ItemViewCard, { type ItemViewCardProps } from "./ItemViewCard";

interface ItemAccordionProps {
    title: string;
    items: ItemViewCardProps[];
}

const ItemAccordion: FC<ItemAccordionProps> = ({ items, title }) => {
    return (
        <SectionAccordion title={title}>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                {items.map((props) => (
                    <ItemViewCard key={props.item.id} {...props} />
                ))}
            </Box>
        </SectionAccordion>
    );
};

export default ItemAccordion;
