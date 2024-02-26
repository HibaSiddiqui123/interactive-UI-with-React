import { Avatar, Modal, ModalClose, ModalDialog, Typography } from "@mui/joy"
import UserApis from "../../../../apis/UserApis"
import { useEffect, useState } from "react";
import { userDetails } from "../../../../types/modal";


export type UserDetailModalProps = {
  username?: string,
  open: boolean,
  onClose: () => void
}

export const UserDetailModal = ({ open, onClose, username }: UserDetailModalProps) => {


  const [userData, setUserData] = useState<userDetails | null>(null);
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    if (username) {
      const fetchUserData = async () => {
        setLoader(true);
        const userData = await UserApis.getUserData(username);
        setUserData(userData);
        setLoader(false);
      }
      fetchUserData();
    }
  }, [username]);

  return (
    <>
      (
      <Modal open={open} onClose={onClose}>
        <ModalDialog>
          <ModalClose />
          {!loader ?
            (userData !== null) &&
            (
              <>
                <Avatar src={userData.avatar_url} alt="User Avatar" size="lg" />
                <Typography>ID: {userData.id}</Typography>
                <Typography>Username: {userData.login}</Typography>
                <Typography>Fullname: {userData.name}</Typography>
                <Typography>Followers: {userData.followers}</Typography>
                <Typography>Following: {userData.following}</Typography>
                <Typography>Location: {userData.location}</Typography>
                <Typography>Public Repositories: {userData.public_repos}</Typography>
                <Typography>Public Gists: {userData.public_gists}</Typography>
              </>):(
              <Typography>Loading...</Typography>
            )}
        </ModalDialog>
      </Modal>
      )
    </>
  );
};
