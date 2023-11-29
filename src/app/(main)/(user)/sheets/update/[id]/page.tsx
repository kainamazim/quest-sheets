import { type CharacterSheet } from "@prisma/client";
import { type NextPage } from "next";
import { useRouter } from "next/navigation";

import UpdateSheetPage from "@/content/(user)/sheets/UpdateSheetPage";
import getAvailableItems from "@/services/item/getAvailableItems";
import getManyRoles from "@/services/role/getManyRoles";
import getUserSingleSheet from "@/services/sheet/getUserSingleSheet";
import type { FullSheet } from "@/types";

const fetchData = async (sheetId: CharacterSheet["id"]) => {
    const roles = await getManyRoles();

    const items = await getAvailableItems();

    const sheet = await getUserSingleSheet(sheetId);

    return { roles, items, sheet };
};

interface UpdateSheetProps {
    params: { id: string };
}

const UpdateSheet: NextPage<UpdateSheetProps> = async ({ params: { id } }) => {
    const { roles, items = [], sheet } = await fetchData(Number(id));

    const router = useRouter();

    if (sheet == null) {
        router.push("/login");
    }

    return <UpdateSheetPage sheet={sheet as FullSheet} roles={roles} items={items} />;
};

export default UpdateSheet;
