import prisma from "@/database/prisma";
import { type FullSheet } from "@/types";

import getSession from "../user/getSession";

const getUserSheets = async (): Promise<FullSheet[]> => {
    const session = await getSession();

    const userSheets = await prisma.characterSheet.findMany({
        where: {
            authorId: session.user.id,
        },
        include: {
            role: true,
            abilities: true,
            items: true,
        },
    });

    return userSheets;
};

export default getUserSheets;
