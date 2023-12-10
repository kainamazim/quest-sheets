import { type NextRequest, NextResponse } from "next/server";

import { type ItemFilterState } from "@/components/item/ItemFilter";
import getItemsByFilter from "@/server/services/item/getItemsByFilter";

const POST = async (request: NextRequest) => {
    const { filter } = (await request.json()) as { filter: ItemFilterState };

    const items = await getItemsByFilter(filter);

    return NextResponse.json(items, { status: 200 });
};

export { POST };
