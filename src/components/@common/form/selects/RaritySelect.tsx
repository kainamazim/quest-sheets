import { type FC } from "react";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { type Item } from "@prisma/client";

import { RarityTag } from "../../tags";

const labelId = "item-rarity-label";

const label = "Rarity";

const rarityOptions: Record<Item["rarity"], string> = {
    common: "Common",
    uncommon: "Uncommon",
    rare: "Rare",
    legendary: "Legendary",
    supreme: "Supreme",
};

interface RaritySelectProps {
    rarity: Item["rarity"];
    handleChange: (newRarity: Item["rarity"]) => void;
}

const RaritySelect: FC<RaritySelectProps> = ({
    rarity,
    handleChange: propHandleChange,
}) => {
    const handleChange = (event: SelectChangeEvent) => {
        const newRarity = event.target.value as Item["rarity"];
        propHandleChange(newRarity);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id={labelId}>{label}</InputLabel>
                <Select
                    labelId={labelId}
                    id="item-rarity-select"
                    value={rarity}
                    label={label}
                    onChange={handleChange}
                >
                    {Object.entries(rarityOptions).map(([value, label]) => (
                        <MenuItem key={value} value={value}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    width: "100%",
                                }}
                            >
                                {label}
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        marginRight: 2,
                                    }}
                                >
                                    <RarityTag
                                        rarity={value as Item["rarity"]}
                                        active={rarity === value}
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

export default RaritySelect;
