  import IconLink from '@/components/links/IconLink';
  import UnstyledLink from '@/components/links/UnstyledLink';

import VercelLogo from '@/Icons/VercelLogo';

import Link from 'next/link';
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
        <hr className="border-base-content/30 pb-5" />

        <div className="flex flex-wrap items-center justify-between">
          <UnstyledLink
            href="/"
            className="text-content-clr ml-1 flex items-center font-mono  text-xl"
          >
            {'<Vibey/>'}
          </UnstyledLink>

          <ul className="flex items-center space-x-3 md:order-3">
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
        </div>
      </div>
      </section>
    );
  };

export default Footer;
