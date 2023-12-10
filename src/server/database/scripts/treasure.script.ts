import { type Item, type ItemRarity } from "@prisma/client";
import fs from "fs/promises";

import { type FormItem } from "@/components/item/ItemForm";

const getDamage = (text: string): Item["damage"] => {
    let damage: Item["damage"] = null;

    const damageWall = text.lastIndexOf("<");
    const damageLastWall = text.lastIndexOf(">");

    const hasDamage = damageWall > -1 && damageLastWall > -1;

    if (hasDamage) damage = Number(text.slice(damageWall + 1, damageLastWall));

    return damage;
};

const getActivationCost = (text: string): Item["activationCost"] => {
    let activationCost: Item["activationCost"] = null;

    const apWall = text.lastIndexOf("[");
    const apLastWall = text.lastIndexOf("AP]");

    const hasAp = apWall > -1 && apLastWall > -1;

    if (hasAp) activationCost = Number(text.slice(apWall + 1, apLastWall));

    return activationCost;
};

const getTitle = (text: string): Item["title"] => {
    const titleWall = 0;
    const titleLastWall = text.indexOf(" (D");

    const title: Item["title"] = text.slice(titleWall, titleLastWall);

    return title.toLowerCase();
};

const getDescription = (text: string): string => {
    const descriptionWall = text.indexOf("): ");

    const damageWall = text.lastIndexOf("<");
    const apWall = text.lastIndexOf("[");

    const descriptionLastWall = [text.length, damageWall, apWall].reduce(
        (minorValue, currentValue) =>
            currentValue >= 0 && currentValue < minorValue
                ? currentValue
                : minorValue,
        text.length,
    );

    const description: Item["description"] = text.slice(
        descriptionWall + 3,
        descriptionLastWall,
    );

    return description;
};

let currentId = 1;

const getTextToObject = (text: string, rarity: ItemRarity) => {
    const cleanText = text.replaceAll("\n", "");

    const item: FormItem = {
        id: currentId,
        authorId: null,
        rarity,
        rollTheDie: false,
        title: getTitle(cleanText).trim(),
        description: getDescription(cleanText).trim(),
        damage: getDamage(cleanText),
        activationCost: getActivationCost(cleanText),
    };

    return item;
};

const getRarityItems = async (rarity: ItemRarity) => {
    const data = await fs.readFile(
        `src/database/scripts/treasure_content/${rarity}.txt`,
        "utf8",
    );
    const itemsText = data.split("\r\n");

    const items = itemsText.map((text) => {
        const item = getTextToObject(text, rarity);

        currentId++;

        return JSON.stringify(item);
    });

    const importContent = `import { Item } from "@prisma/client";\n\n`;

    const content = `export const ${rarity}Items: Array<Item> = [${JSON.stringify(
        items,
    )}];`;

    const exportContent = `\n`;

    await fs.writeFile(
        `src/database/seeds/treasure/${rarity}.ts`,
        importContent + content + exportContent,
        "utf8",
    );
};

const rarities: ItemRarity[] = ["uncommon", "rare", "legendary", "supreme"];

const main = async () => {
    for (const rarity of rarities) {
        await getRarityItems(rarity);
    }
};

void main();
