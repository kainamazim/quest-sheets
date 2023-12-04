"use client";

import { Stack, Typography } from "@mui/material";

import TextImageSection from "@/components/@common/display/TextImageSection";
import { pullquoteText } from "@/styles/font";

import actionScenePicture from "../../../public/action-scene.png";
import guidePicture from "../../../public/guide-image.png";
import innerCastlePicture from "../../../public/inner-castle.png";
import partyPicture from "../../../public/party.png";

const BookRulesPage = () => {
    return (
        <Stack
            gap={3}
            sx={{
                flexGrow: 1,
                maxWidth: 1024,
            }}
        >
            <TextImageSection
                image={{ side: "left", src: innerCastlePicture, alt: "Inner Castle" }}
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
                        {"How to Play"}
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: "1.25rem",
                            mb: 4,
                        }}
                    >
                        {`The game is played by having a conversation with friends. `}
                        <br />

                        {`First, the Guide describes the scene to help the party imagine the world and what is happening nearby. `}
                        <br />

                        {`Next, members of the party say what their characters do. `}
                        <br />

                        {`Then, the Guide imagines what happens next and describes the scene again.`}
                    </Typography>
                </Stack>
            </TextImageSection>
            <TextImageSection
                image={{ side: "right", src: partyPicture, alt: "RPG Party" }}
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
                        {"The Party"}
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: "1.25rem",
                            mb: 4,
                        }}
                    >
                        {`Quest works best with 4-6 players. `}
                        <br />

                        {`First, choose one player to be the guide. The Guide plays as the story’s narrator.`}
                        <br />

                        {`Everyone else will create one of the story’s main characters, and then play as the character they created. These player characters are allies in an adventuring group called the party.`}
                    </Typography>
                </Stack>
            </TextImageSection>

            <TextImageSection
                image={{ side: "left", src: guidePicture, alt: "The Guide" }}
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
                        {"The Guide"}
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: "1.25rem",
                            mb: 4,
                        }}
                    >
                        {`The Guide imagines the people, places, and things the party encounters. Then, they help everyone imagine the world of the game by describing it. The Guide also plays the part of all of the characters in the story, like townspeople and monsters. We call them non-player characters, or npcs.`}
                        <br />

                        {`Finally, the Guide is responsible for creating consequences for the party’s actions.`}
                        <br />
                    </Typography>
                </Stack>
            </TextImageSection>

            <TextImageSection
                image={{
                    side: "right",
                    src: actionScenePicture,
                    alt: "Action Scene",
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
                        {"Action Scenes"}
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: "1.25rem",
                            mb: 4,
                        }}
                    >
                        {`In an action scene (like during combat), players take turns. During a turn, characters can move around AND do one thing. The one thing can be a special ability, or something else, like attacking an enemy, or trying to break through a door.`}
                        <br />

                        {`The Guide decides whose turn it is based on what’s happening in the story. When each member of the party has taken a turn, the party’s round ends. Then, the Guide gets a round for the creatures they control. Repeat this process until a conclusion is reached in the scene.`}
                        <br />
                    </Typography>
                </Stack>
            </TextImageSection>
        </Stack>
    );
};

export default BookRulesPage;
