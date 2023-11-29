import { type NextRequest, NextResponse } from "next/server";

import getUserSingleSheet from "@/services/sheet/getUserSingleSheet";
import { type FullSheet } from "@/types";

const POST = async (request: NextRequest) => {
    const { sheetId } = (await request.json()) as { sheetId: FullSheet["id"] };

    const sheet = await getUserSingleSheet(sheetId);

    return NextResponse.json(sheet, { status: 200 });
};

export { POST };
