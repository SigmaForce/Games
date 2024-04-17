import { createHash } from "@/helpers/hash";
import Users from "@/libs/database/Users";
import { User } from "@prisma/client";

const UsersService = {
  signUp: async (data: Pick<User, "name" | "email" | "password">) => {
    const passwordHash = await createHash(data.password);
    if (!passwordHash) {
      throw new Error("Unable to create password hash.");
    }

    return Users.create({ ...data, password: passwordHash });
  },
};

export default UsersService;
