import { type FC } from "react";

import { FormHelperText } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";

import { type Role } from "@/types/data";

import { RoleTag } from "../../tags";

const labelId = "sheet-role-label";

const label = "role";

interface RoleSelectProps {
    defaultValue: Role["id"] | string;
    onChange: (newRarity: Role["id"]) => void;
    roles: Role[];
    error: boolean;
}

const RoleSelect: FC<RoleSelectProps> = ({
    defaultValue: selectedRole,
    onChange,
    roles,
    error,
}) => {
    const handleChange = (event: SelectChangeEvent) => {
        const newRole = Number(event.target.value);

        if (newRole !== 0) {
            onChange(newRole);
        }
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth error={error}>
                <InputLabel id={labelId}>{label}</InputLabel>
                <Select
                    labelId={labelId}
                    id="item-rarity"
                    value={String(selectedRole) ?? ""}
                    label={label}
                    onChange={handleChange}
                    sx={{ textTransform: "capitalize" }}
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
                                        active={selectedRole === role.id}
                                    />
                                </Box>
                            </Box>
                        </MenuItem>
                    ))}
                </Select>
                <FormHelperText>{"Required"}</FormHelperText>
            </FormControl>
        </Box>
    );
};

export default RoleSelect;
