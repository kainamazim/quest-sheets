import type { Role } from "@prisma/client";

import api from "@/api";

const getRoles = async (): Promise<Role[]> => {
    const { data } = await api.get<Role[]>("/api/roles");

    return data;
};

export default getRoles;
