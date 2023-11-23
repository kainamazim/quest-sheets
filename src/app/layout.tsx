import type { Metadata } from "next";

import AppProvider from "@/providers/AppProvider";
import { pullquoteText } from "@/styles/font";

export const metadata: Metadata = {
    title: "Quest Sheets",
    description: "Character Sheet Manager for Quest",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <html lang="en">
            <body className={pullquoteText.className}>
                <AppProvider>{children}</AppProvider>
            </body>
        </html>
    );
};

export default RootLayout;
