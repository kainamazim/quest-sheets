import prisma from "@/database/prisma";

import { NextResponse, NextRequest } from "next/server";

import bcrypt from "bcrypt";

import { signJwtAccessToken } from "@/helpers/jwt";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { message: "Both fields are required" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findFirst({
      where: { username: username },
    });

    if (!user) {
      return NextResponse.json({ message: "No user found" }, { status: 400 });
    }

    if (await bcrypt.compare(password, user.password)) {
      const { password: hashedPasswrod, ...result } = user;
      const accessToken = signJwtAccessToken(result);
      return NextResponse.json(
        { result: { ...result, accessToken } },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Password incorrect" },
        { status: 400 }
      );
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Something went wrong while trying to log in", result: e },
      { status: 500 }
    );
  }
}
