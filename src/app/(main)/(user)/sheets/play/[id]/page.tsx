import { type NextPage } from "next";

import PlaySheetPage from "@/content/(user)/sheets/PlaySheetPage";

interface PlaySheetProps {
    params: { id: string };
}

const PlaySheet: NextPage<PlaySheetProps> = async ({ params: { id } }) => {
    return <PlaySheetPage sheetId={Number(id)} />;
};

export default PlaySheet;
