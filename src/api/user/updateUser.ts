import api from "@/api";
import type { User } from "@/types/data";

const updateUser = async (user: Partial<User>): Promise<User> => {
    const { data } = await api.post<User>("/api/user/update", { user });

    return data;
};

export default updateUser;
