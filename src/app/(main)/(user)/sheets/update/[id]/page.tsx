import { type NextPage } from "next";

import UpdateSheetPage from "@/content/(user)/sheets/UpdateSheetPage";
import getAvailableItems from "@/services/item/getAvailableItems";
import getManyRoles from "@/services/role/getManyRoles";

const fetchData = async () => {
    const roles = await getManyRoles();

    const items = await getAvailableItems();

    return { roles, items };
};

interface UpdateSheetProps {
    params: { id: string };
}

const UpdateSheet: NextPage<UpdateSheetProps> = async ({ params: { id } }) => {
    const { roles, items = [] } = await fetchData();

    return <UpdateSheetPage sheetId={Number(id)} roles={roles} items={items} />;
};

export default UpdateSheet;
