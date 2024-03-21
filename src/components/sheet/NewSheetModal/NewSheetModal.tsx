"use client";

import { type FC, useState } from "react";

import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import {
    Button,
    Dialog,
    Divider,
    IconButton,
    Stack,
    Tooltip,
    Typography,
} from "@mui/material";

import { headingText } from "@/styles/font";
import { type FullRole } from "@/types";

import NewSheetForm from "./NewModalForm";

export interface NewSheetModalProps {
    roles: FullRole[];
}

const NewSheetModal: FC<NewSheetModalProps> = ({ roles }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button onClick={handleOpen} fullWidth>
                {"Create My First Character"}
            </Button>
            <Dialog open={open} fullWidth maxWidth={"xl"}>
                <Stack
                    paddingInline={3}
                    paddingBlock={2}
                    gap={3}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            fontFamily: headingText.style.fontFamily,
                            fontWeight: 900,
                            letterSpacing: 0.4,
                            textTransform: "uppercase",
                        }}
                    >
                        {"character creation guide"}
                    </Typography>

                    <Tooltip title={"Close"}>
                        <IconButton onClick={handleClose}>
                            <CloseSharpIcon />
                        </IconButton>
                    </Tooltip>
                </Stack>

                <Divider
                    sx={(theme) => ({
                        borderBottomWidth: 1,

                        borderColor: theme.palette.text.primary,
                    })}
                />

                <NewSheetForm roles={roles} />
            </Dialog>
        </>
    );
};

export default NewSheetModal;
