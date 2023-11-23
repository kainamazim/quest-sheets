import React, { type FC } from "react";

import { type Ability } from "@prisma/client";

import ViewCard, { type ViewCardProps } from "@/components/@common/display/ViewCard";

import { AdventurePointTag, RollTheDieTag } from "../../@common/tags";

export interface AbilityCardProps
    extends Pick<ViewCardProps, "checked" | "handleChange"> {
    ability: Ability;
}

const AbilityCard: FC<AbilityCardProps> = ({ ability, ...cardProps }) => {
    return (
        <ViewCard
            title={ability.title}
            description={ability.description}
            tags={
                <>
                    <RollTheDieTag checked={Boolean(ability.rollTheDie)} />
                    <AdventurePointTag
                        adventurePoints={ability.activationCost}
                        title={"Activation Cost"}
                    />
                </>
            }
            {...cardProps}
        />
    );
};

export default AbilityCard;
