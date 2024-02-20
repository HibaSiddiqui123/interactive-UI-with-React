import { Box, CircularProgress, Input } from "@mui/joy";
import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import userStore from "./store/userStore";
import { useStore } from "@tanstack/react-store";
import { Users } from "./types/user";
import { Search as SearchIcon } from "@mui/icons-material";
import { UserList } from "./UserList";
import { getUser } from "./Api";

function App() {
  const { list, listLoading } = useStore(userStore, (state) => state);

  const [searchQuery, setSearchQuery] = useState("");
  const debounceSearchQuery = useDebounce(searchQuery, 1000);

  const searchUsers = useCallback(async () => {
    const response = await fetch(
      `https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28#search-users${searchQuery}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.APP_GITHUB_ACCESS_TOKEN}`,
        },
      }
    );
    return response.json();
  }, [debounceSearchQuery]);

  const fetchUsers = useCallback(async () => {
    const response = await getUser();
    return response.json();
  }, []);

  const handleQuery = useCallback(async () => {
    userStore.setState((state) => ({ ...state, listLoading: true }));
    let list: Users = [];
    if (searchQuery.trim() !== "") {
      const response = await searchUsers();
      console.log(response);
      list = response.items;
    } else {
      list = await fetchUsers();
    }
    userStore.setState((state) => ({
      ...state,
      list,
      listLoading: false,
    }));
  }, [fetchUsers, searchQuery, searchUsers]);

  useEffect(() => {
    handleQuery();
  }, [handleQuery]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "calc(100dvh - 64px)",
          rowGap: 2,
          padding: 4,
        }}
      >
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          startDecorator={
            listLoading ? <CircularProgress size="sm" /> : <SearchIcon />
          }
        />
        <Box
          sx={{
            flexGrow: 1,
            flexShrink: 1,
            overflowY: "auto",
          }}
        >
          <UserList users={list} />
        </Box>
      </Box>
    </>
  );
}

export default App;