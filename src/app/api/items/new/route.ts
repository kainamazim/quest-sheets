import { type Item } from "@prisma/client";
import { type NextRequest, NextResponse } from "next/server";

import prisma from "@/server/database/prisma";
import getSession from "@/server/services/user/getSession";

const POST = async (request: NextRequest) => {
    const {
        item: { id, ...item },
    } = (await request.json()) as { item: Item };

    const session = await getSession();

    const data = { ...item, authorId: session.user.id };

    const newItem = await prisma.item.create({
        data,
    });

    return NextResponse.json({ newItem }, { status: 200 });
};

export { POST };
