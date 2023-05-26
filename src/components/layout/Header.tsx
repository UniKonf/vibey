import clsxm from '@/lib/clsxm';
import { SettingsContext } from '@/lib/context/settings';

import { Auth } from '@/components/Auth/Auth';
import Backdrop from '@/components/layout/Backdrop';
import IconLink from '@/components/links/IconLink';
import NavLink from '@/components/links/NavLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import React, { useContext } from 'react';
import { AiOutlineClose, AiOutlineGithub } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { RiGithubFill, RiMailLine, RiTwitterFill } from 'react-icons/ri';
import { SlEnvolopeLetter, SlEvent, SlTrophy } from 'react-icons/sl';

export const navigation = [
  { id: 1, label: '<Events />', href: '/events', icon: <SlEvent /> },
  { id: 2, label: '<CFPs />', href: '/cfps', icon: <SlEnvolopeLetter /> },
  { id: 3, label: '<Hackathons />', href: '/hackathons', icon: <SlTrophy /> },
];

export const socialLinks = [
  {
    id: 1,
    label: 'Twitter',
    href: 'ttps://twitter.com/vibeydotlive',
    icon: RiTwitterFill,
  },
  {
    id: 2,
    label: 'Discord',
    href: 'https://discord.gg/erHegt9UTf',
    icon: BsDiscord,
  },
  {
    id: 3,
    label: 'Mail',
    href: 'mailto:unikonf.org@gmail.com',
    icon: RiMailLine,
  },
  {
    id: 4,
    label: 'Github',
    href: 'https://github.com/UniKonf/vibey',
    icon: RiGithubFill,
  },
];

export default function Header() {
  const { theme } = useContext(SettingsContext);
  const [modal, setModal] = React.useState<null | 'auth' | 'menu'>(null);

  return (
    <>
      <header
        className={clsxm(
          'top-0 z-[60] flex w-screen items-center justify-between text-base-content',
          'h-16',
          'transition-[background-color] duration-300 ease-in-out',
          'fixed',
          'bg-base-100/95 backdrop-saturate-[180%] supports-[backdrop-filter]:bg-base-100/60 supports-[backdrop-filter]:backdrop-blur-[20px]'
        )}
      >
        <div className="layout xs: mx-auto flex h-full flex-wrap items-center justify-between gap-4 md:flex-row">
          <UnstyledLink
            href="/"
            className="text-content-clr ml-1 flex items-center font-mono  text-xl font-bold"
          >
            {'<Vibey/>'}
          </UnstyledLink>
          <nav className="text-content-clr/70 hidden flex-wrap items-center justify-center gap-[2vw] border-l-2 border-l-primary pl-4 tracking-wide md:flex">
            {navigation.map((link, index) => (
              <NavLink key={index} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <IconLink
            href="https://github.com/UniKonf/vibey"
            type="submit"
            className="ml-auto hidden gap-2 rounded-full md:flex"
            icon={AiOutlineGithub}
          />
          <Auth
            modal={modal}
            setModal={setModal}
            visibility="hidden md:block px-4 ml-auto md:ml-0 md:px-7 "
          />
          <button
            className="h1 text-content-clr/50 focus-visible:border-content-clr group flex aspect-square h-12 flex-col items-center justify-center rounded-full text-white focus:outline-none md:hidden"
            onClick={() => setModal((p) => (p === 'menu' ? null : 'menu'))}
          >
            <span className="sr-only">Menu</span>
            {modal === 'menu' ? (
              <AiOutlineClose
                className={theme === 'light' ? 'text-black' : ''}
              />
            ) : (
              <HiOutlineMenuAlt3
                className={theme === 'light' ? 'text-black' : ''}
              />
            )}
          </button>
        </div>
      </header>
      <Backdrop
        isBlur
        isGradient
        isDarkBg
        isOpen={modal === 'menu'}
        onRequestClose={() => setModal(null)}
        className="md:hidden"
      >
        {/* Menu Bar starts here */}
        <nav
          className={clsxm(
            'relative -mr-72 mt-20 flex w-max max-w-sm flex-col justify-center gap-2 rounded-lg py-10 px-8 text-xl tracking-wide transition-transform duration-300 md:hidden',
            theme === 'light' ? 'bg-base-100/80 ' : 'bg-stone-900'
          )}
        >
          {navigation.map((link, _) => (
            <div
              key={link.id}
              className="link-hover flex items-center rounded-lg py-2 px-3"
            >
              <div className={clsxm('mr-4', theme === 'dark' && 'text-white')}>
                {link.icon}
              </div>
              <UnstyledLink onClick={() => setModal(null)} href={link.href}>
                <div
                  className={clsxm('mr-4', theme === 'dark' && 'text-white')}
                >
                  {link.label}
                </div>
              </UnstyledLink>
            </div>
          ))}
          <div className="mt-1 mb-2">
            <hr
              className={clsxm(
                'border-1 border-solid border-neutral-300',
                theme === 'dark' && 'border-1 border-solid border-neutral-700'
              )}
            />
          </div>
          <Auth modal={modal} setModal={setModal} visibility="mx-auto" />
          <div className="mt-5 flex items-center justify-center">
            <ul className="flex items-center space-x-4 md:order-3">
              {socialLinks.map((social, _) => (
                <li key={social.id}>
                  <IconLink
                    className={clsxm(theme === 'dark' && 'bg-neutral-900')}
                    variant="outline"
                    href={social.href}
                    icon={social.icon}
                  />
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </Backdrop>
    </>
  );
}
