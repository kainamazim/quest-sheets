import TreasureCatalogPage from "@/content/(book)/treasure/TreasureCatalogPage";
import prisma from "@/database/prisma";

const fetchData = async () => {
    const commonItems = await prisma.item.findMany({
        where: {
            authorId: null,
            rarity: "common",
        },
    });

    const uncommonItems = await prisma.item.findMany({
        where: {
            authorId: null,
            rarity: "uncommon",
        },
    });

    const rareItems = await prisma.item.findMany({
        where: {
            authorId: null,
            rarity: "rare",
        },
    });

    const legendaryItems = await prisma.item.findMany({
        where: {
            authorId: null,
            rarity: "legendary",
        },
    });

    const supremeItems = await prisma.item.findMany({
        where: {
            authorId: null,
            rarity: "supreme",
        },
    });

    return { commonItems, uncommonItems, rareItems, legendaryItems, supremeItems };
};

const TreasureCatalog = async () => {
    const data = await fetchData();

    return <TreasureCatalogPage {...data} />;
};

export default TreasureCatalog;
