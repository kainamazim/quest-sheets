import prisma from "@/server/database/prisma";
import { type FullRole } from "@/types";

const getManyRoles = async (): Promise<FullRole[]> => {
    const roles = await prisma.role.findMany({
        include: {
            learningPaths: {
                include: {
                    abilities: true,
                },
            },
        },
    });

    return roles;
};

export default getManyRoles;
