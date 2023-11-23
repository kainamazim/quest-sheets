import { type Item } from "@prisma/client";

import prisma from "@/database/prisma";

import getSession from "../user/getSession";

const getAvailableItems = async (): Promise<Item[]> => {
    const session = await getSession();

    const availableItems = await prisma.item.findMany({
        where: {
            OR: [
                {
                    authorId: session.user.id,
                },
                {
                    authorId: null,
                },
            ],
        },
    });

    return availableItems;
};

export default getAvailableItems;
