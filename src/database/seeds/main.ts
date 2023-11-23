import prisma from "../prisma";
import abilities from "./abilities";
import learningPaths from "./learningPaths";
import roles from "./roles";
import treasure from "./treasure";

async function main(): Promise<void> {
    const rolesData = await prisma.role.createMany({
        data: roles,
    });

    const learningPathsData = await prisma.learningPath.createMany({
        data: learningPaths,
    });

    const abilitiesData = await prisma.ability.createMany({
        data: abilities,
    });

    const treasureData = await prisma.item.createMany({
        data: treasure,
    });

    console.info({
        rolesData,
        learningPathsData,
        abilitiesData,
        treasureData,
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

export default main;
