interface AddressType {
  isOnline: boolean;
  location: string;
}
export interface HackathonType {
  name: string;
  slug: string;
  organizer: string;
  description: string;
  address: AddressType;
  image: string;
  date: Date;
  duration: number;
  tags: string[];
  link: string;
  logo: string;
}
