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
  date: string;
  startTime: string;
  time: string;
  link: string;
  socials: Array<{ name: SocialIconsNameType; link: string }>;
  themes: string[];
}
