import { type FC } from "react";

import TextField, { type TextFieldProps } from "@mui/material/TextField";

const NumberField: FC<TextFieldProps> = (props) => {
    return (
        <TextField
            variant={"standard"}
            type={"number"}
            inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]*",
                min: 0,
                max: 99,
            }}
            fullWidth
            {...props}
        />
    );
};

export default NumberField;
