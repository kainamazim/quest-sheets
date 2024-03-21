import type { FC, ReactNode } from "react";

import { Grid } from "@mui/material";

export interface DoubleSideSectionsProps {
    right: ReactNode;
    left: ReactNode;
}

const DoubleSideSections: FC<DoubleSideSectionsProps> = ({ right, left }) => {
    return (
        <Grid container flexGrow={1}>
            <Grid
                item
                sm={12}
                md={5}
                flexGrow={1}
                sx={{
                    paddingBlock: 4,
                    paddingInline: 5,
                    backgroundColor: ({ palette }) => palette.grey[300],
                    maxHeight: "23rem",
                    overflowY: "scroll",
                    "::-webkit-scrollbar": {
                        width: "0.5rem",
                    },
                    "::-webkit-scrollbar-thumb": ({ palette }) => ({
                        backgroundColor: palette.grey[600],
                    }),
                }}
            >
                {left}
            </Grid>

            <Grid
                item
                sm={12}
                md={7}
                flexGrow={1}
                sx={{
                    paddingBlock: 4,
                    paddingInline: 5,
                    maxHeight: "23rem",
                    overflowY: "scroll",
                    "::-webkit-scrollbar": {
                        width: "0.5rem",
                    },
                    "::-webkit-scrollbar-thumb": ({ palette }) => ({
                        backgroundColor: palette.grey[600],
                    }),
                }}
            >
                {right}
            </Grid>
        </Grid>
    );
};

export default DoubleSideSections;
