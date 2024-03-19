import { getManyRoles, getManyUserSheets } from "@/api";
import CharacterSheetsPage from "@/content/(user)/sheets/CharacterSheetsPage";

const CharacterSheets = async () => {
    const sheets = await getManyUserSheets({
        name: "",
        roleIds: [],
        sortBy: "createdAt",
    });

    const roles = await getManyRoles();

    return <CharacterSheetsPage sheets={sheets} roles={roles} />;
};

export default CharacterSheets;
