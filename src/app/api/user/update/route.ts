import { type Item as User } from "@prisma/client";
import { type NextRequest, NextResponse } from "next/server";

import prisma from "@/server/database/prisma";

const POST = async (request: NextRequest) => {
    const { user } = (await request.json()) as { user: User };

    const newUser = await prisma.user.update({
        where: {
            id: user.id,
        },
        data: user,
    });

    return NextResponse.json({ newUser }, { status: 200 });
};

export { POST };
