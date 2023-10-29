import api from "@/helpers/api";
import { RequestInternal, User } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authHandler = NextAuth({
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
        credentials: Record<string, string> | undefined,
        req: Pick<RequestInternal, "body" | "query" | "headers" | "method">
      ) => {
        try {
          const { data, status } = await api.post<{ result: User }>("/login", {
            username: credentials?.username,
            password: credentials?.password,
          });

          console.log({ data, status });

          if (status === 200) {
            return data.result;
          } else {
            throw JSON.stringify(data);
          }
        } catch (error) {
          throw new Error(error as string);
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});

export { authHandler as GET, authHandler as POST };
