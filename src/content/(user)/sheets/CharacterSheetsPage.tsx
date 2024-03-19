"use client";

import { type FC } from "react";

import AddSharpIcon from "@mui/icons-material/AddSharp";
import { Button, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

import { PageTitle } from "@/components/@common/display";
import SheetList from "@/components/sheet/SheetList";
import type { FullSheet, Role } from "@/types/data";

interface CharacterSheetsPageProps {
    sheets: FullSheet[];
    roles: Role[];
}

const CharacterSheetsPage: FC<CharacterSheetsPageProps> = ({
    sheets: initialSheets,
    roles,
}) => {
    const router = useRouter();

    return (
        <Stack>
            <PageTitle title="Character Sheets" />
            <Stack gap={4}>
                <SheetList initialSheets={initialSheets} roles={roles} />
                <Button
                    color="inherit"
                    endIcon={<AddSharpIcon />}
                    onClick={() => {
                        router.push("/sheets/new");
                    }}
                >
                    {"New Sheet"}
                </Button>
            </Stack>
        </Stack>
    );
};

export default CharacterSheetsPage;
