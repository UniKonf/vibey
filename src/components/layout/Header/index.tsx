import clsxm from '@/lib/clsxm';

import Backdrop from '@/components/layout/Backdrop';
import ButtonLink from '@/components/links/ButtonLink';
import NavLink from '@/components/links/NavLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import * as React from 'react';
import { AiOutlineClose, AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const navigation = [
  { label: 'Events', href: '/events' },
  { label: 'CFPs', href: '/cfps' },
  { label: 'Hackthons', href: '/hackathons' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

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
        <div className="layout mx-auto flex h-full flex-wrap items-center md:flex-row md:justify-between">
          <UnstyledLink
            href="/"
            className="text-content-clr ml-1 flex items-center font-mono  text-xl"
          >
            {'<'}
            Vibey{'/>'}
          </UnstyledLink>
          <nav className="text-content-clr/70 hidden flex-wrap items-center justify-center gap-[2vw] tracking-wide md:flex">
            {navigation.map((link, index) => (
              <NavLink key={index} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <ButtonLink
            href="https://github.com/UniKonf/vibey"
            type="submit"
            className="hidden gap-2 rounded-full md:flex"
            leftIcon={AiOutlineGithub}
            leftIconClassName="text-lg"
          >
            Contribute
          </ButtonLink>
          <button
            className="h1 text-content-clr/50 focus-visible:border-content-clr group ml-auto flex aspect-square h-12 flex-col items-center justify-center rounded-full  text-white focus:outline-none md:hidden"
            onClick={() => setMenuOpen((p) => !p)}
          >
            <span className="sr-only">Menu</span>
            {menuOpen ? <AiOutlineClose /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </header>
      <Backdrop
        isBlur
        isGradient
        isDarkBg
        show={menuOpen}
        onClose={() => setMenuOpen(false)}
        className="md:hidden"
      >
        <nav
          className={clsxm(
            'absolute top-0 left-1/2 mt-20 flex w-max -translate-x-1/2 flex-col items-center justify-center gap-5 rounded-lg border-2 border-base-content/40 bg-base-100/80 p-16 text-3xl tracking-wide text-base-content shadow-lg shadow-base-100/90 transition-transform duration-300 md:static md:mr-auto md:ml-4 md:hidden md:border-l md:border-base-content',
            {
              'translate-y-0': menuOpen,
              'translate-y-[-100%]': !menuOpen,
            }
          )}
        >
          {navigation.map(
            (link, index) =>
              link != null && (
                <div key={index} className="link-hover">
                  <UnstyledLink
                    onClick={() => setMenuOpen(false)}
                    href={link.href}
                  >
                    {link.label}
                  </UnstyledLink>
                </div>
              )
          )}

          <ButtonLink
            href="/#events"
            onClick={() => setMenuOpen(false)}
            type="submit"
            className="mx-auto rounded-full"
          >
            Checkout Events
          </ButtonLink>
        </nav>
      </Backdrop>
    </>
  );
}
