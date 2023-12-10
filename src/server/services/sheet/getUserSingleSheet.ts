import prisma from "@/server/database/prisma";
import { type FullSheet } from "@/types";

import getSession from "../user/getSession";

const getUserSingleSheet = async (
    sheetId: FullSheet["id"],
): Promise<FullSheet | null> => {
    const session = await getSession();

    const sheet = await prisma.characterSheet.findFirst({
        where: {
            id: sheetId,
            authorId: session.user.id,
        },
        include: {
            role: true,
            abilities: true,
            items: true,
        },
    });

    return sheet;
};

export default getUserSingleSheet;
