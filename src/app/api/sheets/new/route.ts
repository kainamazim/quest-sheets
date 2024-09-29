import { type NextRequest, NextResponse } from "next/server";

import prisma from "@/server/database/prisma";
import getSession from "@/server/services/user/getSession";
import { type FullSheet } from "@/types";

const POST = async (request: NextRequest) => {
    const { sheet: sheetData } = (await request.json()) as { sheet: FullSheet };

    const session = await getSession();

    const {
        abilities,
        items,
        currentAdventurePoints,
        currentHitPoints,
        roleId,
        description,
        name,
    } = sheetData;

    const sheet = await prisma.characterSheet.create({
        data: {
            authorId: session.user.id,
            abilities: { connect: abilities.map(({ id }) => ({ id })) },
            items: { connect: items.map(({ id }) => ({ id })) },
            roleId,
            currentAdventurePoints,
            currentHitPoints,
            description,
            name,
        },
    });

    return NextResponse.json({ sheet }, { status: 200 });
};

export { POST };
