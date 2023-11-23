import { type FC } from "react";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";

import { type ItemFilterState } from "./ItemFilter";

const labelId = "item-sort-label";

const label = "Sort By";

const sortByOptions: Record<ItemFilterState["sortBy"], string> = {
    createdAt: "Creation Date",
    title: "Title",
    rarity: "Rarity",
};

interface ItemSortSelectProps {
    sort: ItemFilterState["sortBy"];
    handleChange: (newRarity: ItemFilterState["sortBy"]) => void;
}

const ItemSortSelect: FC<ItemSortSelectProps> = ({
    sort,
    handleChange: propHandleChange,
}) => {
    const handleChange = (event: SelectChangeEvent) => {
        const newRarity = event.target.value as ItemFilterState["sortBy"];
        propHandleChange(newRarity);
    };

    return (
        <Box sx={{ minWidth: 164 }}>
            <FormControl fullWidth>
                <InputLabel id={labelId}>{label}</InputLabel>
                <Select
                    labelId={labelId}
                    id="item-sort-select"
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

export default ItemSortSelect;
