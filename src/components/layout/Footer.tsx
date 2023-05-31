import { Logo } from '@/components';
import IconLink from '@/components/links/IconLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import VercelLogo from '@/Icons/VercelLogo';

import { useRouter } from 'next/router';
import { FC } from 'react';
import { BsDiscord } from 'react-icons/bs';
import { RiGithubFill, RiMailLine, RiTwitterFill } from 'react-icons/ri';

const Footer: FC = () => {
  const router = useRouter();
  if (router.pathname === '/dashboard') return null;

  return (
    <section className="py-10">
      <div className="layout mx-auto">
        <hr className="border-foreground/30 pb-5" />

        <div className="flex flex-col items-center justify-between gap-4">
          <Logo />

          <ul className="flex items-center space-x-3">
            <li>
              <IconLink
                variant="outline"
                href="https://twitter.com/vibeydotlive"
                icon={RiTwitterFill}
              />
            </li>
            <li>
              <IconLink
                variant="outline"
                href="https://discord.gg/erHegt9UTf"
                icon={BsDiscord}
              />
            </li>
            <li>
              <IconLink
                variant="outline"
                href="mailto:unikonf.org@gmail.com"
                icon={RiMailLine}
              />
            </li>

            <li>
              <IconLink
                variant="outline"
                href="https://github.com/UniKonf/vibey"
                icon={RiGithubFill}
              />
            </li>
          </ul>

          <p className="text-center">
            Thanks to all the awesome contributors to maintain{' '}
            <UnstyledLink
              href="https://github.com/UniKonf/vibey"
              className="text-color-pink hover:underline"
            >
              Vibey
            </UnstyledLink>
            . Don't forget to leave a star 🌟
          </p>

          <p className="w-full text-center text-sm md:w-auto">
            © Copyright {new Date().getFullYear()}, All Rights Reserved by Vibey
          </p>

          <VercelLogo />
        </div>
      </div>
    </section>
  );
};

export default Footer;
