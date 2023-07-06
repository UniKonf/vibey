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
  socials: {
    [key: string]: string;
  };
};

export type EventType = {
  id: string;
  name: string;
  location: string;
  date: Date;
  link: string;
  image: string;
  logo?: string;
  organizer: string;
  details?: string;
  speakers?: SpeakerType[];
  duration?: string;
  requiresTicket?: boolean;
  sponsors?: string[];
};

export type NewsLetterFormType = {
  name: string;
  email: string;
};
