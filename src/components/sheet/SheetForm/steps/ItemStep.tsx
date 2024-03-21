import { type FC, useContext } from "react";

import { Stack } from "@mui/material";
import { type Item } from "@prisma/client";

import { SectionAccordion } from "@/components/@common/display";
import ItemList from "@/components/item/ItemList";
import ItemViewCard from "@/components/item/ItemViewCard";
import { MainLayoutContext } from "@/providers/MainLayoutProvider";
import type { FormSheet, SetField } from "@/types";

interface ItemStepProps {
    sheet: FormSheet;
    setField: SetField<FormSheet>;
    items: Item[];
}

const ItemStep: FC<ItemStepProps> = ({ sheet, setField, items }) => {
    const sheetItemsIds = sheet.items.map((item) => item.id);

    const { setSnackbar } = useContext(MainLayoutContext);

    return (
        <Stack gap={4}>
            <Stack display={"flex"} direction={"row"} flexWrap={"wrap"} gap={2}>
                {sheet.items.map((item) => (
                    <ItemViewCard
                        key={item.id}
                        item={item}
                        checked
                        handleChange={(newChecked) => {
                            const newItems = newChecked
                                ? [...sheet.items, item]
                                : sheet.items.filter(
                                      ({ id: itemId }) => itemId !== item.id,
                                  );

                            setField("items", newItems);
                        }}
                    />
                ))}
            </Stack>

            <SectionAccordion title={"available items"}>
                <ItemList
                    initialItems={items}
                    renderItem={(item) => (
                        <ItemViewCard
                            key={item.id}
                            item={item}
                            checked={sheetItemsIds.includes(item.id)}
                            handleChange={(newChecked) => {
                                if (newChecked && sheet.items.length === 10) {
                                    setSnackbar({
                                        severity: "error",
                                        message:
                                            "You cannot have more than 10 items!",
                                    });
                                } else {
                                    const newItems = newChecked
                                        ? [...sheet.items, item]
                                        : sheet.items.filter(
                                              ({ id: itemId }) => itemId !== item.id,
                                          );

                                    setField("items", newItems);
                                }
                            }}
                        />
                    )}
                />
            </SectionAccordion>
        </Stack>
    );
};

export default ItemStep;
