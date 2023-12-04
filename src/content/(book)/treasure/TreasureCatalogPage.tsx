"use client";

import { type FC } from "react";

import { Paper, Stack, Typography } from "@mui/material";
import { type Item } from "@prisma/client";

import { PageTitle } from "@/components/@common/display";
import TextImageSection from "@/components/@common/display/TextImageSection";
import ItemAccordion from "@/components/item/ItemAccordion";
import { type ItemViewCardProps } from "@/components/item/ItemViewCard";
import { headingText, pullquoteText } from "@/styles/font";

import treasurePicture from "../../../../public/treasure.png";

interface TreasureCatalogPageProps {
    commonItems: Item[];
    uncommonItems: Item[];
    rareItems: Item[];
    legendaryItems: Item[];
    supremeItems: Item[];
}

const itemRarities: Array<{ title: string; description: string }> = [
    {
        title: "uncommon",
        description:
            "These items are more valuable and curious than the common goods seen by most people",
    },
    {
        title: "rare",
        description:
            "These are exceptional items of great value that are very difficult to find and often well-guarded.",
    },
    {
        title: "legendary",
        description:
            "These are priceless and often unique items of great power, only found in the most remote or guarded places. They are extraordinarily difficult to acquire, and the owners of legendary items will often go to great lengths to protect them.",
    },
    {
        title: "supreme",
        description:
            "These are items of such incredible power that the consequences of their use ripple through the omniverse.",
    },
];

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
        <Stack
            gap={3}
            sx={{
                flexGrow: 1,
                maxWidth: 1024,
            }}
        >
            <TextImageSection
                image={{ side: "right", src: treasurePicture, alt: "Treasures" }}
            >
                <Stack
                    sx={{
                        paddingBlock: 4,
                        paddingInline: 3,

                        gap: 1,
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: pullquoteText.style.fontFamily,
                            fontWeight: 900,
                            mb: 1,
                        }}
                    >
                        {"Item Rarity"}
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: "1.25rem",
                            mb: 2,
                        }}
                    >
                        {
                            "Each item in this game is classified by its rarity — a measure of how special the item is. Use an item's rarity to consider whether it's an appropriate reward for a situation in the story."
                        }
                    </Typography>

                    {itemRarities.map(({ title, description }) => (
                        <Typography
                            key={title}
                            variant="body1"
                            sx={{
                                fontSize: "1.25rem",
                                mb: 1,
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: headingText.style.fontFamily,
                                    textTransform: "lowercase",
                                    fontWeight: 700,
                                }}
                            >
                                {title + ": "}
                            </span>
                            {description}
                        </Typography>
                    ))}
                </Stack>
            </TextImageSection>

            <Paper
                elevation={3}
                sx={{
                    flexGrow: 1,
                    maxWidth: 1024,

                    paddingBlock: 4,
                    paddingInline: 3,
                }}
            >
                <Stack>
                    <PageTitle title="Treasure Catalog" />
                    <Stack gap={1}>
                        <ItemAccordion
                            title={"Common Items"}
                            items={getProps(commonItems)}
                        />
                        <ItemAccordion
                            title={"Uncommon Items"}
                            items={getProps(uncommonItems)}
                        />
                        <ItemAccordion
                            title={"Rare Items"}
                            items={getProps(rareItems)}
                        />
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
            </Paper>
        </Stack>
    );
};

export default TreasureCatalogPage;
