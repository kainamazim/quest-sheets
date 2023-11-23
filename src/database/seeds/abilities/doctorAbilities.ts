import { type Ability } from "@prisma/client";

import {
    doctorAlterationPath,
    doctorExaminationPath,
    doctorHarmPath,
    doctorHealingPath,
    doctorLegendaryPath,
    doctorNecromancyPath,
    doctorPerceptionPath,
} from "../learningPaths/doctorLearningPaths";

const doctorHealingAbilities: Ability[] = [
    {
        id: 107,
        title: "mend",
        description:
            "You gently touch a creature, immediately restoring hit points and mending minor wounds.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: doctorHealingPath.id,
        order: 1,
    },
    {
        id: 108,
        title: "relieve",
        description:
            "You say something comforting, relieving a creature of anxiety, pain, and discomfort.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: doctorHealingPath.id,
        order: 2,
    },
    {
        id: 109,
        title: "heal",
        description:
            "You embrace a creature, restoring all of its hit points and curing it of short-term impairments.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: doctorHealingPath.id,
        order: 3,
    },
    {
        id: 110,
        title: "restore",
        description:
            "You touch a creature, completely restoring it to its normal state.",
        activationCost: 7,
        rollTheDie: false,
        learningPathId: doctorHealingPath.id,
        order: 4,
    },
];

const doctorAlterationAbilities: Ability[] = [
    {
        id: 111,
        title: "sleep",
        description:
            "You whisper a brief lullaby, putting any number of nearby commoners to sleep for an hour.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: doctorAlterationPath.id,
        order: 1,
    },
    {
        id: 112,
        title: "calcify",
        description:
            "You touch a creature, causing its surface to harden and resist damage.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: doctorAlterationPath.id,
        order: 2,
    },
    {
        id: 113,
        title: "feign death",
        description:
            "You place nearby creatures in suspended animation for up to an hour.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: doctorAlterationPath.id,
        order: 3,
    },
    {
        id: 114,
        title: "reshape",
        description:
            "You reshape the facial appearance of a creature, making them look older, younger, or like a completely different person.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: doctorAlterationPath.id,
        order: 4,
    },
    {
        id: 115,
        title: "lifelink",
        description:
            "You entwine the life-force of two creatures, tying their fates together.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: doctorAlterationPath.id,
        order: 5,
    },
];

const doctorNecromancyAbilities: Ability[] = [
    {
        id: 116,
        title: "deathsense",
        description:
            "You sense whether any spirit creatures are nearby, and can extend your vision to see them.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: doctorNecromancyPath.id,
        order: 1,
    },
    {
        id: 117,
        title: "commune with the dead",
        description: "You reach beyond the living to speak to the dead nearby.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: doctorNecromancyPath.id,
        order: 2,
    },
    {
        id: 118,
        title: "reanimate",
        description:
            "You animate a nearby corpse or skeleton, making it your thrall.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: doctorNecromancyPath.id,
        order: 3,
    },
    {
        id: 119,
        title: "reinstate the dead",
        description:
            "You touch a living creature and make it the host for a nearby spirit creature.",
        activationCost: 7,
        rollTheDie: false,
        learningPathId: doctorNecromancyPath.id,
        order: 4,
    },
];

const doctorHarmAbilities: Ability[] = [
    {
        id: 120,
        title: "corrupt",
        description:
            "You grip a creature and create a necrotizing wound in its flesh.",
        activationCost: 0,
        rollTheDie: false,
        learningPathId: doctorHarmPath.id,
        order: 1,
    },
    {
        id: 121,
        title: "nox",
        description:
            "You give a creature a combination of deleterious effects for the next hour.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: doctorHarmPath.id,
        order: 2,
    },
    {
        id: 122,
        title: "afflict",
        description:
            "You curse a creature with a terrible affliction that lasts for up to one month.",
        activationCost: 3,
        rollTheDie: true,
        learningPathId: doctorHarmPath.id,
        order: 3,
    },
    {
        id: 123,
        title: "wither",
        description:
            "You cause a creature’s body to wither, giving them the experience of advanced age without changing their lifespan.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: doctorHarmPath.id,
        order: 4,
    },
    {
        id: 124,
        title: "heartkill",
        description:
            "You curse the heart of a creature, causing it to explode, or turning it into a time bomb.",
        activationCost: 6,
        rollTheDie: false,
        learningPathId: doctorHarmPath.id,
        order: 5,
    },
];

const doctorPerceptionAbilities: Ability[] = [
    {
        id: 125,
        title: "modulate",
        description:
            "You alter the nature and intensity of a creature’s physical sensations for up to an hour.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: doctorPerceptionPath.id,
        order: 1,
    },
    {
        id: 126,
        title: "shape senses",
        description:
            "You manipulate a creature’s perception of the world for up to a day.",
        activationCost: 2,
        rollTheDie: false,
        learningPathId: doctorPerceptionPath.id,
        order: 2,
    },
    {
        id: 127,
        title: "false sense",
        description:
            "You cause a creature to perceive a specific thing or a category of things falsely.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: doctorPerceptionPath.id,
        order: 3,
    },
    {
        id: 128,
        title: "amnesiate",
        description:
            "You touch a creature, erasing its memory for the previous month… or beyond.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: doctorPerceptionPath.id,
        order: 4,
    },
];

const doctorExaminationAbilities: Ability[] = [
    {
        id: 129,
        title: "examine the dead",
        description:
            "You evaluate a corpse, determining the creature’s cause, time, and date of its death.",
        activationCost: 1,
        rollTheDie: false,
        learningPathId: doctorExaminationPath.id,
        order: 1,
    },
    {
        id: 130,
        title: "diagnose",
        description:
            "You diagnose a mysterious affliction like a disease, spell, or curse.",
        activationCost: 0,
        rollTheDie: true,
        learningPathId: doctorExaminationPath.id,
        order: 2,
    },
    {
        id: 131,
        title: "curious case",
        description:
            "You recall something you’ve seen before to help reveal details about your scene.",
        activationCost: 3,
        rollTheDie: false,
        learningPathId: doctorExaminationPath.id,
        order: 3,
    },
];
const doctorLegendaryAbilities: Ability[] = [
    {
        id: 132,
        title: "genesis command",
        description:
            "You reverse or accelerate a creature’s development, like reverting an adult into a child.",
        activationCost: 6,
        rollTheDie: false,
        learningPathId: doctorLegendaryPath.id,
        order: 1,
    },
    {
        id: 133,
        title: "banish",
        description: "You banish a spirit creature to a random shadow plane.",
        activationCost: 5,
        rollTheDie: false,
        learningPathId: doctorLegendaryPath.id,
        order: 2,
    },
    {
        id: 134,
        title: "eternal slumber",
        description: "You place a creature into a permanent and peaceful sleep.",
        activationCost: 4,
        rollTheDie: false,
        learningPathId: doctorLegendaryPath.id,
        order: 3,
    },
    {
        id: 135,
        title: "the bitter gift",
        description:
            "You bestow a creature with self-awareness, turning it into a person like you.",
        activationCost: 9,
        rollTheDie: false,
        learningPathId: doctorLegendaryPath.id,
        order: 4,
    },
];

export const doctorAbilities: Ability[] = [
    ...doctorHealingAbilities,
    ...doctorAlterationAbilities,
    ...doctorNecromancyAbilities,
    ...doctorHarmAbilities,
    ...doctorPerceptionAbilities,
    ...doctorExaminationAbilities,
    ...doctorLegendaryAbilities,
];
