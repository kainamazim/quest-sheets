import { type FC, useContext } from "react";

import { DeleteSharp, EditSharp } from "@mui/icons-material";
import PlayArrowSharp from "@mui/icons-material/PlayArrowSharp";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import deleteSheet from "@/api/sheets/deleteSheet";
import { MainLayoutContext } from "@/providers/MainLayoutProvider";
import { type FullSheet } from "@/types";

import { ActionCard } from "../@common/display";
import RoleTag, { roleTagClass } from "../@common/tags/RoleTag";
import SheetTags from "./SheetTags";

export interface SheetActionCardProps {
    sheet: FullSheet;
    callback: () => void;
}

const SheetActionCard: FC<SheetActionCardProps> = ({ sheet, callback }) => {
    const router = useRouter();

    const { setDialog, setSnackbar } = useContext(MainLayoutContext);

    const { mutate: deleteSheetMutation } = useMutation<
        unknown,
        unknown,
        FullSheet["id"]
    >({
        mutationFn: async (sheetId) => await deleteSheet(sheetId),
        onSuccess: async () => {
            setSnackbar({
                severity: "success",
                message: "Sheet deleted successfully!",
            });
            callback();
        },
        onError: () => {
            setSnackbar({
                severity: "error",
                message: "Error while trying to delete sheet!",
            });
        },
    });

    return (
        <ActionCard
            title={sheet.name}
            badge={<RoleTag role={sheet.role.title} />}
            sx={(theme) => ({
                [`&:hover .${roleTagClass}`]: {
                    color: theme.palette.text.primary,
                    borderColor: theme.palette.text.primary,
                },
            })}
            tags={<SheetTags sheet={sheet} />}
            actions={[
                {
                    title: "Play",
                    Icon: PlayArrowSharp,
                    handleClick: () => {
                        router.push(`/sheets/play/${sheet.id}`);
                    },
                },
                {
                    title: "Update",
                    Icon: EditSharp,
                    handleClick: () => {
                        router.push(`/sheets/update/${sheet.id}`);
                    },
                },
                {
                    title: "Delete",
                    Icon: DeleteSharp,
                    handleClick: () => {
                        setDialog({
                            title: "are you sure?",
                            description: "This sheet data will be forever lost.",
                            handleConfirm: () => {
                                deleteSheetMutation(sheet.id);
                            },
                        });
                    },
                },
            ]}
        />
    );
};

export default SheetActionCard;
