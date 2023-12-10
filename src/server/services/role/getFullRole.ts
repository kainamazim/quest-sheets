import { type Role } from "@prisma/client";

import prisma from "@/server/database/prisma";
import { type FullRole } from "@/types";

const getFullRole = async (roleTitle: Role["title"]): Promise<FullRole | null> => {
    const role = await prisma.role.findFirst({
        where: { title: roleTitle },
        include: {
            learningPaths: {
                include: {
                    abilities: true,
                },
            },
        },
    });

    return role;
};

export default getFullRole;
