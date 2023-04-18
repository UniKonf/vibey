import { SocialIconsNameType } from '../../lib/types';
import { ReactElement } from 'react';
import {
  BsDiscord,
  BsGithub,
  BsInstagram,
  BsLink,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs';

export const useSocialIcons = (): Record<SocialIconsNameType, ReactElement> => {
  return {
    facebook: <BsLinkedin />,
    github: <BsGithub />,
    instagram: <BsInstagram />,
    linkedin: <BsLinkedin />,
    twitter: <BsTwitter />,
    link: <BsLink />,
    discord: <BsDiscord />,
    youtube: <BsYoutube />,
  };
};
