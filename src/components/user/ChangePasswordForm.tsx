import { type FC, useContext, useState } from "react";

import CheckSharp from "@mui/icons-material/CheckSharp";
import { Stack, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { type Session } from "next-auth";
import { ZodError } from "zod";

import changeUserPassword, {
    type ChangeUserPasswordInput,
} from "@/api/user/changeUserPassword";
import { MainLayoutContext } from "@/providers/MainLayoutProvider";
import { changePasswordSchema } from "@/util/schema";

import { PasswordField, SubmitButton } from "../@common/form";

type Form = Record<"currentPassword" | "newPassword" | "confirmNewPassword", string>;

type FormKeys = keyof Form;

type FormError = Partial<Record<FormKeys, boolean>>;

interface ChangePasswordFormProps {
    user: Session["user"];
}

const defaultForm = {
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
};

const ChangePasswordForm: FC<ChangePasswordFormProps> = ({ user }) => {
    const { setSnackbar } = useContext(MainLayoutContext);

    const [form, setForm] = useState<Form>(defaultForm);

    const [formError, setFormError] = useState<FormError>({});

    const { mutate: changeUserPasswordMutation, isPending } = useMutation<
        unknown,
        unknown,
        ChangeUserPasswordInput
    >({
        mutationFn: async (input) => await changeUserPassword(input),
        onSuccess: async () => {
            setSnackbar({
                severity: "success",
                message: "Password changed successfully!",
            });
            setForm(defaultForm);
        },
        onError: (error) => {
            if (error instanceof AxiosError) {
                const message = error.response?.data.message;

                setSnackbar({
                    severity: "error",
                    message,
                });

                setFormError({
                    currentPassword: message
                        ?.toLowerCase()
                        .includes("current password"),
                    newPassword: message?.toLowerCase().includes("new password"),
                });
            }
        },
    });

    const handleSubmit = async () => {
        try {
            const { currentPassword, newPassword } = changePasswordSchema.parse(form);

            setFormError({});

            changeUserPasswordMutation({
                userId: Number(user.id),
                currentPassword,
                newPassword,
            });
        } catch (error: unknown) {
            if (error instanceof ZodError) {
                const { issues } = error;

                const fields = issues.map(({ path }) => path[0]);

                setFormError({
                    currentPassword: fields.includes("currentPassword"),
                    newPassword: fields.includes("newPassword"),
                    confirmNewPassword: fields.includes("confirmNewPassword"),
                });

                setSnackbar({
                    message: issues[0].message,
                    severity: "error",
                });
            }
        }
    };

    return (
        <Stack gap={2} flexWrap={"wrap"}>
            <Typography variant="h6">{"Change Password"}</Typography>
            <Stack gap={2}>
                <PasswordField
                    fullWidth
                    label="Current Password"
                    value={form.currentPassword}
                    onChange={({ target }) => {
                        setForm((prev) => ({
                            ...prev,
                            currentPassword: target.value,
                        }));
                    }}
                    autoComplete="current-password"
                    error={formError.currentPassword}
                    sx={{
                        mb: 1,
                    }}
                    inputProps={{
                        minLength: 6,
                        maxLength: 32,
                    }}
                />
                <PasswordField
                    fullWidth
                    label="New Password"
                    value={form.newPassword}
                    onChange={({ target }) => {
                        setForm((prev) => ({
                            ...prev,
                            newPassword: target.value,
                        }));
                    }}
                    autoComplete="current-password"
                    error={formError.newPassword}
                    inputProps={{
                        minLength: 6,
                        maxLength: 32,
                    }}
                    helperText="*Must contain at least 6 characters and 1 number"
                />
                <PasswordField
                    fullWidth
                    label="Confirm New Password"
                    value={form.confirmNewPassword}
                    onChange={({ target }) => {
                        setForm((prev) => ({
                            ...prev,
                            confirmNewPassword: target.value,
                        }));
                    }}
                    error={formError.confirmNewPassword}
                    inputProps={{
                        minLength: 6,
                        maxLength: 32,
                    }}
                />
                <SubmitButton
                    loading={isPending}
                    onClick={() => {
                        void handleSubmit();
                    }}
                    endIcon={<CheckSharp fontSize="small" />}
                    sx={{
                        mt: 1,
                    }}
                >
                    {"Confirm Change"}
                </SubmitButton>
            </Stack>
        </Stack>
    );
};

export default ChangePasswordForm;
