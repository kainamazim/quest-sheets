import type { Item } from "@prisma/client";
import { type NextRequest, NextResponse } from "next/server";

import getItemById from "@/server/services/item/getItemById";

const POST = async (request: NextRequest) => {
    const { itemId } = (await request.json()) as { itemId: Item["id"] };

    const item = await getItemById(itemId);

    return NextResponse.json(item, { status: 200 });
};

export { POST };
