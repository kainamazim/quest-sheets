import { type User } from "@prisma/client";
import bcrypt from "bcrypt";
import { type NextRequest, NextResponse } from "next/server";

import prisma from "@/database/prisma";

const POST = async (request: NextRequest) => {
    try {
        const { userId, currentPassword, newPassword } = (await request.json()) as {
            userId: User["id"];
            currentPassword: User["password"];
            newPassword: User["password"];
        };

        const user = await prisma.user.findFirst({
            where: { id: userId },
        });

        if (user == null) throw new Error("User not found");

        const isPasswordMatch = await bcrypt.compare(currentPassword, user.password);

        if (!isPasswordMatch) throw new Error("Invalid Current Password");

        const newUser = await prisma.user.update({
            where: { id: userId },
            data: {
                password: await bcrypt.hash(newPassword, 10),
            },
        });

        return NextResponse.json({ newUser }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
};

export { POST };
