import { type FC } from "react";

import Inventory2SharpIcon from "@mui/icons-material/Inventory2Sharp";
import { Stack, Tooltip } from "@mui/material";

interface SheetItemsTagProps {
    itemsLength: number;
}

const SheetItemsTag: FC<SheetItemsTagProps> = ({ itemsLength }) => {
    return (
        <Stack direction={"row"} alignItems={"center"}>
            <Tooltip title={"Inventory"}>
                <Inventory2SharpIcon
                    fontSize="small"
                    sx={{
                        opacity: (itemsLength + 5) / 10,
                    }}
                />
            </Tooltip>

            {" " + itemsLength + "/10"}
        </Stack>
    );
};

export default SheetItemsTag;
