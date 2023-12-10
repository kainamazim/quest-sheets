import { type SheetFilterState } from "@/components/sheet/SheetFilter";
import prisma from "@/server/database/prisma";
import { type FullSheet } from "@/types";

import getSession from "../user/getSession";

const getSheetsByFilter = async (filter: SheetFilterState): Promise<FullSheet[]> => {
    const { name, roleIds, sortBy } = filter;

    const session = await getSession();

    const itemsByFilter = await prisma.characterSheet.findMany({
        where: {
            AND: [
                { authorId: session.user.id },

                {
                    name: {
                        contains: name,
                        mode: "insensitive",
                    },
                },
                roleIds.length
                    ? {
                          roleId: {
                              in: roleIds,
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
        include: {
            role: true,
            abilities: true,
            items: true,
        },
    });

    return itemsByFilter;
};

export default getSheetsByFilter;
