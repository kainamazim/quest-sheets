import React, { type FC } from "react";

import { Box } from "@mui/material";
import { type LearningPath } from "@prisma/client";

import {
    SectionAccordion,
    type SectionAccordionProps,
} from "@/components/@common/display";

import AbilityCard, { type AbilityCardProps } from "../ability/AbilityCard";

interface PathAccordionProps extends Partial<SectionAccordionProps> {
    learningPath: LearningPath;
    abilities: AbilityCardProps[];
}

const PathAccordion: FC<PathAccordionProps> = ({
    learningPath,
    abilities,
    ...accordionProps
}) => {
    return (
        <SectionAccordion title={learningPath.title} {...accordionProps}>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                {abilities.map((props) => (
                    <AbilityCard key={props.ability.id} {...props} />
                ))}
            </Box>
        </SectionAccordion>
    );
};

export default PathAccordion;
