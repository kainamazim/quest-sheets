import prisma from "@/database/prisma";

import { NextResponse, NextRequest } from "next/server";

import bcrypt from "bcrypt";

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
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "server-error", error },
      { status: 500 }
    );
  }
}
