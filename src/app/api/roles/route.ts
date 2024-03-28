import { NextResponse } from "next/server";

import getManyRoles from "@/server/services/role/getManyRoles";

const GET = async () => {
    const roles = await getManyRoles();

    return NextResponse.json(roles, { status: 200 });
};

export { GET };
