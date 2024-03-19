import api from "@/api";
import type { User } from "@/types/data";

export interface ChangeUserPasswordInput {
    userId: User["id"];
    currentPassword: User["password"];
    newPassword: User["password"];
}

const changeUserPassword = async (input: ChangeUserPasswordInput): Promise<User> => {
    const { data } = await api.post<User>("/api/user/change-password", { ...input });

    return data;
};

export default changeUserPassword;
