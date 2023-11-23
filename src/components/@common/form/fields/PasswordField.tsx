import { type FC, useState } from "react";

import { VisibilityOffSharp, VisibilitySharp } from "@mui/icons-material";
import {
    IconButton,
    InputAdornment,
    TextField,
    type TextFieldProps,
    Tooltip,
} from "@mui/material";

const PasswordField: FC<TextFieldProps> = (props) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <TextField
            {...props}
            type={showPassword ? "text" : "password"}
            InputProps={{
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
            }}
        />
    );
};

export default PasswordField;
