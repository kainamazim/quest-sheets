import { type NextPage } from "next";

import UpdateItemPage from "@/content/(user)/items/UpdateItemPage";
import getItemById from "@/services/item/getItemById";

interface UpdateItemProps {
    params: { id: string };
}

const UpdateItem: NextPage<UpdateItemProps> = async ({ params: { id } }) => {
    const item = await getItemById(Number(id));

    if (item) {
        return <UpdateItemPage item={item} />;
    }

    return null;
};

export default UpdateItem;
