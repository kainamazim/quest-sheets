import { type Dispatch, type FC, type SetStateAction } from "react";

import {
    Alert,
    type AlertProps,
    Grow,
    type SnackbarProps as MuiSnackbarProps,
    Snackbar,
} from "@mui/material";

export interface SnackbarProps {
    message: string;
    severity: AlertProps["severity"];
}

export interface SnackbarState extends Partial<SnackbarProps> {
    open: boolean;
}

interface SnackbarAlertProps {
    snackbar: SnackbarState;
    setSnackbar: Dispatch<SetStateAction<SnackbarState>>;
    anchorOrigin?: MuiSnackbarProps["anchorOrigin"];
}

const SnackbarAlert: FC<SnackbarAlertProps> = ({
    snackbar,
    setSnackbar,
    anchorOrigin,
}) => {
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") return;

        setSnackbar((prev) => ({ ...prev, open: false }));
    };

    return (
        <Snackbar
            open={snackbar.open}
            onClose={handleClose}
            onClick={handleClose}
            autoHideDuration={8 * 1000}
            anchorOrigin={anchorOrigin ?? { vertical: "top", horizontal: "right" }}
            TransitionComponent={Grow}
            sx={{ cursor: "pointer" }}
        >
            <Alert
                variant="filled"
                severity={snackbar.severity}
                sx={{ width: "100%" }}
            >
                {snackbar.message}
            </Alert>
        </Snackbar>
    );
};

export default SnackbarAlert;
