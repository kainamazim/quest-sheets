// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

import { type User } from "@/types/data";

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            /** The user's postal address. */
            id: User["id"];
            username: User["username"];
        };
    }
}
