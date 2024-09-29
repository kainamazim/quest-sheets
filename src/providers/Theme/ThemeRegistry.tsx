import { type FC, type PropsWithChildren } from "react";

import ThemeProvider from "./ThemeProvider";

const ThemeRegistry: FC<PropsWithChildren> = ({ children }) => {
    return <ThemeProvider>{children}</ThemeProvider>;
};

export default ThemeRegistry;
