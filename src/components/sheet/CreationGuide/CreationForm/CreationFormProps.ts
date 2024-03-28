import type { Updater } from "use-immer";

import type { SetField } from "@/types";
import type { CharacterProfile } from "@/types/form";

export interface NewSheetFormStepProps {
    sheet: CharacterProfile;
    setSheet: Updater<CharacterProfile>;
    setSheetField: SetField<CharacterProfile>;
}
