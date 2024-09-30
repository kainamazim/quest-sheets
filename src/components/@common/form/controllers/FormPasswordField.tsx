import { useState } from "react";
import { FieldValues } from "react-hook-form";

import { VisibilityOffSharp, VisibilitySharp } from "@mui/icons-material";
import { IconButton, InputAdornment, Tooltip } from "@mui/material";

import FormTextfield, { FormTextfieldProps } from "./FormTextfield";

const FormPasswordField = <T extends FieldValues>({
    name,
    control,
    ...textFieldProps
}: FormTextfieldProps<T>) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <FormTextfield
            control={control}
            name={name}
            {...textFieldProps}
            type={showPassword ? "text" : "password"}
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position="end">
                            <Tooltip title={showPassword ? "Hide" : "Show"}>
                                <IconButton onClick={handleShowPassword} size="small">
                                    {showPassword ? (
                                        <VisibilityOffSharp fontSize="small" />
                                    ) : (
                                        <VisibilitySharp fontSize="small" />
                                    )}
                                </IconButton>
                            </Tooltip>
                        </InputAdornment>
                    ),
                },
            }}
        />
    );
};

export default FormPasswordField;
