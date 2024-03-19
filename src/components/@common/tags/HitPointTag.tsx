import { type FC } from "react";

import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import { Badge, Tooltip } from "@mui/material";

import { pullquoteText } from "@/styles/font";
import { type CharacterSheet } from "@/types/data";

interface HitPointTagProps {
    hitPoints: CharacterSheet["currentHitPoints"];
}

const HitPointTag: FC<HitPointTagProps> = ({ hitPoints }) => {
    return (
        <Tooltip title={"Hit Points"}>
            <div
                style={{
                    display: "flex",
                }}
            >
                <Badge
                    badgeContent={String(hitPoints)}
                    color={"error"}
                    sx={(theme) => ({
                        "& .MuiBadge-badge": {
                            lineHeight: 1,
                            top: 12,
                            right: 13,
                            background: "none",
                            fontFamily: pullquoteText.style.fontFamily,
                        },
                    })}
                >
                    <FavoriteSharpIcon
                        sx={(theme) => ({
                            transition: theme.transitions.create(
                                ["color", "opacity"],
                                {
                                    easing: theme.transitions.easing.sharp,
                                    duration:
                                        theme.transitions.duration.leavingScreen,
                                },
                            ),
                            opacity: (hitPoints + 5) / 10,
                        })}
                        color="error"
                    />
                </Badge>
            </div>
        </Tooltip>
    );
};

export default HitPointTag;
