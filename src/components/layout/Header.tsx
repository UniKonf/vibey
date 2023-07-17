/* eslint-disable simple-import-sort/imports */
import clsxm from '@/lib/clsxm';
import { SettingsContext } from '@/lib/context/settings';

import { Auth } from '@/components/Auth/Auth';
import IconLink from '@/components/links/IconLink';
import NavLink from '@/components/links/NavLink';
import Logo from '@/components/Logo';

import React, { FC } from 'react';
import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import Backdrop from './Backdrop';

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Events', href: '/events' },
  { label: 'CFPs', href: '/cfps' },
  { label: 'Hackathons', href: '/hackathons' },
  { label: 'Contributors', href: '/contributors' },
];

interface Props {
  style: string;
  modal: null | 'menu' | 'auth';
  setModal: (modal: null | 'auth' | 'menu') => void;
  setStyle: (style: string) => void;
  closeMenu: () => void; // Add closeMenu prop
}

const Menubar: FC<Props> = ({
  style,
  modal,
  setModal,
  setStyle,
  closeMenu,
}) => {
  const { theme } = React.useContext(SettingsContext);
  return (
    <div
      className={`${
        theme === 'dark' ? 'bg-zinc-900' : 'bg-neutral-200'
      } absolute top-0 h-screen w-72 transition-all duration-300 ease-in-out md:hidden ${style}`}
    >
      <div className="flex h-full flex-col justify-around">
        <div className="flex flex-col gap-4 p-4">
          {navigation.map((option, index) => (
            <NavLink
              key={index}
              className="flex w-full items-center text-3xl"
              href={option.href}
              closeMenu={closeMenu} // Pass the closeMenu function as a prop
            >
              {option.label}
            </NavLink>
          ))}
          <div className="mt-4 ">
            <Auth
              buttonClass={`${theme === 'light' && 'text-black'}`}
              modal={modal}
              setModal={setModal}
              setStyle={setStyle}
            />
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-3xl">Connect with us</h1>
          <hr className="mt-2 border-neutral-700"></hr>
          <div className="mt-4 flex gap-2">
            <IconLink
              href="https://github.com/UniKonf/vibey"
              type="submit"
              aria-label="Visit us on Github"
              title="Github (External Link)"
              className="gap-2 rounded-full "
              icon={AiOutlineGithub}
            />
            <IconLink
              href="https://twitter.com/vibeydotlive"
              type="submit"
              aria-label="Visit us on Twitter"
              title="Twitter (External Link)"
              className="gap-2 rounded-full "
              icon={AiOutlineTwitter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Header() {
  const [modal, setModal] = React.useState<null | 'auth' | 'menu'>(null);
  const [style, setStyle] = React.useState('-right-72');

  // const [style, setMenuStyle] = React.useState('');
  // const [menuStyle, setStyle] = React.useState('');
  const { theme } = React.useContext(SettingsContext);

  const menuhandler = () => {
    setModal((p) => (p === 'menu' ? null : 'menu'));
    setStyle((p) => (p === '-right-72' ? 'right-0' : '-right-72'));
  };
  return (
    <>
      <header
        className={clsxm(
          'top-0 z-[60] flex w-screen items-center justify-between text-base-content',
          'transition-[background-color] duration-300 ease-in-out',
          'h-20',
          'fixed',
          'bg-black/[0.7] backdrop-saturate-[180%] supports-[backdrop-filter]:bg-black/60 supports-[backdrop-filter]:backdrop-blur-[20px]'
        )}
      >
        <div className="layout mx-auto flex h-full flex-wrap items-center justify-between gap-4 sm:flex md:flex-row">
          {/* logo */}

          <Logo
            href="/"
            className="absolute mr-auto text-2xl text-white sm:mr-0 md:relative"
          >
            {}
          </Logo>

          {/* navigation links */}
          <nav className="text-content-clr/70 hidden flex-wrap items-center justify-center gap-[2vw] pl-4 tracking-wide text-white md:flex">
            {navigation.map((link, index) => (
              <NavLink key={index} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* github icons */}
          <IconLink
            href="https://github.com/UniKonf/vibey"
            type="submit"
            aria-label="Visit us on Github"
            title="Github (External Link)"
            className="ml-auto hidden gap-2 rounded-full md:flex"
            icon={AiOutlineGithub}
          />

          {/* get started button */}
          <div className="ml-auto hidden sm:flex md:ml-0">
            <Auth modal={modal} setModal={setModal} />
          </div>

          {/* menu open and close button */}
          <button
            className="h1 text-content-clr/50 focus-visible:border-content-clr group absolute right-0 z-50 flex aspect-square h-12 flex-col items-center justify-center rounded-full text-white focus:outline-none sm:relative md:hidden"
            onClick={menuhandler}
          >
            <span className="sr-only">Menu</span>

            {/* Hamburger menu */}
            <div className="relative flex flex-col gap-1.5">
              <div
                className={`w-8 rounded-xl border-2 transition-all duration-300 ease-in-out ${
                  modal === 'menu' && 'absolute rotate-45'
                } ${
                  theme === 'light' && modal === 'menu'
                    ? 'border-neutral-900'
                    : 'border-neutral-300'
                }`}
              ></div>
              <div
                className={`w-8 rounded-xl border-2 border-neutral-300 transition-all duration-300 ease-in-out ${
                  modal === 'menu' && '-translate-x-6 opacity-0'
                }`}
              ></div>
              <div
                className={`w-8 rounded-xl border-2 transition-all duration-300 ease-in-out ${
                  modal === 'menu' && 'absolute -rotate-45'
                } ${
                  theme === 'light' && modal === 'menu'
                    ? 'border-neutral-900'
                    : 'border-neutral-300'
                }`}
              ></div>
            </div>
          </button>
        </div>
        <Menubar
          style={style}
          modal={modal}
          setModal={setModal}
          setStyle={setStyle}
          closeMenu={menuhandler}
        />
        <Backdrop
          isDarkBg={true}
          isTransparent={true}
          isBlur={true}
          isGradient={true}
          isOpen={modal === 'menu'}
        />
      </header>
    </>
  );
}
