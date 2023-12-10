import bcrypt from "bcrypt";
import { type NextAuthOptions, type RequestInternal, type User } from "next-auth";
import { type JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "../database/prisma";

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            authorize: async (
                credentials: Record<"username" | "password", string> | undefined,
                req: Pick<RequestInternal, "body" | "query" | "headers" | "method">,
            ) => {
                if (credentials == null) throw new Error("Invalid Credentials");

                const { username, password } = credentials;

                const user = await prisma.user.findFirst({
                    where: { username },
                });

                if (user == null) throw new Error("User not found");

                const isPasswordMatch = await bcrypt.compare(password, user.password);

                if (!isPasswordMatch) throw new Error("Invalid Password");

                const { password: hashedPasswrod, ...safeUser } = user;

                return safeUser as unknown as User;
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        jwt: async ({ token, user, trigger, session }) => {
            if (trigger === "update" && session.user) {
                user = { ...user, ...session.user };
            }

            return { ...token, ...user };
        },
        session: async ({ session, token, trigger, newSession }) => {
            session.user = token as JWT & { id: number; username: string };

            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;
