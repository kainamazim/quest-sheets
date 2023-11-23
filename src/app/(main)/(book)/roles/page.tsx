import BookRolesPage from "@/content/(book)/roles/BookRolesPage";
import getManyRoles from "@/services/role/getManyRoles";

const BookRoles = async () => {
    const roles = await getManyRoles();
    return <BookRolesPage roles={roles} />;
};

export default BookRoles;
