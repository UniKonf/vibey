import clsxm from '@/lib/clsxm';

import { Logo } from '@/components';
import { Auth } from '@/components/Auth/Auth';
import Backdrop from '@/components/layout/Backdrop';
import IconLink from '@/components/links/IconLink';
import NavLink from '@/components/links/NavLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import React from 'react';
import { AiOutlineClose, AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

export const navigation = [
  { label: 'Events', href: '/events' },
  { label: 'CFPs', href: '/cfps' },
  { label: 'Hackathons', href: '/hackathons' },
];

export default function Header() {
  const [modal, setModal] = React.useState<null | 'auth' | 'menu'>(null);

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
        <div className="layout mx-auto flex h-full flex-wrap items-center gap-4 md:flex-row">
          {/* logo */}
          <Logo className="mr-auto text-white sm:mr-0" />

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
            className="ml-auto hidden gap-2 rounded-full md:flex"
            icon={AiOutlineGithub}
          />

          {/* get started button */}
          <div className="ml-auto hidden sm:flex md:ml-0">
            <Auth modal={modal} setModal={setModal} />
          </div>

          {/* menu open and close button */}
          <button
            className="h1 text-content-clr/50 focus-visible:border-content-clr group flex aspect-square h-12 flex-col items-center justify-center rounded-full text-white focus:outline-none md:hidden "
            onClick={() => setModal((p) => (p === 'menu' ? null : 'menu'))}
          >
            <span className="sr-only">Menu</span>
            {modal === 'menu' ? (
              <AiOutlineClose />
            ) : (
              <HiOutlineMenuAlt3 className="text-white" />
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
        className="w-full md:hidden"
      >
        <nav
          className={clsxm(
            'relative ml-auto mr-5 mt-20 flex w-max max-w-sm flex-col items-center justify-center gap-2 rounded-lg border-2 bg-white p-10 text-xl tracking-wide transition-transform duration-300 md:hidden'
          )}
        >
          {navigation.map((link, index) => (
            <div key={index} className="link-hover">
              <UnstyledLink onClick={() => setModal(null)} href={link.href}>
                {link.label}
              </UnstyledLink>
            </div>
          ))}
          <Auth modal={modal} setModal={setModal} buttonClass="text-black" />
        </nav>
      </Backdrop>
    </>
  );
}
