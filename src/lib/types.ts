export interface EventInterface {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  link: string;
  socials: Array<{ name: string; link: string }>;
  themes: string[];
}
