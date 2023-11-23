import { Alegreya, Alegreya_Sans_SC } from "next/font/google";

export const headingText = Alegreya_Sans_SC({
    weight: ["300", "400", "500", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
});

export const pullquoteText = Alegreya({
    weight: ["400", "500", "700", "800", "900"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
});
