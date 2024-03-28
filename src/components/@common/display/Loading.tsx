import type { FC } from "react";

import { Box, CircularProgress } from "@mui/material";

const Loading: FC = () => {
    return (
        <Box
            minHeight={250}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CircularProgress />
        </Box>
    );
};

export default Loading;
