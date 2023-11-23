"use client";

import { type FC } from "react";

import Inventory2SharpIcon from "@mui/icons-material/Inventory2Sharp";
import { Tooltip } from "@mui/material";

const TreasureTag: FC = () => {
    return (
        <Tooltip title={"Treasure"}>
            <Inventory2SharpIcon
                sx={(theme) => ({
                    color: "#ffc107",

                    fontSize: 24,
                })}
            />
        </Tooltip>
    );
};

export default TreasureTag;
