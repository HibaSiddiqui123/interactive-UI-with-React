import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  Typography,
} from "@mui/joy";
import { useStore } from "@tanstack/react-store";
import userStore from "../../../../store/userStore";
import { useState } from "react";
import UserDetailModal, { UserDetailModalProps } from "../../modal/UserDetailModal";



export const UserList = () => {
  const { list } = useStore(userStore, (state) => state);
  const [modal, setModal] = useState<UserDetailModalProps>({
    open: false,
    userId: 0,
    onClose: () => setModal(prev => ({...prev, open: false}))
  })


  return (
    <>
      <List>
        {list.map((user) => (
          <ListItem key={user.id}>
            <ListItemButton onClick={() => setModal(prev => ({...prev, open: true, userId: user.id}))}>
              <ListItemDecorator sx={{ marginRight: 1 }}>
                <Avatar src={user.avatar_url} />
              </ListItemDecorator>
              <ListItemContent>
                <Typography level="title-md">{user.login}</Typography>
                <Typography level="body-xs">{user.url}</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <UserDetailModal {...modal} />
    </>
  );
};