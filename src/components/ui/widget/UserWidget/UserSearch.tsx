import { useCallback, useEffect, useState } from "react";
import { Box, CircularProgress, Input } from "@mui/joy";
import { Search as SearchIcon } from "@mui/icons-material";
import { useStore } from "@tanstack/react-store";
import { useDebounce } from "@uidotdev/usehooks";
import { Users } from "../../../../types/user";
import UserApis from "../../../../apis/UserApis";
import userStore from "../../../../store/userStore";

export const UserSearch = () => {
  const { listLoading } = useStore(userStore, (state) => state);

  const [searchQuery, setSearchQuery] = useState("");
  const debounceSearchQuery = useDebounce(searchQuery, 1000);

  const handleQueryCallback = useCallback(async () => {
    userStore.setState((state) => ({ ...state, listLoading: true }));
    let list: Users = [];
    if (debounceSearchQuery.trim() !== "") {
      const response = await UserApis.searchUsers(debounceSearchQuery);
      console.log(response);
      list = response.items;
    } else {
      const data = await UserApis.getUsers();
      list = data;
    }
    userStore.setState((state) => ({
      ...state,
      list,
      listLoading: false,
    }));
  }, [debounceSearchQuery, UserApis]);

  useEffect(() => {
    handleQueryCallback();
  }, [handleQueryCallback]);

  return (
    <Box sx={{display: "flex", py: 2, flexDirection: "column"}}>
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        startDecorator={
          listLoading ? <CircularProgress size="sm" /> : <SearchIcon />
        }
      />
    </Box>
  )
}