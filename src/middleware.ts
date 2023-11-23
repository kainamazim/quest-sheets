export { default } from "next-auth/middleware";

export const config = {
    matcher: [
        "/account",
        "/sheets",
        "/sheets/new",
        "/sheets/update",
        "/items",
        "/items/new",
        "/items/update",
    ],
};
