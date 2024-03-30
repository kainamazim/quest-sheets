import type { CharacterProfile, CharacterTrait } from "@/types/form";

export const defaultSheet: CharacterProfile = {
    name: "",
    pronoun: "",
    age: null,
    height: null,
    appearance: {
        body: "",
        face: "",
        vibe: "",
        clothing: "",
        movement: "",
    },
    home: {
        short_description: "",
        peculiarity: "",
    },
    belief: "",
    flaw: "",
    dream: "",
    roleId: null,
};

export const bodyOptions = [
    "scales",
    "worn scars",
    "iridescent skin",
    "rack of muscles",
    "towering physique",
    "speckled complexion",
    "barrel-sized belly",
    "head of tentacles",
    "generous curves",
    "elongated limbs",
    "bumpy exterior",
    "willowy frame",
    "sculpted hair",
    "stout stature",
    "lived-in body",
    "vestigial tail",
    "webbed fins",
    "rough hide",
];

export const faceOptions = [
    "gaunt face",
    "sharp teeth",
    "fulsome cheeks",
    "large, pointy ears",
    "vestigial antennae",
    "knee-length beard",
    "devastating smile",
    "windswept face",
    "manicured fuzz",
    "ridged forehead",
    "triangular head",
    "timeworn face",
    "romantic eyes",
    "severe jawline",
    "skeptical eyes",
    "radiant smile",
    "burning eyes",
];

export const vibeOptions = [
    "long shadow",
    "sleepy mood",
    "sparkling gaze",
    "eternal grimace",
    "bursting energy",
    "an air of mystery",
    "gentle disposition",
    "androgynous vibes",
    "thousand-yard stare",
    "tightly wound energy",
    "brooding presence",
    "friendly demeanor",
    "meandering gaze",
    "graceful posture",
    "captivating grin",
    "raucous laugh",
    "flawless poise",
    "fiery temper",
];

export const clothingOptions = [
    "etched leather armor",
    "a billowing jumpsuit",
    "a tightly fitted tunic",
    "religious vestments",
    "nicked chainmail",
    "runes in my hair",
    "a fluttering cape",
    "weathered rags",
    "a layered dress",
    "a warm cloak",
    "an owl pin",
    "a charmed necklace",
    "a ragged headcover",
    "antique eyeglasses",
    "a patterned hijab",
    "a silken eyepatch",
    "fingerless gloves",
    "a quilted jacket",
    "encrusted cuffs",
    "a feathered cap",
    "a boned bodice",
    "a fancy hat",
];

export const movementOptions = [
    "no sense of urgency",
    "an effortless glide",
    "frenzied footwork",
    "a confident step",
    "great difficulty",
    "a reliable pace",
    "wide-swinging arms",
    "a spring in my step",
    "a singular purpose",
    "no sense of space",
    "music in my feet",
    "an uneven gait",
    "a joyful whistle",
    "relentless focus",
    "casual swagger",
    "apprehension",
    "a heavy step",
    "fearlessness",
];

export const homeShortDescriptionOptions = [
    "a great metropolis",
    "a remote village",
    "a frontier town",
    "a lonely island",
    "a capital city",
    "a seastead",
    "a remote stronghold",
    "a traveling caravan",
    "a hidden warren",
    "a working farm",
    "a roadside inn",
    "a ship at sea",
    "a place I can't name",
    "a subterranean city",
    "a forgotten nation",
    "a mountain town",
    "a city in the mist",
    "a homestead",
];

export const homePeculiarityOptions = [
    "their steady pursuit of pleasure",
    "their easygoing temperament",
    "their unhurried sense of time",
    "treating strangers with love",
    "restoring justice to the land",
    "once ruling a vast empire",
    "creating a world wonder",
    "enduring a great tragedy",
    "their neutral rationality",
    "their warm hospitality",
    "a culture of secrecy",
    "non-hierarchical relationships",
    "plainly stating their intentions",
    "their sense of duty to each other",
    "resisting a brutal ruling order",
    "creating historic works of art",
    "strict adherence to the law",
    "their commercial success",
    "setting cultural trends",
    "their traditional ways",
    "inventing the future",
    "losing a great war",
];

export const beliefOptions: CharacterTrait[] = [
    {
        title: "order",
        description: `You have no patience for lawbreakers or people who don’t conform to "normal" behavior.`,
        example: "Stop right there, criminal scum.",
    },
    {
        title: "justice",
        description:
            "It is your duty to deliver righteousness and fairness in the world.",
        example: "I must ensure equitable and just outcomes for everyone.",
    },
    {
        title: "heroism",
        description: "You don’t stand idly by when someone is in danger.",
        example: "Courage is everything. Always take charge.",
    },
    {
        title: "compassion",
        description: "You believe people deserve mercy and safety",
        example: "I know it will delay us, but we should help this stranger first.",
    },
    {
        title: "generosity",
        description: "You cherish the opportunity to give to those in need",
        example: "Life gives abundantly, so I will too.",
    },
    {
        title: "pleasure",
        description:
            "You seek comfort and joy, and believe people should enjoy being alive.",
        example: "What’s the point of living if we’re not enjoying ourselves?",
    },
    {
        title: "pragmatism",
        description: "You value logic and efficiency above other concerns.",
        example: "It would be irrational to fight. We should negotiate.",
    },
    {
        title: "honor",
        description: "You believe in a code, and it's your duty to uphold it.",
        example: "I made a promise, and I must fulfill it at all costs.",
    },
    {
        title: "power",
        description: "You think those who are strong deserve to make the rules.",
        example: "The only law that matters is the law of force.",
    },
    {
        title: "salvation",
        description:
            "Making yourself and others righteous in the eyes of the true god(s) is the highest calling.",
        example: "Have you considered your immortal soul today?",
    },
    {
        title: "the ends",
        description:
            "You don’t care what it takes, as long as you get where you're going.",
        example: "Sure, a lot of people got eaten, but it was worth it!",
    },
];

export const flawOptions: CharacterTrait[] = [
    {
        example: "There's no way I'm going in first. Someone else should do it.",
        title: "fearful",
        description:
            "You shy away from danger and are often the last to act in a confrontation.",
    },
    {
        example: "I won't rest until I rule every inch of this world.",
        title: "megalomaniac",
        description: "You have delusional fantasies of wealth or power.",
    },
    {
        example: "Ooh... what does this big red button do?",
        title: "foolish",
        description:
            "Everyone thinks it’s a silly idea. That's exactly why you do it.",
    },
    {
        example: "Hey — want to smell a funny joke?",
        title: "impish",
        description:
            "You often crack jokes, make rude gestures, or behave crudely in front of others.",
    },
    {
        example: "...",
        title: "oblivious",
        description:
            "You often don’t see what’s right in front of you, even if it has fangs.",
    },
    {
        example: "If it's not bolted down, they didn't really want to keep it",
        title: "thief",
        description: "You steal. Everything.",
    },
    {
        example: "That dark alley looks fun. I'll be back in a bit.",
        title: "hedonist",
        description:
            "Your pursuit of pleasure causes you to ignore more pressing matters.",
    },
    {
        example: "Yes, it's true. I'm very famous where I'm from.",
        title: "liar",
        description: "You tell tall tales and love to deceive people.",
    },
    {
        example: "Wow. That's a lot of tigers. Time to go pet the big kitties!",
        title: "reckless",
        description:
            "You charge into situations without regard for safety or reason.",
    },
    {
        example: "Nobody has stepped on my shoe and lived to tell about it.",
        title: "wrathful",
        description:
            "You are unrestrained in your use of violence and react disproportionately to threats.",
    },
    {
        example: "Magic mirror on the wall, who's the best one of them all?",
        title: "vain",
        description:
            "You care too deeply about how you are perceived by others and change your behavior to suit them.",
    },
];

export const dreamOptions = [
    "returning to my hometown as a renowned hero",
    "freeing myself from a gang that wants me dead",
    "getting revenge on someone who wronged me",
    "finding a corner of the world to make my own",
    "publishing a book that's found in every home",
    "sparking an idea that transforms the world",
    "becoming the greatest scholar in my field",
    "recovering a stolen artifact for my people",
    "stealing from the rich to give to the poor",
    "having my name spoken by my leader",
    "meeting my parents for the first time",
    "spreading my ideal across the land",
    "overturning a corrupt government",
    "producing a timeless work of art",
    "becoming tremendously wealthy",
    "finding the source of eternal life",
    "becoming a leader of my nation",
    "becoming a notorious gambler",
    "making every stranger smile",
    "becoming a master artisan",
    "dying an honorable death",
    "mapping the entire world",
    "meeting the grim reaper",
    "pulling off the big score",
    "traveling to the stars",
    "becoming a celebrity",
    "meeting my god(s)",
    "killing my past",
];
