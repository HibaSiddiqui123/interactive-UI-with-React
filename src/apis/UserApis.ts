import axios from "axios";
import { User, Users } from "../types/user";


const getUsers = async () => {
    const response = await axios.get<Users>("https://api.github.com/users", {
      headers: {
        Authorization: `Bearer ${import.meta.env.APP_GITHUB_ACCESS_TOKEN}`,
      },
    });
    return response.data;
};

const getUser = async (username: string) => {
    const response = await axios.get<User>(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.APP_GITHUB_ACCESS_TOKEN}`,
      },
    });
    return response.data;
};


export type SearchUsersResponse = {
  items: Users
}

const searchUsers = async (searchQuery: string) => {
  const response = await axios.get<SearchUsersResponse>(
    `https://api.github.com/search/users?q=${searchQuery}`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.APP_GITHUB_ACCESS_TOKEN}`,
      },
    }
  );
  return response.data;      
      
}

const UserApis = {
  getUsers,
  getUser,
  searchUsers
}

export default UserApis