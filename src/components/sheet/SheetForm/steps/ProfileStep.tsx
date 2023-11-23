import { type FC } from "react";

import { Box, Stack, TextField } from "@mui/material";
import { type Role } from "@prisma/client";

import {
    AdventurePointField,
    HitPointField,
    RoleSelect,
} from "@/components/@common/form";

import {
    type FormSheet,
    type FormSheetErrors,
    type SetFormSheetField,
} from "../SheetForm";

interface ProfileStepProps {
    sheet: FormSheet;
    roles: Role[];
    errors: FormSheetErrors;
    setField: SetFormSheetField;
}

const ProfileStep: FC<ProfileStepProps> = ({ sheet, roles, errors, setField }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
                gap: 3,
                "& > *": {
                    flexGrow: 1,
                    flexBasis: "450px",
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    "& > *": {
                        flexGrow: 1,
                    },
                }}
            >
                <TextField
                    id={"sheet-name"}
                    label={"Name"}
                    defaultValue={sheet.name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const newName = event.target.value;
                        console.log({ newName });
                        setField("name", newName);
                    }}
                    autoFocus
                    error={errors.includes("name")}
                    helperText={"Required"}
                />

                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"flex-end"}
                    flexWrap={"wrap"}
                    rowGap={5}
                    gap={2}
                >
                    <Stack
                        direction={"row"}
                        rowGap={6}
                        columnGap={2}
                        flexWrap={"wrap"}
                    >
                        <HitPointField
                            defaultValue={sheet.currentHitPoints ?? 0}
                            onChange={(newHitPoints) => {
                                console.log({ newHitPoints });
                                setField("currentHitPoints", newHitPoints);
                            }}
                        />

                        <AdventurePointField
                            defaultValue={sheet.currentAdventurePoints ?? 0}
                            onChange={(newAdventurePoints) => {
                                console.log({ newAdventurePoints });
                                setField(
                                    "currentAdventurePoints",
                                    newAdventurePoints,
                                );
                            }}
                        />
                    </Stack>
                </Stack>

                <RoleSelect
                    defaultValue={
                        typeof sheet.roleId !== "undefined" && sheet.roleId > 0
                            ? sheet.roleId
                            : ""
                    }
                    onChange={(newRole) => {
                        setField("roleId", newRole);
                        setField("abilities", []);
                    }}
                    roles={roles}
                    error={errors.includes("roleId")}
                />
            </Box>
            <TextField
                id={"item-description"}
                label={"Description"}
                multiline
                rows={6}
                defaultValue={sheet.description}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const newDescription = event.target.value;
                    setField("description", newDescription);
                }}
                error={errors.includes("description")}
                helperText={"Required"}
            />
        </Box>
    );
};

export default ProfileStep;
