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

export type EventType = {
  id: string;
  name: string;
  location: string;
  date: Date;
  link: string;
  image: string;
  logo?: string;
};

export type NewsLetterFormType = {
  name: string;
  email: string;
};
