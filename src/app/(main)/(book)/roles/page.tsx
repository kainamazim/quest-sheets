import { getManyRoles } from "@/api";
import BookRolesPage from "@/content/(book)/roles/BookRolesPage";

const BookRoles = async () => {
    const roles = await getManyRoles();
    return <BookRolesPage roles={roles} />;
};

export default BookRoles;
