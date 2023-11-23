"use client";

import { type FC } from "react";

import { Stack } from "@mui/material";
import { type Item } from "@prisma/client";

import { PageTitle } from "@/components/@common/display";
import ItemAccordion from "@/components/item/ItemAccordion";
import { type ItemViewCardProps } from "@/components/item/ItemViewCard";

interface TreasureCatalogPageProps {
    commonItems: Item[];
    uncommonItems: Item[];
    rareItems: Item[];
    legendaryItems: Item[];
    supremeItems: Item[];
}

const TreasureCatalogPage: FC<TreasureCatalogPageProps> = ({
    commonItems,
    uncommonItems,
    rareItems,
    legendaryItems,
    supremeItems,
}) => {
    const getProps = (items: Item[]): ItemViewCardProps[] =>
        items.map((item) => ({ item, hideCheckbox: true }));

    return (
        <Stack>
            <PageTitle title="Treasure Catalog" />
            <Stack gap={1}>
                <ItemAccordion title={"Common Items"} items={getProps(commonItems)} />
                <ItemAccordion
                    title={"Uncommon Items"}
                    items={getProps(uncommonItems)}
                />
                <ItemAccordion title={"Rare Items"} items={getProps(rareItems)} />
                <ItemAccordion
                    title={"Legendary Items"}
                    items={getProps(legendaryItems)}
                />
                <ItemAccordion
                    title={"Supreme Items"}
                    items={getProps(supremeItems)}
                />
            </Stack>
        </Stack>
    );
};

export default TreasureCatalogPage;
