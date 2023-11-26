import { Typography } from "@mui/material";
import Link from "next/link";

import { headingText, pullquoteText } from "@/styles/font";

const Logo = () => {
    return (
        <Typography
            component="h1"
            variant="h5"
            color="inherit"
            noWrap
            sx={{
                fontFamily: pullquoteText.style.fontFamily,
                fontWeight: 900,
                letterSpacing: 0.4,
                cursor: "pointer",
            }}
        >
            <Link href={"/"} style={{ color: "inherit", textDecoration: "none" }}>
                <span style={{ textDecoration: "underline" }}>{"Quest"}</span>

                <span
                    style={{
                        fontFamily: headingText.style.fontFamily,
                        textTransform: "uppercase",
                        fontWeight: 700,
                        letterSpacing: 0.2,
                        fontSize: "23px",
                    }}
                >
                    {" Sheets"}
                </span>
            </Link>
        </Typography>
    );
};

export default Logo;
