import React, { type FC } from "react";

import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";

export interface AlertDialogProps {
    title?: string;
    description?: string;
    open?: boolean;
    handleClose?: () => void;
    handleConfirm?: () => void;
}

export interface AlertDialogState extends Omit<AlertDialogProps, "handleClose"> {}

export interface SetAlertDialogProps
    extends Required<
        Pick<AlertDialogProps, "title" | "description" | "handleConfirm">
    > {}

const AlertDialog: FC<AlertDialogProps> = ({
    title = "",
    description = "",
    open = false,
    handleClose = () => {},
    handleConfirm = () => {},
}) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            maxWidth="sm"
        >
            <DialogTitle sx={{ padding: 2 }} id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent sx={{ padding: 0, paddingInline: 2 }}>
                <DialogContentText id="alert-dialog-description">
                    {description}
                </DialogContentText>
            </DialogContent>
            <DialogActions
                sx={{
                    display: "flex",
                    padding: 2,

                    alignItems: "center",
                    flexWrap: "wrap",
                    "& > *": {
                        flexBasis: "100px",
                        flexGrow: 1,
                    },
                }}
            >
                <Button
                    onClick={handleClose}
                    color="inherit"
                    endIcon={<CloseSharpIcon fontSize="small" />}
                >
                    {"Close"}
                </Button>
                <Button
                    onClick={() => {
                        handleClose();
                        handleConfirm();
                    }}
                    endIcon={<CheckSharpIcon fontSize="small" />}
                    autoFocus
                >
                    {"Confirm"}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AlertDialog;
