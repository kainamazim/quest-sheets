"use client";

import { type FC, useContext, useEffect, useState } from "react";

import BackHandSharpIcon from "@mui/icons-material/BackHandSharp";
import BedtimeOffSharpIcon from "@mui/icons-material/BedtimeOffSharp";
import CasinoSharpIcon from "@mui/icons-material/CasinoSharp";
import CheckSharp from "@mui/icons-material/CheckSharp";
import NightsStaySharpIcon from "@mui/icons-material/NightsStaySharp";
import {
    Box,
    Button,
    Grow,
    Paper,
    Snackbar,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { type Ability, type Item } from "@prisma/client";
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

interface RollMessageInfo {
    title: string;
    description: string;
    value: number;
}

const rollTheDieFn = (): RollMessageInfo => {
    const value = Math.floor(Math.random() * 20) + 1;

    if (value === 20)
        return {
            title: "triumph",
            description:
                "This is an exciting moment. You automatically succeed at what you were trying to do, and you may even find added fortune. If you’re dealing damage, double it.",
            value,
        };
    else if (value > 10 && value < 20)
        return {
            title: "success",
            description:
                "You accomplish what you were trying to do without any compromises. If you're dealing damage, you deal the standard amount.",
            value,
        };
    else if (value > 5 && value < 11)
        return {
            title: "tough choice",
            description:
                "You succeed in your action, but there's a cost. The Guide will give you a choice between two setbacks.",
            value,
        };
    else if (value > 1 && value < 6)
        return {
            title: "failure",
            description:
                "You fail your intended action and face a setback of the Guide's choice. You might lose equipment, take damage from an enemy counterattack, or face some other misfortune.",
            value,
        };
    else
        return {
            title: "catastrophe",
            description:
                "Oh no. You automatically fail, and you may suffer a severe setback.",
            value,
        };
};

export interface SnackbarProps {
    title: string;
    message: string;
}
export interface SnackbarState extends SnackbarProps {
    open: boolean;
}

export type SetFormSheetField = <T extends keyof FullSheet>(
    field: T,
    value: FullSheet[T],
) => void;

export type FormSheetErrors = Array<keyof FullSheet>;

const PlaySheetPage: FC<PlaySheetPageProps> = ({ sheet: defaultSheet }) => {
    const [sheet, setSheet] = useState(defaultSheet);
    const [snackbar, setSnackbarState] = useState<SnackbarState>({
        open: false,
        title: "",
        message: "",
    });

    const setField: SetFormSheetField = (field, value) => {
        setSheet((prev) => ({ ...prev, [field]: value }));
    };

    const [errors, setErrors] = useState<FormSheetErrors>([]);

    useEffect(() => {
        setErrors((prevErrors) => {
            const newErrors = prevErrors.filter((errorField) => !sheet[errorField]);

            return newErrors;
        });
    }, [sheet]);

    const setSnackbar = (snackbarProps: SnackbarProps) => {
        setSnackbarState({
            open: true,
            ...snackbarProps,
        });
    };

    const handleCloseSnackbar = (
        event: React.SyntheticEvent | Event,
        reason?: string,
    ) => {
        if (reason === "clickaway") return;

        setSnackbarState((prev) => ({ ...prev, open: false }));
    };

    const { setSnackbar: setSnackbarExternal } = useContext(MainLayoutContext);

    const { mutate, isPending: loading } = useMutation<unknown, unknown, FullSheet>({
        mutationFn: async (newSheet) => await updateSheet(newSheet),
        onSuccess: () => {
            setSnackbarExternal({
                severity: "success",
                message: "Sheet updated successfully!",
            });
        },
        onError: () => {
            setSnackbarExternal({
                severity: "error",
                message: "Server error!",
            });
        },
    });

    const handleSubmit = () => {
        mutate(sheet);
    };

    const handleUseAbility = (ability: Ability) => {
        const message = rollTheDieFn();

        const rollTheMessage = ability.rollTheDie
            ? ` Your roll result was ${message.value + " (" + message.title + ")"}.`
            : "";

        if (
            ability.activationCost &&
            sheet.currentAdventurePoints < ability.activationCost
        ) {
            setSnackbar({
                title: ability.title,
                message:
                    "You do not have enough adventure points to use this ability.",
            });
        } else if (
            ability.activationCost &&
            sheet.currentAdventurePoints >= ability.activationCost
        ) {
            const newAdventurePoints =
                sheet.currentAdventurePoints - ability.activationCost;

            setSheet((prev) => ({
                ...prev,
                currentAdventurePoints: newAdventurePoints,
            }));

            handleSubmit();

            setSnackbar({
                title: ability.title,
                message: `Ability used. You spent ${ability.activationCost} adventure points.${rollTheMessage}`,
            });
        } else {
            setSnackbar({
                title: ability.title,
                message: `Ability used. ${rollTheMessage}`,
            });
        }
    };

    const handleUseItem = (item: Item) => {
        const message = rollTheDieFn();

        const rollTheMessage = item.rollTheDie
            ? ` Your roll result was ${message.value + " (" + message.title + ")"}.`
            : "";

        if (
            item.activationCost &&
            sheet.currentAdventurePoints < item.activationCost
        ) {
            setSnackbar({
                title: item.title,
                message: "You do not have enough adventure points to use this item.",
            });
        } else if (
            item.activationCost &&
            sheet.currentAdventurePoints >= item.activationCost
        ) {
            const newAdventurePoints =
                sheet.currentAdventurePoints - item.activationCost;

            setSheet((prev) => ({
                ...prev,
                currentAdventurePoints: newAdventurePoints,
            }));

            handleSubmit();

            setSnackbar({
                title: item.title,
                message: `Item used. You spent ${item.activationCost} adventure points.${rollTheMessage}`,
            });
        } else {
            setSnackbar({
                title: item.title,
                message: `Item used. ${rollTheMessage}`,
            });
        }
    };

    const handleRollTheDie = () => {
        const message = rollTheDieFn();

        setSnackbar({
            title: message.title + " - " + message.value,
            message: message.description,
        });
    };

    return (
        <>
            <Stack>
                <PageTitle title={"Play Character Sheet"} />
                <Stack gap={4}>
                    <Stack>
                        <PageSectionTitle title="Profile" />
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "flex-start",
                                gap: 3,
                                "& > *": {
                                    flexGrow: 1,
                                    flexBasis: "450px",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 4,
                                    "& > *": {
                                        flexGrow: 1,
                                    },
                                }}
                            >
                                <TextField
                                    id={"sheet-name"}
                                    label={"Name"}
                                    defaultValue={sheet.name}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>,
                                    ) => {
                                        const newName = event.target.value;
                                        setField("name", newName);
                                    }}
                                    autoFocus
                                    error={errors.includes("name")}
                                    helperText={"Required"}
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
                                            onChange={(newHitPoints) => {
                                                setField(
                                                    "currentHitPoints",
                                                    newHitPoints,
                                                );
                                            }}
                                        />

                                        <AdventurePointField
                                            defaultValue={
                                                sheet.currentAdventurePoints ?? 0
                                            }
                                            onChange={(newAdventurePoints) => {
                                                setField(
                                                    "currentAdventurePoints",
                                                    newAdventurePoints,
                                                );
                                            }}
                                        />
                                    </Stack>
                                </Stack>
                            </Box>
                            <TextField
                                id={"item-description"}
                                label={"Description"}
                                multiline
                                rows={6}
                                defaultValue={sheet.description}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>,
                                ) => {
                                    const newDescription = event.target.value;
                                    setField("description", newDescription);
                                }}
                                error={errors.includes("description")}
                                helperText={"Required"}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                mt: 2,
                                "& > *": {
                                    flexBasis: "300px",
                                },
                            }}
                        >
                            <Button
                                onClick={handleSubmit}
                                disabled={loading}
                                endIcon={<CheckSharp fontSize="small" />}
                            >
                                {"Submit"}
                            </Button>
                        </Box>
                    </Stack>

                    {/** Actions */}
                    <Stack>
                        <PageSectionTitle title="Actions" />
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
                                        handleClick: () => {
                                            handleRollTheDie();
                                        },
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
                                        handleClick: () => {
                                            setSheet((prev) => ({
                                                ...prev,
                                                currentHitPoints:
                                                    prev.currentHitPoints > 5
                                                        ? prev.currentHitPoints
                                                        : 5,
                                            }));

                                            handleSubmit();

                                            setSnackbar({
                                                title: "regrouped",
                                                message:
                                                    "Half of your Hit Points were restored.",
                                            });
                                        },
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
                                        handleClick: () => {
                                            setSheet((prev) => ({
                                                ...prev,
                                                currentHitPoints: 10,
                                            }));

                                            handleSubmit();

                                            setSnackbar({
                                                title: "Rested",
                                                message: "Hit Points fully restored.",
                                            });
                                        },
                                    },
                                ]}
                            />
                        </Stack>
                    </Stack>

                    {/** Inventory */}
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
                                            handleClick: () => {
                                                handleUseItem(item);
                                            },
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

                    {/** Abilities */}
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
                                                adventurePoints={
                                                    ability.activationCost
                                                }
                                                title={"Activation Cost"}
                                            />
                                        </>
                                    }
                                    actions={[
                                        {
                                            title: "Use",
                                            Icon: BackHandSharpIcon,
                                            handleClick: () => {
                                                handleUseAbility(ability);
                                            },
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

            <Snackbar
                open={snackbar.open}
                onClose={handleCloseSnackbar}
                onClick={handleCloseSnackbar}
                autoHideDuration={8 * 1000}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                TransitionComponent={Grow}
                sx={{ cursor: "pointer" }}
            >
                <Paper
                    elevation={6}
                    sx={{ padding: 2, maxWidth: "350px", minWidth: "200px" }}
                >
                    <Typography
                        variant="h6"
                        mb={1}
                        sx={{
                            textTransform: "lowercase",
                        }}
                    >
                        {snackbar.title}
                    </Typography>
                    <Typography variant="body1">{snackbar.message}</Typography>
                </Paper>
            </Snackbar>
        </>
    );
};

export default PlaySheetPage;
