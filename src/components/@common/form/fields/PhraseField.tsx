import type { FC } from "react";

import { Stack, TextField, type TextFieldProps, Typography } from "@mui/material";

export type PhraseContent = TextFieldProps | string;

export interface PhraseFieldProps {
    phrase: PhraseContent[];
}

const PhraseField: FC<PhraseFieldProps> = ({ phrase }) => {
    return (
        <Stack flexDirection={"row"} flexWrap={"wrap"} gap={1}>
            {phrase.map((content, index) => {
                const isString = typeof content === "string";

                if (isString)
                    return (
                        <Typography
                            key={String(content) + index}
                            variant="body1"
                            sx={{
                                fontSize: "1.4rem",
                                fontWeight: 500,
                            }}
                        >
                            {content}
                        </Typography>
                    );
                else {
                    const { inputProps = {}, sx = {}, ...otherProps } = content;

                    return (
                        <TextField
                            key={String(content) + index}
                            variant="standard"
                            sx={{
                                backgroundColor: ({ palette }) => palette.grey[200],
                                ...sx,
                            }}
                            inputProps={{
                                style: {
                                    fontSize: "1.4rem",
                                    fontWeight: 500,
                                    paddingInline: "0.5rem",
                                },
                                ...inputProps,
                            }}
                            {...otherProps}
                        />
                    );
                }
            })}
        </Stack>
    );
};

export default PhraseField;
