import { useContext } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import updateSheet from "@/api/sheets/updateSheet";
import type { NewSheet } from "@/components/sheet/SheetForm/SheetForm";
import { MainLayoutContext } from "@/providers/MainLayoutProvider";
import { type FullSheet } from "@/types";

interface UseUpdateSheetProps {
    successCallback?: () => void;
}

const useUpdateSheet = ({ successCallback }: UseUpdateSheetProps) => {
    const { setSnackbar: setSnackbarExternal } = useContext(MainLayoutContext);

    const queryClient = useQueryClient();

    const result = useMutation<unknown, unknown, FullSheet | NewSheet>({
        mutationFn: async (newSheet) => await updateSheet(newSheet),
        onSuccess: async () => {
            setSnackbarExternal({
                severity: "success",
                message: "Sheet updated successfully!",
            });

            await queryClient.invalidateQueries({ queryKey: ["sheet"] });
            await queryClient.refetchQueries();

            if (successCallback) successCallback();
        },
        onError: () => {
            setSnackbarExternal({
                severity: "error",
                message: "Server error!",
            });
        },
    });

    return result;
};

export default useUpdateSheet;
