import type { Item } from "@prisma/client";

import prisma from "@/database/prisma";

import getSession from "../user/getSession";

const getUserSingleItem = async (itemId: Item["id"]): Promise<Item | null> => {
    const session = await getSession();

    const item = await prisma.item.findFirst({
        where: {
            id: itemId,
            authorId: session.user.id,
        },
    });

    return item;
};

export default getUserSingleItem;
