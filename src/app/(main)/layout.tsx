"use client";

import { type FC, type PropsWithChildren, useContext } from "react";

import { Box } from "@mui/material";
import { usePathname } from "next/navigation";

import { Header, Sidebar, headerHeight } from "@/components/@common/layouts";
import BasePaper from "@/components/@common/layouts/BasePaper";
import { MainLayoutContext } from "@/providers/MainLayoutProvider";

const customPaperRoutes = ["/", "/rules", "/treasure", "/sheets/creation-guide"];

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
    const { handleCloseSidebar } = useContext(MainLayoutContext);
    const pathname = usePathname();

    const isCustomPaper = customPaperRoutes.includes(pathname);
    return (
        <Box
            sx={{
                backgroundColor: ({ palette }) =>
                    palette.mode === "light" ? palette.grey[300] : palette.grey[800],
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
            {isCustomPaper ? children : <BasePaper>{children}</BasePaper>}
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
