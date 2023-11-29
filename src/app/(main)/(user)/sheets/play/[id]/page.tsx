import { type CharacterSheet } from "@prisma/client";
import { type NextPage } from "next";

import PlaySheetPage from "@/content/(user)/sheets/PlaySheetPage";
import getUserSingleSheet from "@/services/sheet/getUserSingleSheet";

const fetchData = async (sheetId: CharacterSheet["id"]) => {
    const sheet = await getUserSingleSheet(sheetId);

    return { sheet };
};

interface PlaySheetProps {
    params: { id: string };
}

const PlaySheet: NextPage<PlaySheetProps> = async ({ params: { id } }) => {
    const { sheet } = await fetchData(Number(id));

    if (sheet) {
        return <PlaySheetPage sheet={sheet} />;
    }

    return null;
};

export default PlaySheet;
