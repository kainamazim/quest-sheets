import { type FC, type ReactNode, isValidElement } from "react";

import { Box, List, Typography } from "@mui/material";

import SidebarItem, { type SidebarItemProps } from "./SidebarItem";

type SidebarListItem = SidebarItemProps | ReactNode;

interface SidebarItemListProps {
    title: string;
    items: SidebarListItem[];
}

const SidebarItemList: FC<SidebarItemListProps> = ({ title, items }) => {
    return (
        <List
            subheader={
                <Box
                    sx={{
                        padding: 1,
                    }}
                >
                    <Typography
                        variant="button"
                        sx={{
                            padding: 1,
                            textTransform: "lowercase",
                            fontWeight: 500,
                            fontSize: "1rem",
                        }}
                    >
                        {title}
                    </Typography>
                </Box>
            }
        >
            {items.map((item, index) =>
                isValidElement(item) ? (
                    item
                ) : (
                    <SidebarItem key={index} {...(item as SidebarItemProps)} />
                ),
            )}
        </List>
    );
};

export default SidebarItemList;
