"use client";

import { type FC, type PropsWithChildren, useContext } from "react";

import { Box, Paper } from "@mui/material";
import { usePathname } from "next/navigation";

import { Header, Sidebar, headerHeight } from "@/components/@common/layouts";
import { MainLayoutContext } from "@/providers/MainLayoutProvider";

const customPaperRoutes = ["/", "/rules"];

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
    const { handleCloseSidebar } = useContext(MainLayoutContext);
    const pathname = usePathname();

    const isCustomPaper = customPaperRoutes.includes(pathname);
    return (
        <Box
            sx={{
                backgroundColor: (theme) => theme.palette.grey[300],
                flexGrow: 1,
                minHeight: "100vh",
                marginTop: headerHeight,
                overflow: "auto",
                paddingBlock: 4,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
            }}
            onClick={handleCloseSidebar}
            onKeyDown={handleCloseSidebar}
        >
            {isCustomPaper ? (
                children
            ) : (
                <Paper
                    elevation={3}
                    sx={{
                        flexGrow: 1,
                        maxWidth: 1024,

                        paddingBlock: 4,
                        paddingInline: 3,
                    }}
                >
                    {children}
                </Paper>
            )}
        </Box>
    );
};

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Box sx={{ display: "flex" }}>
            <Header />
            <Sidebar />
            <Wrapper>{children}</Wrapper>
        </Box>
    );
};

export default MainLayout;
