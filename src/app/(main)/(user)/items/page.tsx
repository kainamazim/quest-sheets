import CustomItemsPage from "@/content/(user)/items/CustomItemsPage";
import getItemsByFilter from "@/server/services/item/getItemsByFilter";

const CustomItems = async () => {
    const items = await getItemsByFilter({
        title: "",
        rarity: [],
        sortBy: "createdAt",
        author: "user",
    });

    return <CustomItemsPage items={items} />;
};

export default CustomItems;
