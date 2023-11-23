import {
    type Dispatch,
    type FC,
    type PropsWithChildren,
    type SetStateAction,
    createContext,
    useState,
} from "react";

import {
    AlertDialog,
    type AlertDialogState,
    type SetAlertDialogProps,
    SnackbarAlert,
    type SnackbarProps,
    type SnackbarState,
} from "@/components/@common/display";

interface MainLayoutContextProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
    handleCloseSidebar: () => void;
    toggleSidebarOpen: () => void;
    setSnackbar: (props: SnackbarProps) => void;
    setDialog: (props: SetAlertDialogProps) => void;
}

export const MainLayoutContext = createContext<MainLayoutContextProps>({
    isSidebarOpen: false,
    setIsSidebarOpen: () => {},
    handleCloseSidebar: () => {},
    toggleSidebarOpen: () => {},
    setSnackbar: () => {},
    setDialog: () => {},
});

const MainLayoutProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [snackbar, setSnackbarState] = useState<SnackbarState>({ open: false });
    const [dialog, setDialogState] = useState<AlertDialogState>({ open: false });

    const handleCloseSidebar = () => {
        setIsSidebarOpen(false);
    };

    const toggleSidebarOpen = (): void => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const setSnackbar = (snackbarProps: SnackbarProps) => {
        setSnackbarState({
            open: true,
            ...snackbarProps,
        });
    };

    const setDialog = (dialogProps: SetAlertDialogProps) => {
        setDialogState({
            open: true,
            ...dialogProps,
        });
    };

    const props: MainLayoutContextProps = {
        isSidebarOpen,
        setIsSidebarOpen,
        handleCloseSidebar,
        toggleSidebarOpen,
        setSnackbar,
        setDialog,
    };

    return (
        <MainLayoutContext.Provider value={props}>
            {children}
            <SnackbarAlert snackbar={snackbar} setSnackbar={setSnackbarState} />
            <AlertDialog
                {...dialog}
                handleClose={() => {
                    setDialogState((prev) => ({ ...prev, open: false }));
                }}
            />
        </MainLayoutContext.Provider>
    );
};

export default MainLayoutProvider;
