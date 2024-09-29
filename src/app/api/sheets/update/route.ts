import { type NextRequest, NextResponse } from "next/server";

import prisma from "@/server/database/prisma";
import getSession from "@/server/services/user/getSession";
import { type FullSheet } from "@/types";

const POST = async (request: NextRequest) => {
    const { sheet: sheetData } = (await request.json()) as { sheet: FullSheet };

    const {
        id,
        abilities,
        items,
        currentAdventurePoints,
        currentHitPoints,
        roleId,
        description,
        name,
    } = sheetData;

    const session = await getSession();

    const sheet = await prisma.characterSheet.update({
        where: {
            id,
        },
        data: {
            currentAdventurePoints,
            currentHitPoints,
            roleId,
            description,
            name,
            authorId: session.user.id,
            abilities: { set: abilities.map(({ id }) => ({ id })) },
            items: { set: items.map(({ id }) => ({ id })) },
        },
    });

    return NextResponse.json({ sheet }, { status: 200 });
};

export { POST };
