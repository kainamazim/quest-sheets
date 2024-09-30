import { Controller, ControllerProps, FieldValues } from "react-hook-form";

import { TextField } from "@mui/material";
import type { TextFieldProps } from "@mui/material";

export type FormTextfieldProps<T extends FieldValues> = TextFieldProps & {
    name: ControllerProps<T>["name"];
    control: ControllerProps<T>["control"];
};

const FormTextfield = <T extends FieldValues>({
    name,
    control,
    ...textFieldProps
}: FormTextfieldProps<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                    name={name}
                    error={!!error}
                    helperText={error ? error.message : null}
                    onChange={onChange}
                    value={value}
                    {...textFieldProps}
                />
            )}
        />
    );
};

export default FormTextfield;
