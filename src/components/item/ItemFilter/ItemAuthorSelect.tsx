import { type FC } from "react";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";

import { type ItemFilterState } from "./ItemFilter";

const labelId = "item-author-label";

const label = "Author";

const sortByOptions: Record<ItemFilterState["author"], string> = {
    all: "Both",
    user: "User",
    treasure: "Treasure",
};

interface ItemAuthorSelectProps {
    author: ItemFilterState["author"];
    handleChange: (newAuthor: ItemFilterState["author"]) => void;
}

const ItemAuthorSelect: FC<ItemAuthorSelectProps> = ({
    author,
    handleChange: propHandleChange,
}) => {
    const handleChange = (event: SelectChangeEvent) => {
        const newAuthor = event.target.value as ItemFilterState["author"];
        propHandleChange(newAuthor);
    };

    return (
        <Box sx={{ minWidth: 164 }}>
            <FormControl fullWidth>
                <InputLabel id={labelId}>{label}</InputLabel>
                <Select
                    labelId={labelId}
                    id="item-author-select"
                    value={author}
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

export default ItemAuthorSelect;
