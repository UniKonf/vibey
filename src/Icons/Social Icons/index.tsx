import { SocialIconsNameType } from '../../lib/types';
import { IconType } from 'react-icons';
import { BsDiscord } from 'react-icons/bs';
import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiLinksFill,
  RiTwitterFill,
  RiYoutubeFill,
} from 'react-icons/ri';

export const useSocialIcons = (): Record<SocialIconsNameType, IconType> => {
  return {
    facebook: RiFacebookFill,
    github: RiGithubFill,
    instagram: RiInstagramFill,
    linkedin: RiLinkedinFill,
    twitter: RiTwitterFill,
    link: RiLinksFill,
    discord: BsDiscord,
    youtube: RiYoutubeFill,
  };
};
