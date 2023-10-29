import { FC } from "react";

import { Box, TextField } from "@mui/material";

import { Item } from "@prisma/client";

interface ItemFormProps {
  item: Item;
}

const ItemForm: FC<ItemFormProps> = ({ item }) => {
  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          gap: 1,
          "& > *": {
            flexGrow: 1,
          },
        }}
      >
        <TextField variant={"standard"} id={"item-title"} label={"Title"} />
      </Box>

      <TextField
        variant={"standard"}
        id={"item-title"}
        label={"Description"}
        multiline
        rows={6}
      />
    </Box>
  );
};

export default ItemForm;
