import bcrypt from "bcrypt";
import { type NextRequest, NextResponse } from "next/server";

import prisma from "@/database/prisma";

export async function POST(request: NextRequest) {
    try {
        const { username, password } = await request.json();

        const user = await prisma.user.create({
            data: {
                username,
                password: await bcrypt.hash(password, 10),
            },
        });

        const { password: hashedPassword, ...result } = user;

        return NextResponse.json(
            {
                message: "user created",
                user: result,
            },
            { status: 201 },
        );
    } catch (error: any) {
        return NextResponse.json(error.message, { status: 500 });
    }
}
