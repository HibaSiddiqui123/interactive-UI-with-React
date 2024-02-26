import { Store } from "@tanstack/react-store";
import { Users } from "../types/user";

type UserStoreT = {
  list: Users;
};

const initialState: UserStoreT = {
  list: [],
};

const userStore = new Store(initialState);

export default userStore;