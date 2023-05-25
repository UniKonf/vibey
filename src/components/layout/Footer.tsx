  import IconLink from '@/components/links/IconLink';
  import UnstyledLink from '@/components/links/UnstyledLink';

  import VercelLogo from '@/Icons/VercelLogo';

  import { useRouter } from 'next/router'
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

        <div className="mt-4 text-center">
        <p className="pb-4">
          <a href="/contact" className="text-primary hover:underline px-2">
            Contact
          </a>{' '}
          |{' '}
          <a href="/about" className="text-primary hover:underline px-2">
            About
          </a>{' '}
          |{' '}
          <a href="/terms" className="text-primary hover:underline px-2">
            Terms &amp; Conditions
          </a>{' '}
          |{' '}
          <a href="/privacy" className="text-primary hover:underline px-2">
            Privacy Policy
          </a>
        </p>
        <p className="mt-2">
          Thanks to all contributors for maintaining this. 🙏 ❤️‍🔥 You can
          contribute at{' '}
          <a href="https://github.com/UniKonf/vibey" className="text-primary">
            UniKonf/vibey
          </a>
          .
        </p>
        <p className="mt-8 w-full text-center text-sm md:order-2 md:mt-0 md:w-auto py-5">
          © {new Date().getFullYear()} Vibey. All Rights Reserved.
        </p>
      </div>
        <div className="mt-4 flex justify-center">
          <VercelLogo />
        </div>
      </section>
    );
  };

  export default Footer;
