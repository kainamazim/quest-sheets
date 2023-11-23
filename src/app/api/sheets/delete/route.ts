import { type CharacterSheet } from "@prisma/client";
import { type NextRequest, NextResponse } from "next/server";

import prisma from "@/database/prisma";

const POST = async (request: NextRequest) => {
    const { sheetId } = (await request.json()) as { sheetId: CharacterSheet["id"] };

    const sheet = await prisma.characterSheet.delete({
        where: {
            id: sheetId,
        },
    });

    return NextResponse.json({ sheet }, { status: 200 });
};

export { POST };
