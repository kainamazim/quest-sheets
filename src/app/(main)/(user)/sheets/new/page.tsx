import NewSheetPage from "@/content/(user)/sheets/NewSheetPage";
import getAvailableItems from "@/services/item/getAvailableItems";
import getManyRoles from "@/services/role/getManyRoles";

const fetchData = async () => {
    const roles = await getManyRoles();

    const items = await getAvailableItems();

    return { roles, items };
};

const NewSheet = async () => {
    const { roles, items = [] } = await fetchData();

    return <NewSheetPage roles={roles} items={items} />;
};

export default NewSheet;
