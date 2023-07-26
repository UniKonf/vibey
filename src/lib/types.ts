export type SocialIconsNameType =
  | 'facebook'
  | 'github'
  | 'instagram'
  | 'linkedin'
  | 'link'
  | 'twitter'
  | 'youtube'
  | 'discord';

export interface EventInterface {
  id: number;
  title: string;
  description: string;
  endTime?: Date;
  startTime: Date;
  link: string;
  socials: Array<{ name: SocialIconsNameType; link: string }>;
  themes: string[];
}

export type SpeakerType = {
  name: string;
  profile: string;
  designation: string;
  socials: SocialMediaType[];
};

export type SocialMediaType = {
  name: string;
  link: string;
};

export type SearchType = {
  id: string;
  name: string;
  location: string;
  date: Date;
  link: string;
  image: string;
  logo?: string;
  details?: string;
  duration?: string;
  requiresTicket?: boolean;
  sponsors?: string[];
};
export type SingleEventType = {
  _id: string;
  name: string;
  slug: string;
  organizer: string;
  description: string;
  address: { isOnline: boolean; location: string };
  date: Date;
  duration: number;
  tags: string[];
  link: string;
  image: string;
  logo?: string;
  speakers?: SpeakerType[];
  requiresTicket?: boolean;
  sponsors?: string[];
};
export type HackathonDataType = {
  name: string;
  address: { isOnline: boolean; location: string };
  date: Date;
  tags: string[];
  link: string;
  image: string;
  logo?: string;
};

export type CfpDataType = {
  name: string;
  address: { isOnline: boolean; location: string };
  date: Date;
  tags: string[];
  link: string;
  image: string;
  logo?: string;
};
export type EventDataType = {
  slug: string;
  name: string;
  address: { isOnline: boolean; location: string };
  date: Date;
  tags: string[];
  link: string;
  image: string;
  logo?: string;
};

export type NewsLetterFormType = {
  email: string;
};

export type EventFormType = {
  name: string;
  description: string;
  date: Date;
  location: string;
  tags: string[];
  link: string;
  theme: string;
  linkedin: string;
  twitter: string;
};

export type InputObject = {
  element?: string;
  label: string;
  name: keyof EventFormType; // Use keyof EventFormType to ensure `name` matches the keys in EventFormType
  placeholder: string;
  divClassName?: string;
  type?: string; // You can specify a more specific type here if needed
};
