import { type FC } from "react";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";

import { type SheetFilterState } from "./SheetFilter";

const labelId = "sheet-sort-label";

const label = "Sort By";

const sortByOptions: Record<SheetFilterState["sortBy"], string> = {
    createdAt: "Creation Date",
    name: "Name",
    roleId: "Role",
};

interface SheetSortSelectProps {
    sort: SheetFilterState["sortBy"];
    handleChange: (newSort: SheetFilterState["sortBy"]) => void;
}

const SheetSortSelect: FC<SheetSortSelectProps> = ({
    sort,
    handleChange: propHandleChange,
}) => {
    const handleChange = (event: SelectChangeEvent) => {
        const newSort = event.target.value as SheetFilterState["sortBy"];
        propHandleChange(newSort);
    };

    return (
        <Box sx={{ minWidth: 164 }}>
            <FormControl fullWidth>
                <InputLabel id={labelId}>{label}</InputLabel>
                <Select
                    labelId={labelId}
                    id="sheet-sort-select"
                    value={sort}
                    label={label}
                    onChange={handleChange}
                >
                    {Object.entries(sortByOptions).map(([value, label]) => (
                        <MenuItem key={value} value={value}>
                            {label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default SheetSortSelect;
