import { type AxiosError } from "axios";

import api from "@/api";
import { type User } from "@/types/data";
import { type PrismaClientKnownRequestError } from "@/types/data/runtime/library";

const signUpUser = async (username: User["username"], password: User["password"]) => {
    return await new Promise((resolve, reject) => {
        api.post("/api/signup", { username, password })
            .then((result) => {
                resolve(result);
            })
            .catch((error) => {
                const { response } =
                    error as AxiosError<PrismaClientKnownRequestError>;

                if (response) {
                    const { code } = response.data;

                    if (code === "P2002") {
                        reject(new Error("Username already taken"));
                    }
                }
            });
    });
};

export default signUpUser;
