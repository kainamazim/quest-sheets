import React, { type FC, type ReactNode } from "react";

import { type SvgIconComponent } from "@mui/icons-material";
import {
    Box,
    Button,
    type CardProps,
    Divider,
    Tooltip,
    Typography,
} from "@mui/material";

import BaseCard from "./BaseCard";

interface Action {
    title: string;
    Icon: SvgIconComponent;
    handleClick: () => void;
}

export interface ActionCardProps extends CardProps {
    title: string;
    description?: string;
    tags?: ReactNode;
    actions: Action[];
    badge?: ReactNode;
}

const ActionCard: FC<ActionCardProps> = ({
    actions,
    title,
    description,
    tags,
    badge,
    sx = () => {},
}) => {
    return (
        <BaseCard
            sx={(theme) => ({
                // You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
                ...(Array.isArray(sx) ? sx[0] : sx)(theme),
            })}
            variant="outlined"
        >
            <Box
                sx={{
                    mb: 2,
                    display: "flex",
                    gap: 1,
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                }}
            >
                <Typography
                    variant="h6"
                    component="div"
                    sx={() => ({
                        fontWeight: 500,
                        lineHeight: 1,
                        fontSize: "1.3rem",
                    })}
                >
                    {title}
                </Typography>
                {badge}
            </Box>

            {description && (
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        fontWeight: 500,
                        mb: 2,
                    }}
                >
                    {description}
                </Typography>
            )}
            <Box
                sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    flexWrap: "wrap",
                }}
            >
                {tags}
            </Box>
            <Divider sx={{ marginBlock: 2 }} />
            <Box
                sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    flexWrap: "wrap",
                    "& > *": {
                        flexBasis: "80px",
                        flexGrow: 1,
                    },
                }}
            >
                {actions.map(({ title, handleClick, Icon }) => (
                    <Tooltip key={title} title={title}>
                        <Button color="inherit" onClick={handleClick} size="small">
                            <Icon fontSize="small" />
                        </Button>
                    </Tooltip>
                ))}
            </Box>
        </BaseCard>
    );
};

export default ActionCard;
