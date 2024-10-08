import { type User as PrismaUser } from "@prisma/client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            /** The user's postal address. */
            id: PrismaUser["id"];
            username: PrismaUser["username"];
        };
    }

    interface User {
        id: PrismaUser["id"];
        username: PrismaUser["username"];
    }
}
