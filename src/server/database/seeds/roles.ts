import { type Role } from "@prisma/client";

export const fighterRole: Role = {
    id: 1,
    title: "fighter",
    description:
        "The Fighter charges into battle with a fearsome cry, raising their sword to cleave through enemies. They deftly move between foes, countering their attacks and enduring them when necessary. They rally their comrades, forming unshakable bonds with them.",
};

export const invokerRole: Role = {
    id: 2,
    title: "invoker",
    description:
        "The Invoker closes their eyes and utters a mantra, raising their sword in the sky as it ignites in a glorious flame. They peer into the souls of others to divine their intentions and true nature. They ward their friends from harm, and smite those unworthy of their ideals.",
};

export const rangerRole: Role = {
    id: 3,
    title: "ranger",
    description:
        "The Ranger closes their eyes and places their hand on a tree trunk, learning the secrets of the forest. They stop to chat with a local squirrel, making a new friend. They speak myth, earning the favor of strangers.",
};

export const naturalistRole: Role = {
    id: 4,
    title: "naturalist",
    description:
        "The Naturalist whispers to a field of flowers, inspiring them to bloom. They take a wolf’s form, streaking across the steppe. With their hands to the sky, they summon a storm, bringing forth nature’s wrath.",
};

export const doctorRole: Role = {
    id: 5,
    title: "doctor",
    description:
        "The Doctor gently touches the arm of an ally, mending their body and spirit. They lean down to examine the dead, discovering what caused their cruel fate. They sense the departed, and speak with lost souls.",
};

export const spyRole: Role = {
    id: 6,
    title: "spy",
    description:
        "The Spy smiles and offers an uncanny greeting, walking through the front door with confidence. They slip in and out of the shadows, striking foes when they least expect it. They craft remarkable, bespoke tools that give them an edge in their pursuits.",
};

export const magicianRole: Role = {
    id: 7,
    title: "magician",
    description:
        "The Magician flicks their wrist, delighting an audience with a parade of illusory animals. They mesmerize an adversary, freezing them in place. They peer beyond the eyes of another, entering their dreams and shaping their reality.",
};

export const wizardRole: Role = {
    id: 8,
    title: "wizard",
    description:
        "The Wizard utters a word of power, sending a wave of force that knocks back everything in its path. They imagine an object needed in a pinch, and conjure it from thin air. With a wave of their hand, they open a rift to unexplored dimensions, seeking answers beyond space and time.",
};

const roles: Role[] = [
    fighterRole,
    invokerRole,
    rangerRole,
    naturalistRole,
    doctorRole,
    spyRole,
    magicianRole,
    wizardRole,
];

export default roles;
