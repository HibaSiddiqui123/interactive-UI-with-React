
export type modal={
  user: userDetails;
  onClose: () => void;

}
export type userDetails={
    avatar_url: string | undefined;
    name: string;
    followers: number;
    following: number;
    login: string;
    location: string;
    id: number;
    public_repos: number;
    public_gists: number
  
}