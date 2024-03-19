import type { NextPage } from "next";
import { notFound } from "next/navigation";

import { getManyRoles, getRole } from "@/api";
import RoleByTitlePage from "@/content/(book)/roles/RoleByTitlePage";
import type { Role } from "@/types/data";

interface RoleByTitleProps {
    params: { title: Role["title"] };
}

const RoleByTitle: NextPage<RoleByTitleProps> = async ({ params: { title } }) => {
    const role = await getRole(title);

    if (role == null) {
        notFound();
    }

    return <RoleByTitlePage role={role} />;
};

export const generateStaticParams = async () => {
    const roles = await getManyRoles();

    return roles.map(({ title }) => ({ title }));
};

export default RoleByTitle;
