import CharacterSheetsPage from "@/content/(user)/sheets/CharacterSheetsPage";
import getManyRoles from "@/services/role/getManyRoles";
import getSheetsByFilter from "@/services/sheet/getSheetsByFilter";

const CharacterSheets = async () => {
    const sheets = await getSheetsByFilter({
        name: "",
        roleIds: [],
        sortBy: "createdAt",
    });

    const roles = await getManyRoles();

    return <CharacterSheetsPage sheets={sheets} roles={roles} />;
};

export default CharacterSheets;
