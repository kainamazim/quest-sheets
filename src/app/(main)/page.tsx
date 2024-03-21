import HomePage from "@/content/HomePage";
import getManyRoles from "@/server/services/role/getManyRoles";

const Home = async () => {
    const roles = await getManyRoles();
    return <HomePage roles={roles} />;
};

export default Home;
