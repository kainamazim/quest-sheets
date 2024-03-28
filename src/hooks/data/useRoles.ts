import { useQuery } from "@tanstack/react-query";

import getRoles from "@/api/roles/getRoles";

const useRoles = () => {
    const { data: roles = [], isPending } = useQuery({
        queryKey: ["roles"],
        queryFn: async () => await getRoles(),
    });

    return { roles, isPending };
};

export default useRoles;
