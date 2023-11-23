import { type Role } from "@prisma/client";
import { type NextPage } from "next";
import { notFound } from "next/navigation";

import RoleByTitlePage from "@/content/(book)/roles/RoleByTitlePage";
import getFullRole from "@/services/role/getFullRole";

interface RoleByTitleProps {
    params: { title: Role["title"] };
}

const RoleByTitle: NextPage<RoleByTitleProps> = async ({ params: { title } }) => {
    const role = await getFullRole(title);

    if (role == null) {
        notFound();
    }

    return <RoleByTitlePage role={role} />;
};

export default RoleByTitle;
