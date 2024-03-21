import type { FC } from "react";

import type { TextFieldProps } from "@mui/material";

import { PhraseField } from "@/components/@common/form";
import type { PhraseFieldProps } from "@/components/@common/form/fields/PhraseField";
import type { CharacterProfile } from "@/types/form";

import type { NewSheetFormStepProps } from "../NewSheetFormProps";

export type SheetPhraseContent =
    | (TextFieldProps & { field: keyof CharacterProfile })
    | string;

export interface SheetPhraseFieldProps
    extends PhraseFieldProps,
        Omit<NewSheetFormStepProps, "setSheet"> {
    phrase: SheetPhraseContent[];
}

const SheetPhraseField: FC<SheetPhraseFieldProps> = ({
    phrase,
    sheet,
    setSheetField,
}) => {
    return (
        <PhraseField
            phrase={phrase.map((content) => {
                const isString = typeof content === "string";

                return isString
                    ? content
                    : {
                          value: sheet[content.field],
                          onChange: ({ target }) => {
                              setSheetField(content.field, target.value);
                          },
                          placeholder: content.field,
                          ...content,
                      };
            })}
        />
    );
};

export default SheetPhraseField;
