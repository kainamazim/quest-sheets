"use client";

import type { FC } from "react";

import { Loading } from "@/components/@common/display";
import BasePaper from "@/components/@common/layouts/BasePaper";
import CreationGuide from "@/components/sheet/CreationGuide";
import useRoles from "@/hooks/data/useRoles";

const CreationGuidePage: FC = () => {
    const { roles, isPending } = useRoles();

    return (
        <BasePaper
            sx={{
                paddingBlock: 0,
                paddingInline: 0,
            }}
        >
            {isPending ? <Loading /> : <CreationGuide roles={roles} />}
        </BasePaper>
    );
};

export default CreationGuidePage;
