import { type User } from "@prisma/client";
import { type PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { type AxiosError } from "axios";

import api from "@/api";

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
