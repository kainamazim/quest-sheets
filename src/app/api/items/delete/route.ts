import { type Item } from "@prisma/client";
import { type NextRequest, NextResponse } from "next/server";

import prisma from "@/server/database/prisma";

const POST = async (request: NextRequest) => {
    const { itemId } = (await request.json()) as { itemId: Item["id"] };

    const deletedItem = await prisma.item.delete({
        where: {
            id: itemId,
        },
    });

    return NextResponse.json({ deletedItem }, { status: 200 });
};

export { POST };
