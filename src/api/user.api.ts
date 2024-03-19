import api from "@/api";
import type { User } from "@/types/data";

export const loginUser = async (
    credentials: Pick<User, "username" | "password">,
): Promise<User> => {
    const { data: user } = await api.post<User>("/users/actions/login", credentials);

    return user;
};
