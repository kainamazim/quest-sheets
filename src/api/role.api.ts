import api from "@/api";
import type { FullRole } from "@/types/data";

export const getRole = async (roleTitle: FullRole["title"]) => {
    const { data: role = null } = await api.get<FullRole>(`/book/roles/${roleTitle}`);

    return role;
};

export const getManyRoles = async () => {
    const { data: roles = [] } = await api.get<FullRole[]>("/book/roles");

    return roles;
};
