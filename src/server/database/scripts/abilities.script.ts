import fs from "fs";
// Import puppeteer
import puppeteer, { type ElementHandle } from "puppeteer";

let currentId = 193;
const currentRole = "wizard";

let importContent = `import { Ability } from "@prisma/client";\n\nimport {`;

let exportContent = `\nexport const ${currentRole}Abilities: Array<Ability> = [\n`;

let content = "";

const getElementText = async (
    element: ElementHandle<HTMLDivElement> | null,
    type: "textContent" | "innerText",
) => (element != null ? await (await element.getProperty(type)).jsonValue() : null);

const createPathArray = (pathName: string, content: string) =>
    `const ${currentRole}${pathName}Abilities: Array<Ability> = [${content}];\n`;

void (async () => {
    // Launch the browser
    const browser = await puppeteer.launch();

    // Create a page
    const page = await browser.newPage();

    // Go to your site
    await page.goto(`https://www.adventure.game/roles/${currentRole}/`);

    // Query for an element handle.
    const paths = await page.$$("div.css-1rstmjb > div");

    for (const path of paths) {
        const pathTitle = await getElementText(await path.$("h3"), "textContent");

        let pathArrayContent = "";

        const pathContent = (await (
            await (await path.getProperty("lastChild")).getProperty("innerText")
        ).jsonValue()) as string;

        const abilityTexts = pathContent.split("\n").filter((e) => e);

        const abilityTitles = abilityTexts.filter((_, index) => index % 2 === 0);

        const abilityDescriptions = abilityTexts.filter(
            (_, index) => index % 2 !== 0,
        );

        for (let i = 0; i < abilityTitles.length; i++) {
            const abilityTitle = abilityTitles[i];
            const abilityDescription = abilityDescriptions[i];

            pathArrayContent += `{
        id: ${currentId},
        title: "${abilityTitle}",
        description: "${abilityDescription}",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: ${currentRole}${pathTitle}Path.id,
        order: ${i + 1},
      },`;

            currentId++;
        }

        const pathArray = createPathArray(pathTitle as string, pathArrayContent);
        importContent += `${currentRole}${pathTitle}Path,\n`;
        content += pathArray;
        exportContent += `...${currentRole}${pathTitle}Abilities,\n`;
    }

    importContent += `} from "../learningPaths/${currentRole}LearningPaths";\n\n`;
    exportContent += `];\n`;

    fs.writeFile(
        `src/database/seeds/abilities/${currentRole}Abilities.ts`,
        importContent + content + exportContent,
        "utf8",
        () => {},
    );

    await browser.close();
})();
