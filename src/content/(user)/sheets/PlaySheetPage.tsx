"use client";

import { type FC, useContext, useState } from "react";

import BackHandSharpIcon from "@mui/icons-material/BackHandSharp";
import BedtimeOffSharpIcon from "@mui/icons-material/BedtimeOffSharp";
import CasinoSharpIcon from "@mui/icons-material/CasinoSharp";
import CheckSharp from "@mui/icons-material/CheckSharp";
import NightsStaySharpIcon from "@mui/icons-material/NightsStaySharp";
import ReplaySharpIcon from "@mui/icons-material/ReplaySharp";
import { Button, Stack, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";

import updateSheet from "@/api/sheets/updateSheet";
import {
    ActionCard,
    PageSectionTitle,
    PageTitle,
} from "@/components/@common/display";
import { AdventurePointField, HitPointField } from "@/components/@common/form";
import {
    AdventurePointTag,
    RarityTag,
    RollTheDieTag,
} from "@/components/@common/tags";
import { rarityTagClass } from "@/components/@common/tags/RarityTag";
import ItemTags from "@/components/item/ItemTags";
import { MainLayoutContext } from "@/providers/MainLayoutProvider";
import { type FullSheet } from "@/types";

interface PlaySheetPageProps {
    sheet: FullSheet;
}

const PlaySheetPage: FC<PlaySheetPageProps> = ({ sheet: defaultSheet }) => {
    const [sheet] = useState(defaultSheet);

    const { setSnackbar } = useContext(MainLayoutContext);

    useMutation<unknown, unknown, FullSheet>({
        mutationFn: async (newSheet) => await updateSheet(newSheet),
        onSuccess: () => {
            setSnackbar({
                severity: "success",
                message: "Sheet updated successfully!",
            });
        },
        onError: () => {
            setSnackbar({
                severity: "error",
                message: "Server error!",
            });
        },
    });

    return (
        <Stack>
            <PageTitle title={"Play Character Sheet"} />
            <Stack gap={4}>
                <Stack>
                    <PageSectionTitle title="Profile" />
                    <Stack gap={3}>
                        <Stack direction={"row"} gap={2}>
                            <TextField
                                label={"Name"}
                                defaultValue={sheet.name}
                                sx={{ flexBasis: "400px" }}
                            />
                            <Stack
                                direction={"row"}
                                justifyContent={"space-between"}
                                alignItems={"flex-end"}
                                flexWrap={"wrap"}
                                rowGap={5}
                                gap={2}
                            >
                                <Stack
                                    direction={"row"}
                                    rowGap={6}
                                    columnGap={2}
                                    flexWrap={"wrap"}
                                >
                                    <HitPointField
                                        defaultValue={sheet.currentHitPoints ?? 0}
                                        onChange={() => {}}
                                    />

                                    <AdventurePointField
                                        defaultValue={
                                            sheet.currentAdventurePoints ?? 0
                                        }
                                        onChange={() => {}}
                                    />
                                </Stack>
                            </Stack>
                        </Stack>

                        <TextField
                            label={"Description"}
                            multiline
                            rows={6}
                            defaultValue={sheet.description}
                        />

                        <Stack
                            direction={"row"}
                            gap={1}
                            justifyContent={"flex-end"}
                            sx={() => ({
                                "& > *": {
                                    flexBasis: "248px",
                                },
                            })}
                        >
                            <Button
                                color="inherit"
                                endIcon={<ReplaySharpIcon fontSize="small" />}
                            >
                                {"Undo"}
                            </Button>
                            <Button endIcon={<CheckSharp fontSize="small" />}>
                                {"Submit"}
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack>
                    <PageSectionTitle title="actions" />
                    <Stack
                        display={"flex"}
                        direction={"row"}
                        flexWrap={"wrap"}
                        gap={2}
                    >
                        <ActionCard
                            title={"Roll the die"}
                            description={
                                "Players roll the die in Quest to let fate decide what happens next. The Guide will ask players to roll when they try to do something risky, or when chance makes things fun."
                            }
                            actions={[
                                {
                                    title: "Use",
                                    Icon: CasinoSharpIcon,
                                    handleClick: () => {},
                                },
                            ]}
                        />
                        <ActionCard
                            title={"regroup"}
                            description={
                                "When characters rest for a short time with no enemies nearby, they regain up to the halfway point of their maximum hit points."
                            }
                            actions={[
                                {
                                    title: "Use",
                                    Icon: BedtimeOffSharpIcon,
                                    handleClick: () => {},
                                },
                            ]}
                        />
                        <ActionCard
                            title={"rest"}
                            description={
                                "When a character completes a full night’s rest while in a safe place, they recover all of their hit points."
                            }
                            actions={[
                                {
                                    title: "Use",
                                    Icon: NightsStaySharpIcon,
                                    handleClick: () => {},
                                },
                            ]}
                        />
                    </Stack>
                </Stack>
                <Stack>
                    <PageSectionTitle title="Inventory" />
                    <Stack
                        display={"flex"}
                        direction={"row"}
                        flexWrap={"wrap"}
                        gap={2}
                    >
                        {sheet.items.map((item) => (
                            <ActionCard
                                key={item.id}
                                title={item.title}
                                badge={<RarityTag rarity={item.rarity} />}
                                tags={<ItemTags item={item} />}
                                actions={[
                                    {
                                        title: "Use",
                                        Icon: BackHandSharpIcon,
                                        handleClick: () => {},
                                    },
                                ]}
                                sx={(theme) => ({
                                    [`&:hover .${rarityTagClass}`]: {
                                        color: theme.palette.text.primary,
                                        borderColor: theme.palette.text.primary,
                                    },
                                })}
                            />
                        ))}
                    </Stack>
                </Stack>
                <Stack>
                    <PageSectionTitle title="abilities" />
                    <Stack
                        display={"flex"}
                        direction={"row"}
                        flexWrap={"wrap"}
                        gap={2}
                    >
                        {sheet.abilities.map((ability) => (
                            <ActionCard
                                key={ability.id}
                                title={ability.title}
                                description={ability.description}
                                tags={
                                    <>
                                        <RollTheDieTag
                                            checked={Boolean(ability.rollTheDie)}
                                        />
                                        <AdventurePointTag
                                            adventurePoints={ability.activationCost}
                                            title={"Activation Cost"}
                                        />
                                    </>
                                }
                                actions={[
                                    {
                                        title: "Use",
                                        Icon: BackHandSharpIcon,
                                        handleClick: () => {},
                                    },
                                ]}
                                sx={(theme) => ({
                                    [`&:hover .${rarityTagClass}`]: {
                                        color: theme.palette.text.primary,
                                        borderColor: theme.palette.text.primary,
                                    },
                                })}
                            />
                        ))}
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default PlaySheetPage;
