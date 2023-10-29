import api from "@/helpers/api";

import { User } from "@prisma/client";

const signUpUser = (username: User["username"], password: User["password"]) => {
  return api.post("/signup", { username, password });
};

export default signUpUser;
