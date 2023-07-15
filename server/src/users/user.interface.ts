interface SocialsType {
  name: string;
  link: string;
}
export interface UserType {
  name: string;
  email: string;
  password: string;
  image?: string;
  bio?: string;
  role?: string;
  socials?: SocialsType[];
}
