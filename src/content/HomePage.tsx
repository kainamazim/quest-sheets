"use client";

import type { FC } from "react";

import { PersonAddAlt1Sharp } from "@mui/icons-material";
import EastSharp from "@mui/icons-material/EastSharp";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";

import BaseCard from "@/components/@common/display/BaseCard";
import TextImageSection from "@/components/@common/display/TextImageSection";
import NewSheetModal from "@/components/sheet/NewSheetModal";
import { pullquoteText } from "@/styles/font";
import type { FullRole } from "@/types";

import newPlayerPicture from "../../public/new_player.jpg";
import questPicture from "../../public/quest-book-cover.jpg";
import sheetPicture from "../../public/quest-paper-sheets.jpg";

const bookContent = [
    {
        path: "/rules",
        title: "rules",
    },
    {
        path: "/roles",
        title: "roles",
    },
    {
        path: "/treasure",
        title: "Treasure Catalog",
    },
];

export interface HomePageProps {
    roles: FullRole[];
}

const HomePage: FC<HomePageProps> = ({ roles }) => {
    return (
        <Stack
            gap={3}
            sx={{
                flexGrow: 1,
                maxWidth: 1024,
            }}
        >
            <TextImageSection
                image={{ side: "right", src: questPicture, alt: "quest book cover" }}
            >
                <Stack
                    sx={{
                        paddingBlock: 4,
                        paddingInline: 3,

                        gap: 1,
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: pullquoteText.style.fontFamily,
                            fontWeight: 900,
                            mb: 1,
                        }}
                    >
                        {"What is Quest?"}
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: "1.25rem",
                            mb: 4,
                        }}
                    >
                        {
                            "Quest is a fantasy roleplaying game designed to welcome beginners of all ages into the world of RPGs. It uses rules that are relaxed and flexible, allowing players to tell their stories without any kind of complicated restrictions."
                        }
                    </Typography>
                    <a
                        target="_blank"
                        href={`https://www.adventure.game/about`}
                        style={{
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        <Button endIcon={<EastSharp />} color="inherit" fullWidth>
                            {"learn more"}
                        </Button>
                    </a>
                </Stack>
            </TextImageSection>
            <TextImageSection
                image={{ side: "left", src: sheetPicture, alt: "quest paper sheets" }}
            >
                <Stack
                    sx={{
                        paddingBlock: 4,
                        paddingInline: 3,
                        gap: 1,
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: pullquoteText.style.fontFamily,
                            fontWeight: 900,
                            mb: 1,
                        }}
                    >
                        {"And Quest Sheets?"}
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: "1.25rem",
                            mb: 4,
                        }}
                    >
                        {
                            "Quest Sheets is a character sheet management tool developed exclusively for Quest. It allows users to create, update, and even play with their characters, for which custom items can be created and addressed."
                        }
                    </Typography>
                    <Link
                        href={`/signup`}
                        style={{
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        <Button
                            endIcon={<PersonAddAlt1Sharp fontSize="small" />}
                            fullWidth
                        >
                            {"Sign Up"}
                        </Button>
                    </Link>
                </Stack>
            </TextImageSection>
            <TextImageSection
                image={{
                    side: "right",
                    src: newPlayerPicture,
                    alt: "new player art",
                }}
            >
                <Stack
                    sx={{
                        paddingBlock: 4,
                        paddingInline: 3,

                        gap: 1,
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: pullquoteText.style.fontFamily,
                            fontWeight: 900,
                            mb: 1,
                        }}
                    >
                        {"Are you new to RPGs?"}
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: "1.25rem",
                            mb: 4,
                        }}
                    >
                        {
                            "If you're new to role-playing games, you can start right away by clicking the button below and accessing the Character Creation Guide."
                        }
                    </Typography>
                    <NewSheetModal roles={roles} />
                </Stack>
            </TextImageSection>
            <Paper
                elevation={3}
                sx={{
                    flexGrow: 1,
                    maxWidth: 1024,
                    paddingBlock: 4,
                    paddingInline: 3,
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: pullquoteText.style.fontFamily,
                        fontWeight: 900,
                        mb: 1,
                    }}
                >
                    {"Book Content"}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: "1.25rem",
                        mb: 4,
                    }}
                >
                    {"Quest Sheets also makes use of the "}
                    <a
                        target="_blank"
                        href="https://www.adventure.game/static/quest-creators-license-and-resource-72932d343a6d2f0af7a5804d9c0b2b46.pdf"
                        style={{ color: "inherit", textDecoration: "none" }}
                    >
                        <Typography
                            variant="body1"
                            component={"span"}
                            sx={({ palette }) => ({
                                color: palette.text.primary,
                                fontWeight: 500,
                                textDecoration: "underline",
                            })}
                        >
                            {"Quest's community creators license document"}
                        </Typography>
                    </a>
                    {
                        " to provide useful information related to the game, such as its rules, roles, and treasure catalog."
                    }
                </Typography>
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    {bookContent.map((content) => (
                        <BaseCard key={content.path} sx={{ flexGrow: 1 }}>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={(theme) => ({
                                    fontWeight: 500,
                                    lineHeight: 1,
                                    fontSize: "1.3rem",
                                    mb: 4,
                                })}
                            >
                                {content.title}
                            </Typography>
                            <Link
                                href={content.path}
                                style={{
                                    color: "inherit",
                                    textDecoration: "none",
                                }}
                                color=""
                            >
                                <Button
                                    endIcon={<EastSharp />}
                                    color="inherit"
                                    fullWidth
                                >
                                    {"read more"}
                                </Button>
                            </Link>
                        </BaseCard>
                    ))}
                </Box>
            </Paper>
        </Stack>
    );
};

export default HomePage;
