import { Modal, ModalClose, ModalDialog, Typography } from "@mui/joy"
import UserApis from "../../../../apis/UserApis"
import { useEffect, useState } from "react";
import { userDetails } from "../../../../types/modal";


export type UserDetailModalProps= {
  open: boolean,
  username: string,
  onClose: () => void
}

export const UserDetailModal = ({ open, onClose }: UserDetailModalProps) => {


  const [userData, setUserData] = useState<userDetails | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
        const userData = await UserApis.getUsers();
        setUserData(userData);
    }
    if (open) {
      fetchUserData();
    }
  }, [open]);
 
  return (
    <>
       (
        <Modal open={open} onClose={onClose}>
        <ModalDialog>
          <ModalClose />
            {userData ? (
              <>
                <img src={userData.avatar_url} alt="User Avatar" />
                <Typography>Username: {userData.username}</Typography>
                <Typography>Followers: {userData.followers}</Typography>
                <Typography>Following: {userData.following}</Typography>
                <Typography>Location: {userData.location}</Typography>
              </>
            ) : (
              <Typography>Loading...</Typography>
            )}
          </ModalDialog>
        </Modal>
      )
    </>
  );
};
