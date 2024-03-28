import type { FC, ReactNode } from "react";

import { Paper, type PaperProps } from "@mui/material";

export interface BasePaperProps {
    children: ReactNode;
    sx?: PaperProps["sx"];
}

const BasePaper: FC<BasePaperProps> = ({ children, sx }) => {
    return (
        <Paper
            elevation={3}
            sx={{
                flexGrow: 1,
                maxWidth: 1024,

                paddingBlock: 4,
                paddingInline: 3,
                ...sx,
            }}
        >
            {children}
        </Paper>
    );
};

export default BasePaper;
