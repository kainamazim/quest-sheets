import React, { type FC, type PropsWithChildren } from "react";

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import {
    AccordionDetails,
    AccordionSummary,
    Badge,
    type BadgeProps,
    Accordion as MuiAccordion,
    Typography,
    accordionDetailsClasses,
} from "@mui/material";

export interface SectionAccordionProps extends PropsWithChildren {
    title: string;
    badgeContent?: BadgeProps["badgeContent"];
}

const SectionAccordion: FC<SectionAccordionProps> = ({
    children,
    title,
    badgeContent,
}) => {
    const [expanded, setExpanded] = React.useState<boolean>(false);

    const handleChange = (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded);
    };

    return (
        <MuiAccordion
            expanded={expanded}
            onChange={handleChange}
            disableGutters
            elevation={0}
            square
            sx={(theme) => ({
                border: `1px solid `,
                borderColor: theme.palette.divider,

                "&:hover": {
                    borderColor: theme.palette.text.primary,

                    ["." + accordionDetailsClasses.root]: {
                        borderColor: theme.palette.text.primary,
                    },
                },
            })}
        >
            <AccordionSummary
                expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
                sx={(theme) => ({
                    flexDirection: "row-reverse",
                    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                        transform: "rotate(90deg)",
                    },
                    "& .MuiAccordionSummary-content": {
                        marginLeft: theme.spacing(1),
                    },
                })}
            >
                <Badge
                    badgeContent={badgeContent}
                    color="primary"
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                    sx={{
                        "& .MuiBadge-badge": {
                            top: 0,
                            bottom: 0,
                            right: -20,
                        },
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={() => ({
                            textTransform: "capitalize",
                        })}
                    >
                        {title}
                    </Typography>
                </Badge>
            </AccordionSummary>
            <AccordionDetails
                sx={(theme) => ({
                    borderTop: "1px solid ",
                    borderColor: theme.palette.divider,
                    padding: theme.spacing(2),
                })}
            >
                {children}
            </AccordionDetails>
        </MuiAccordion>
    );
};

export default SectionAccordion;
