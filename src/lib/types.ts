import { SocialIconsNameType } from '../Icons/Social Icons';

export interface EventInterface {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  link: string;
  socials: Array<{ name: SocialIconsNameType; link: string }>;
  themes: string[];
}
