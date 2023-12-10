import { Box, CircularProgress, Paper } from "@mui/material";

const LoadingPage = () => {
    <Paper
        elevation={3}
        sx={{
            flexGrow: 1,
            maxWidth: 1024,
            display: "flex",
        }}
    >
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
    </Paper>;
};

export default LoadingPage;
