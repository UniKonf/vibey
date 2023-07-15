interface SocialMediaType {
  name: string;
  link: string;
}

interface SpeakerType {
  name: string;
  profile: string;
  designation: string;
  socials: SocialMediaType[];
}

interface AddressType {
  isOnline: boolean;
  location: string;
}
export interface EventType {
  name: string;
  slug: string;
  organizer: string;
  description: string;
  address: AddressType;
  image: string;
  date: Date;
  duration: number;
  tags: string[];
  speakers: SpeakerType;
  requiresTicket: boolean;
  sponsors: string[];
}
