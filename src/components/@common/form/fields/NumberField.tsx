import { type FC } from "react";

import TextField, { type TextFieldProps } from "@mui/material/TextField";

const NumberField: FC<TextFieldProps> = (props) => {
    return (
        <TextField
            type={"number"}
            slotProps={{
                input: {
                    inputProps: {
                        inputMode: "numeric",
                        pattern: "[0-9]*",
                        min: 0,
                        max: 99,
                    },
                },
            }}
            {...props}
        />
    );
};

export default NumberField;
