import { type NextPage } from "next";

import UpdateItemPage from "@/content/(user)/items/UpdateItemPage";

interface UpdateItemProps {
    params: { id: string };
}

const UpdateItem: NextPage<UpdateItemProps> = async ({ params: { id } }) => {
    return <UpdateItemPage itemId={Number(id)} />;
};

export default UpdateItem;
