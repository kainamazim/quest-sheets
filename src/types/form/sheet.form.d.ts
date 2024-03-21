export interface CharacterAppearance {
    body: string;
    face: string;
    vibe: string;
    clothing: string;
    movement: string;
}

export interface CharacterHome {
    short_description: string;
    peculiarity: string;
}

export interface CharacterProfile {
    name: string;
    pronoun: string;
    age: number | null;
    height: number | null;
    appearance: CharacterAppearance;
    home: CharacterHome;
    belief: string;
    flaw: string;
    dream: string;
    roleId: number | null;
}
