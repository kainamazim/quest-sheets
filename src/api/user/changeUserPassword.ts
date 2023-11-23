import type { User } from "@prisma/client";

import api from "@/api";

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
