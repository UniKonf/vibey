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
                  href="https://discord.gg/Ryh2Mpxcnc"
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

            <p className="mt-8 w-full text-center text-sm md:order-2 md:mt-0 md:w-auto">
              © Copyright {new Date().getFullYear()}, All Rights Reserved by Vibey
            </p>
          </div>
        </div>
        <p className="mt-4 text-center">
          Thanks to all contributers to maintain this. 🙏 ❤️‍🔥 You can contribute at{' '}
          <UnstyledLink
            href="https://github.com/UniKonf/vibey"
            className="text-primary"
          >
            UniKonf/vibey
          </UnstyledLink>
          .
        </p>
        <div className="mt-4 flex justify-center">
          <VercelLogo />
        </div>
      </section>
    );
  };

  export default Footer;
