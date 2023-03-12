import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { FC } from 'react';
import { Fragment } from 'react';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Events', href: '/events', current: false },
  { name: 'CFPs', href: '/cfps', current: false },
  { name: 'Hackthons', href: '/hackathons', current: false },
];

const Navbar: FC = () => {
  return (
    <div className="fixed top-0 z-20 w-full bg-base-100 py-2 shadow-md shadow-base-content/30 supports-[backdrop-filter:blur(0px)]:bg-base-100/50 supports-[backdrop-filter:blur(0px)]:backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-2 py-2 text-lg md:text-xl">
        <Disclosure as="nav" className="">
          {({ open }) => (
            <>
              <div className="relative mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <Link href="/" className="font-mono text-3xl">
                      {'<Vibey/>'}
                    </Link>
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="absolute ml-80 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-8 w-8"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-8 w-8 text-white"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <Link href="/" className="font-mono text-3xl xl:mr-20">
                      {'<Vibey/>'}
                    </Link>
                    <div className="absolute mr-60 flex flex-shrink-0 "></div>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="ml-40 flex space-x-12">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="
                              rounded-md px-3 py-2 text-base font-medium  hover:bg-gray-700 hover:text-white"
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
                </div>
              </div>
              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className=" block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Navbar;
