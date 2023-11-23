import { type FC } from "react";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { type CharacterSheet, type Role } from "@prisma/client";

import { RoleTag } from "@/components/@common/tags";

const labelId = "sheet-role-label";

const label = "Role";

interface RoleMultiSelectProps {
    value: Array<CharacterSheet["roleId"]>;
    handleChange: (newRoles: Array<CharacterSheet["roleId"]>) => void;
    roles: Role[];
}

const RoleMultiSelect: FC<RoleMultiSelectProps> = ({
    value: selectedRoleIds,
    handleChange: propHandleChange,
    roles,
}) => {
    const handleChange = (event: SelectChangeEvent) => {
        const newRoles = event.target.value as unknown as Array<
            CharacterSheet["roleId"]
        >;
        propHandleChange(newRoles);
    };

    return (
        <Box sx={{ minWidth: 424 }}>
            <FormControl fullWidth size="small">
                <InputLabel id={labelId}>{label}</InputLabel>
                <Select
                    labelId={labelId}
                    id="sheet-roleId-select-multi"
                    multiple
                    value={selectedRoleIds as unknown as string}
                    label={label}
                    onChange={handleChange}
                    renderValue={(selected) => {
                        const selectedRoles = roles.filter((role) =>
                            selectedRoleIds.includes(role.id),
                        );

                        return (
                            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                                {selectedRoles.map((role, index) => (
                                    <RoleTag key={index} role={role.title} active />
                                ))}
                            </Box>
                        );
                    }}
                >
                    {roles.map((role) => (
                        <MenuItem key={role.id} value={role.id}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    width: "100%",
                                    textTransform: "capitalize",
                                }}
                            >
                                {role.title}
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        marginRight: 2,
                                    }}
                                >
                                    <RoleTag
                                        role={role.title}
                                        active={selectedRoleIds.includes(role.id)}
                                    />
                                </Box>
                            </Box>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default RoleMultiSelect;
