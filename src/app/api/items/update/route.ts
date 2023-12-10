import { type Item } from "@prisma/client";
import { type NextRequest, NextResponse } from "next/server";

import prisma from "@/server/database/prisma";

const POST = async (request: NextRequest) => {
    const { item } = (await request.json()) as { item: Item };

    const newItem = await prisma.item.update({
        where: {
            id: item.id,
        },
        data: item,
    });

    return NextResponse.json({ newItem }, { status: 200 });
};

export { POST };
