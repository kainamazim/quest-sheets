import { type NextPage } from "next";
import { notFound } from "next/navigation";

import UpdateItemPage from "@/content/(user)/items/UpdateItemPage";
import getItemById from "@/services/item/getItemById";

interface UpdateItemProps {
    params: { id: string };
}

const UpdateItem: NextPage<UpdateItemProps> = async ({ params: { id } }) => {
    const item = await getItemById(Number(id));

    if (item == null) {
        notFound();
    }

    return <UpdateItemPage item={item} />;
};

export default UpdateItem;
