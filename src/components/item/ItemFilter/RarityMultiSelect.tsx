import { type FC } from "react";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";

import { RarityTag } from "@/components/@common/tags";
import type { Item } from "@/types/data";

const labelId = "item-rarity-label";

const label = "Rarity";

const rarityOptions: Record<Item["rarity"], string> = {
    common: "Common",
    uncommon: "Uncommon",
    rare: "Rare",
    legendary: "Legendary",
    supreme: "Supreme",
};

interface RarityMultiSelectProps {
    value: Array<Item["rarity"]>;
    handleChange: (newRarities: Array<Item["rarity"]>) => void;
}

const RarityMultiSelect: FC<RarityMultiSelectProps> = ({
    value: rarities,
    handleChange: propHandleChange,
}) => {
    const handleChange = (event: SelectChangeEvent) => {
        const newRarities = event.target.value as unknown as Array<Item["rarity"]>;
        propHandleChange(newRarities);
    };

    return (
        <Box sx={{ flexBasis: 364 }}>
            <FormControl fullWidth size="small">
                <InputLabel id={labelId}>{label}</InputLabel>
                <Select
                    labelId={labelId}
                    id="item-rarity-select-multi"
                    multiple
                    value={rarities as unknown as string}
                    label={label}
                    onChange={handleChange}
                    renderValue={(selected) => {
                        const selectedRarities = selected as unknown as Array<
                            Item["rarity"]
                        >;

                        return (
                            <Box sx={{ display: "flex", gap: 1 }}>
                                {selectedRarities.map((value, index) => (
                                    <RarityTag key={index} rarity={value} active />
                                ))}
                            </Box>
                        );
                    }}
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
                                        active={rarities.includes(
                                            value as Item["rarity"],
                                        )}
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

export default RarityMultiSelect;
