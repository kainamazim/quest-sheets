import type { FullSheet } from "@/types/data";

export interface NewSheet
    extends Omit<
        FullSheet,
        "id" | "role" | "roleId" | "createdAt" | "updatedAt" | "authorId"
    > {
    roleId?: FullSheet["roleId"];
}

export type FormSheet = FullSheet | NewSheet;

export type SetFormSheetField = <T extends keyof FullSheet>(
    field: T,
    value: FullSheet[T],
) => void;

export type FormSheetErrors = Array<keyof NewSheet>;
