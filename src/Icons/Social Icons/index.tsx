import { SocialIconsNameType } from '../../lib/types';
import DiscordIcon from './Discord';
import FacebookIcon from './FacebookIcon';
import GithubIcon from './GithubIcon';
import InstagramIcon from './InstagramIcon';
import LinkedInIcon from './LinkedInIcon';
import LinkIcon from './LinkIcon';
import TwitterIcon from './TwitterIcon';
import { ReactElement } from 'react';

export const useSocialIcons = (): Record<SocialIconsNameType, ReactElement> => {
  return {
    facebook: <FacebookIcon />,
    github: <GithubIcon />,
    instagram: <InstagramIcon />,
    linkedin: <LinkedInIcon />,
    twitter: <TwitterIcon />,
    link: <LinkIcon />,
    discord: <DiscordIcon />,
  };
};
