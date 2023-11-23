"use client";

import { type FC } from "react";

import { SessionProvider } from "next-auth/react";

import MainLayoutProvider from "./MainLayoutProvider";
import QueryProvider from "./QueryProvider";
import ThemeRegistry from "./ThemeRegistry";

interface AppProviderProps {
    children: React.ReactNode;
}

const AppProvider: FC<AppProviderProps> = ({ children }) => {
    return (
        <SessionProvider>
            <QueryProvider>
                <ThemeRegistry>
                    <MainLayoutProvider>{children}</MainLayoutProvider>
                </ThemeRegistry>
            </QueryProvider>
        </SessionProvider>
    );
};

export default AppProvider;
