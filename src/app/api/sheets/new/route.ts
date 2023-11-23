import { type NextRequest, NextResponse } from "next/server";

import prisma from "@/database/prisma";
import getSession from "@/services/user/getSession";
import { type FullSheet } from "@/types";

const POST = async (request: NextRequest) => {
    const {
        sheet: { abilities, items, role, ...formSheet },
    } = (await request.json()) as { sheet: FullSheet };

    const session = await getSession();

    const sheet = await prisma.characterSheet.create({
        data: {
            ...formSheet,
            authorId: session.user.id,
            abilities: { connect: abilities.map(({ id }) => ({ id })) },
            items: { connect: items.map(({ id }) => ({ id })) },
        },
    });

    return NextResponse.json({ sheet }, { status: 200 });
};

export { POST };
