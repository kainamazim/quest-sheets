import type { Item } from "@prisma/client";
import { type NextPage } from "next";
import { useRouter } from "next/navigation";

import UpdateItemPage from "@/content/(user)/items/UpdateItemPage";
import getItemById from "@/services/item/getItemById";

interface UpdateItemProps {
    params: { id: string };
}

const UpdateItem: NextPage<UpdateItemProps> = async ({ params: { id } }) => {
    const item = await getItemById(Number(id));

    const router = useRouter();

    if (item == null) {
        router.push("/login");
    }

    return <UpdateItemPage item={item as Item} />;
};

export default UpdateItem;
