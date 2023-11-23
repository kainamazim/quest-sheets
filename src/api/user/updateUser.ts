import type { User } from "@prisma/client";

import api from "@/api";

const updateUser = async (user: Partial<User>): Promise<User> => {
    const { data } = await api.post<User>("/api/user/update", { user });

    return data;
};

export default updateUser;
