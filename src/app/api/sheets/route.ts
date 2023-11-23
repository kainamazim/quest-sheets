import { type NextRequest, NextResponse } from "next/server";

import { type SheetFilterState } from "@/components/sheet/SheetFilter";
import getSheetsByFilter from "@/services/sheet/getSheetsByFilter";

const POST = async (request: NextRequest) => {
    const { filter } = (await request.json()) as { filter: SheetFilterState };

    const sheets = await getSheetsByFilter(filter);

    return NextResponse.json(sheets, { status: 200 });
};

export { POST };
