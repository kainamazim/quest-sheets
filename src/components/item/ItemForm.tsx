"use client";

import { type FC, useContext, useState } from "react";

import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import { Box, Button, CircularProgress, Stack, TextField } from "@mui/material";
import { type Item } from "@prisma/client";

import { MainLayoutContext } from "@/providers/MainLayoutProvider";

import {
    ActivationCostField,
    DamageField,
    RaritySelect,
    RollTheDieSwitch,
} from "../@common/form";

interface ItemFormProps {
    item?: Item;
    onSubmit: (item: FormItem) => void;
    loading: boolean;
}

export interface FormItem extends Omit<Item, "id" | "createdAt" | "updatedAt"> {
    id?: Item["id"];
}

const newItem: FormItem = {
    title: "",
    description: "",
    rarity: "common",
    authorId: null,
    damage: null,
    rollTheDie: false,
    activationCost: null,
};

const ItemForm: FC<ItemFormProps> = ({
    item: defaultItem = newItem,
    onSubmit,
    loading,
}) => {
    const [error, setError] = useState(false);

    const [item, setItem] = useState<FormItem>(defaultItem);

    const setItemField: <T extends keyof FormItem>(
        key: T,
        value: FormItem[T],
    ) => void = (key, value) => {
        setItem((prev) => ({ ...prev, [key]: value }));
    };

    const { setSnackbar } = useContext(MainLayoutContext);

    const handleSubmit = () => {
        if (item.title.length === 0) {
            setError(true);
            setSnackbar({ message: "Title is required!", severity: "error" });
        } else {
            setError(false);
            setItem(newItem);
            onSubmit(item);
        }
    };

    return (
        <Stack>
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
                        id={"item-title"}
                        label={"Title"}
                        defaultValue={item.title}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            const newTitle = event.target.value;
                            setItemField("title", newTitle);
                        }}
                        autoFocus
                        error={error}
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
                        <Stack direction={"row"} rowGap={5} gap={2} flexWrap={"wrap"}>
                            <DamageField
                                defaultValue={item.damage}
                                onChange={(newDamage) => {
                                    setItemField("damage", newDamage);
                                }}
                            />
                            <ActivationCostField
                                defaultValue={item.activationCost}
                                onChange={(newActivationCost) => {
                                    setItemField("activationCost", newActivationCost);
                                }}
                            />
                        </Stack>
                        <RollTheDieSwitch
                            defaultChecked={item.rollTheDie}
                            onChange={(checked) => {
                                setItemField("rollTheDie", checked);
                            }}
                        />
                    </Stack>

                    <RaritySelect
                        rarity={item.rarity}
                        handleChange={(newRarity) => {
                            setItemField("rarity", newRarity);
                        }}
                    />
                </Box>
                <TextField
                    id={"item-description"}
                    label={"Description"}
                    multiline
                    rows={6}
                    defaultValue={item.description}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const newDescription = event.target.value;
                        setItemField("description", newDescription);
                    }}
                />
            </Box>
            <Button
                sx={{ marginTop: 6 }}
                onClick={handleSubmit}
                disabled={loading}
                endIcon={
                    loading ? (
                        <CircularProgress size={20} color="inherit" />
                    ) : (
                        <CheckSharpIcon />
                    )
                }
            >
                {"Submit"}
            </Button>
        </Stack>
    );
};

export default ItemForm;
