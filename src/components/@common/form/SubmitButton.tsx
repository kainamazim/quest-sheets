import { FC } from "react";

import { LoadingButton, LoadingButtonProps } from "@mui/lab";

const SubmitButton: FC<LoadingButtonProps> = (props) => (
    <LoadingButton type={"submit"} loadingPosition={"end"} {...props} />
);

export default SubmitButton;
