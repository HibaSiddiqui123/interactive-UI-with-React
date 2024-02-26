import axios from "axios";
import { Users } from "../types/user";
import { userDetails } from "../types/modal";


const getUsers = async () => {
    const response = await axios.get<Users>("https://api.github.com/users", {
      headers: {
        Authorization: `Bearer ${import.meta.env.APP_GITHUB_ACCESS_TOKEN}`,
      },
    });
    return response.data;
};

const getUserData = async (username:string) => {
  const response = await axios.get<userDetails>(`https://api.github.com/users/${username}`, {
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
  searchUsers,
  getUserData
}

export default UserApis