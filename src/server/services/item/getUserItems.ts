import { type Item } from "@prisma/client";

import prisma from "@/server/database/prisma";

import getSession from "../user/getSession";

const getUserItems = async (): Promise<Item[]> => {
    const session = await getSession();

    const userItems = await prisma.item.findMany({
        where: {
            authorId: session.user.id,
        },
    });

    return userItems;
};

export default getUserItems;
