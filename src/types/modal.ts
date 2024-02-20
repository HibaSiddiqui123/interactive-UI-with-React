
export type modal={
  user: userDetails;
  onClose: () => void;

}
export type userDetails={
    avatar_url: string | undefined;
    username: string;
    followers: number;
    following: number;
    picture: string;
    location: string;
    fullName: string;
  
}