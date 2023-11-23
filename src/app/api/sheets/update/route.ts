import { type NextRequest, NextResponse } from "next/server";

import prisma from "@/database/prisma";
import getSession from "@/services/user/getSession";
import { type FullSheet } from "@/types";

const POST = async (request: NextRequest) => {
    const {
        sheet: { id, abilities, items, role, ...formSheet },
    } = (await request.json()) as { sheet: FullSheet };

    const session = await getSession();

    const sheet = await prisma.characterSheet.update({
        where: {
            id,
        },
        data: {
            ...formSheet,
            authorId: session.user.id,
            abilities: { set: abilities.map(({ id }) => ({ id })) },
            items: { set: items.map(({ id }) => ({ id })) },
        },
    });

    return NextResponse.json({ sheet }, { status: 200 });
};

export { POST };
