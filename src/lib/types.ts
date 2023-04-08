export type SocialIconsNameType =
  | 'facebook'
  | 'github'
  | 'instagram'
  | 'linkedin'
  | 'link'
  | 'twitter'
  | 'discord';

export interface EventInterface {
  id: number;
  title: string;
  description: string;
  endTime: string;
  startTime: string;
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
