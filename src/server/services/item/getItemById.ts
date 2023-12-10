import { type Item } from "@prisma/client";

import prisma from "@/server/database/prisma";

const getItemById = async (id: Item["id"]): Promise<Item | null> => {
    const item = await prisma.item.findFirst({
        where: {
            id,
        },
    });

    return item;
};

export default getItemById;
