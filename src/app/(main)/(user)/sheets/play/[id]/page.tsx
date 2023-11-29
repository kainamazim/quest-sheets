import { type CharacterSheet } from "@prisma/client";
import { type NextPage } from "next";
import { useRouter } from "next/navigation";

import PlaySheetPage from "@/content/(user)/sheets/PlaySheetPage";
import getUserSingleSheet from "@/services/sheet/getUserSingleSheet";
import type { FullSheet } from "@/types";

const fetchData = async (sheetId: CharacterSheet["id"]) => {
    const sheet = await getUserSingleSheet(sheetId);

    return { sheet };
};

interface PlaySheetProps {
    params: { id: string };
}

const PlaySheet: NextPage<PlaySheetProps> = async ({ params: { id } }) => {
    const { sheet } = await fetchData(Number(id));

    const router = useRouter();

    if (sheet == null) {
        router.push("/login");
    }

    return <PlaySheetPage sheet={sheet as FullSheet} />;
};

export default PlaySheet;
