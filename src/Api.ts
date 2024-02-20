import axios from "axios";

export const getUser = async () => {
    const response = await axios.get("https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28", {
        headers: {
          Authorization: `Bearer ${import.meta.env.APP_GITHUB_ACCESS_TOKEN}`,
        },
      });
      return response.data;
    }

// const fetchUsers = useCallback(async () => {
//     const response = await fetch(" https://developer.github.com/v3/users/", {
//       headers: {
//         Authorization: `Bearer ${import.meta.env.APP_GITHUB_ACCESS_TOKEN}`,
//       },
//     });
//     return response.json();
//   }, []);