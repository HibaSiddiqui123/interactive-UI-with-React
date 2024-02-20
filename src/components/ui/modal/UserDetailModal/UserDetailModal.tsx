import { Modal, ModalClose, ModalDialog, Sheet, Typography } from "@mui/joy"
import { useState } from "react"
import { User } from "../../../../types/user"
import UserApis from "../../../../apis/UserApis"

export type UserDetailModalProps = {
  open: boolean,
  username: string,
  onClose: () => void
}

export const UserDetailModal = ({ open, username, onClose }: UserDetailModalProps) => {


  const user = 

  return (
    <Modal open={open} onClose={onClose}>
    <ModalDialog>
      <ModalClose />
      <Typography>{ user.login }</Typography>
      <Typography>{ user.email }</Typography>
    </ModalDialog>
  </Modal>)
}