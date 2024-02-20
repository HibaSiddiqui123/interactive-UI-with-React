import { Users } from "./types/user";
import {
  Avatar,
  List,
  ListItem,
  ListItemContent,
  ListItemDecorator,
  Typography,
} from "@mui/joy";

type UserListProps = {
  users: Users;
};

export const UserList = ({ users }: UserListProps) => {
    if (!users || !Array.isArray(users)) {
        return <div>No users found</div>;
      }
  return (
    <List>
      {users.map((user) => (
        <ListItem key={user.id}>
          <ListItemDecorator sx={{ marginRight: 1 }}>
            <Avatar src={user.avatar_url} />
          </ListItemDecorator>
          <ListItemContent>
            <Typography level="title-md">{user.login}</Typography>
            <Typography level="body-xs">{user.url}</Typography>
          </ListItemContent>
        </ListItem>
      ))}
    </List>
  );
};