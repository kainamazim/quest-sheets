import type { FC, ReactNode } from "react";

import { Grid } from "@mui/material";
import type { SxProps, Theme } from "@mui/material";

export interface DoubleSideSectionsProps {
    right: ReactNode;
    left: ReactNode;
}

const sectionStyle: SxProps<Theme> = {
    flexGrow: 1,
    paddingBlock: 4,
    paddingInline: 3,

    height: "26rem",
    overflowY: "scroll",
    "::-webkit-scrollbar": {
        width: "0.5rem",
    },
    "::-webkit-scrollbar-thumb": ({ palette }) => ({
        backgroundColor: palette.grey[600],
    }),
};

const leftSectionStyle: SxProps<Theme> = {
    ...sectionStyle,
    backgroundColor: ({ palette }) => palette.grey[300],
};

const DoubleSideSections: FC<DoubleSideSectionsProps> = ({ right, left }) => {
    return (
        <Grid container flexGrow={1}>
            <Grid item sm={12} md={5} flexGrow={1} sx={leftSectionStyle}>
                {left}
            </Grid>

            <Grid item sm={12} md={7} flexGrow={1} sx={sectionStyle}>
                {right}
            </Grid>
        </Grid>
    );
};

export default DoubleSideSections;
