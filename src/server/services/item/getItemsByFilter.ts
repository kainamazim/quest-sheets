import type { Item, Prisma } from "@prisma/client";

import { type ItemFilterState } from "@/components/item/ItemFilter";
import prisma from "@/server/database/prisma";

import getSession from "../user/getSession";

const getItemsByFilter = async (filter: ItemFilterState): Promise<Item[]> => {
    const { title, rarity, sortBy, author } = filter;

    const session = await getSession();

    const authorUserOption = {
        authorId: session.user.id,
    };

    const authorTreasureOption = {
        authorId: null,
    };

    const authorFilter: Prisma.ItemFindManyArgs["where"] = {
        OR: [],
    };

    if (author === "user") authorFilter.OR = [authorUserOption];
    else if (author === "treasure") authorFilter.OR = [authorTreasureOption];
    else if (author === "all")
        authorFilter.OR = [authorUserOption, authorTreasureOption];

    const itemsByFilter = await prisma.item.findMany({
        where: {
            AND: [
                authorFilter,
                {
                    title: {
                        contains: title,
                        mode: "insensitive",
                    },
                },
                rarity.length
                    ? {
                          rarity: {
                              in: rarity,
                          },
                      }
                    : {},
            ],
        },
        orderBy: [
            {
                [sortBy]: "asc",
            },
        ],
    });

    return itemsByFilter;
};

export default getItemsByFilter;
