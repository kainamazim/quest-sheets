import { type FC, useEffect, useState } from "react";

import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { Box, Button, TextField } from "@mui/material";

import useIsMobile from "@/hooks/useIsMobile";

interface SearchFieldProps {
    label: string;
    stateValue?: string;
    handleSearch: (newSearch: string) => void;
}

const SearchField: FC<SearchFieldProps> = ({
    label,
    stateValue = "",
    handleSearch,
}) => {
    const isMobile = useIsMobile();

    const [value, setValue] = useState(stateValue);

    useEffect(() => {
        setValue(stateValue);
    }, [stateValue]);

    return (
        <Box
            sx={{
                display: "flex",
                flexGrow: 1,
                gap: 1,
                ...(isMobile && {
                    flexWrap: "wrap",
                    "& > *": {
                        flexGrow: 1,
                    },
                }),
            }}
        >
            <TextField
                label={label}
                value={value}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setValue(event.target.value);
                }}
                sx={{
                    flexGrow: 1,
                }}
            />
            <Button
                endIcon={<SearchSharpIcon fontSize="small" />}
                sx={{ flexBasis: "200px" }}
                onClick={() => {
                    handleSearch(value);
                }}
            >
                {"Search"}
            </Button>
        </Box>
    );
};

export default SearchField;
