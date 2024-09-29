import bcrypt from "bcrypt";
import { type NextRequest, NextResponse } from "next/server";

import prisma from "@/server/database/prisma";

export async function POST(request: NextRequest) {
    try {
        const { username, password } = await request.json();

        const user = await prisma.user.create({
            data: {
                username,
                password: await bcrypt.hash(password, 10),
            },
        });

        const { id, createdAt, updatedAt } = user;

        return NextResponse.json(
            {
                message: "user created",
                user: {
                    id,
                    username,
                    createdAt,
                    updatedAt,
                },
            },
            { status: 201 },
        );
    } catch (error: unknown) {
        return NextResponse.json((error as { message: string }).message, {
            status: 500,
        });
    }
}
