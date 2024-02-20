import { Store } from "@tanstack/react-store";
import { Users } from "../types/user";

type UserStoreT = {
  list: Users;
  listLoading: boolean;
};

const initialState: UserStoreT = {
  list: [],
  listLoading: false,
};

const userStore = new Store(initialState);

export default userStore;