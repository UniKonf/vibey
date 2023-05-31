import { Logo } from '@/components';
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
        <hr className="border-foreground/30 pb-5" />

        <div className="flex flex-col items-center justify-between gap-4">
          {/* logo */}
          <Logo />

          {/* social icons */}
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
        </div>
      </div>

      <div className="mt-4 text-center">
        {/* thanks contributors */}
        <p className="pb-4">
          Thanks to all the awesome contributors to maintain{' '}
          <UnstyledLink
            href="https://github.com/UniKonf/vibey"
            className="text-color-pink hover:underline"
          >
            Vibey
          </UnstyledLink>
          . Don't forget to leave a star 🌟
        </p>

        {/* inportant links */}
        <p className="">
          <Link
            href="/contact"
            className="px-2 text-color-pink hover:underline"
          >
            Contact
          </Link>{' '}
          |{' '}
          <Link href="/about" className="px-2 text-color-pink hover:underline">
            About
          </Link>{' '}
          |{' '}
          <Link href="/terms" className="px-2 text-color-pink hover:underline">
            Terms &amp; Conditions
          </Link>{' '}
          |{' '}
          <Link
            href="/privacy"
            className="px-2 text-color-pink hover:underline"
          >
            Privacy Policy
          </Link>
        </p>

        {/* copyrights */}
        <p className="mt-8 w-full py-5 text-center text-sm md:order-2 md:mt-0 md:w-auto">
          © {new Date().getFullYear()} Vibey. All Rights Reserved.
        </p>
      </div>

      {/* vercel */}
      <div className="mt-4 flex justify-center">
        <VercelLogo />
      </div>
    </section>
  );
};

export default Footer;
