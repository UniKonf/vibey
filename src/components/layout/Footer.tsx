import Logo from '../Logo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';

const Footer: FC = () => {
  const router = useRouter();
  if (router.pathname === '/dashboard') return null;

  return (
    <section className="pt-1 md:pt-10 bg-neutral-200 dark:bg-zinc-900">
      <div className="layout">
        <div className="mx-auto w-11/12 justify-center gap-14 md:flex">
          <div className="mt-16 basis-1/2 md:mt-0">
            <Logo href="/" className="text-3xl">
              {}
            </Logo>
            <div className="">
              <p className=" mt-5">
                <span className="text-color-pink">
                  {' '}
                  Find Your Next Developer Event!
                </span>
              </p>
            </div>
          </div>

          <div className="mt-10 basis-1/3 md:mt-0">
            <h2 className="text-2xl font-bold text-color-pink md:text-center md:text-lg">
              Latest
            </h2>
            <ul className="md:text-md m-0 mt-4 list-none text-lg font-medium md:mt-6 md:text-center">
              <li>
                <Link
                  href="/events"
                  className="relative w-max transition-all duration-200 after:absolute after:-bottom-1 after:right-0 after:h-[2px] after:w-0 after:bg-base-content after:transition-all after:duration-200 hover:after:left-0 hover:after:right-auto hover:after:w-full hover:after:bg-white"
                >
                  Events
                </Link>
              </li>
              <li className="my-6">
                <Link
                  href="/hackathons"
                  className="relative w-max transition-all duration-200 after:absolute after:-bottom-1 after:right-0 after:h-[2px] after:w-0 after:bg-base-content after:transition-all after:duration-200 hover:after:left-0 hover:after:right-auto hover:after:w-full hover:after:bg-white "
                >
                  Hackathon
                </Link>
              </li>
              <li className="my-6">
                <Link
                  href="/cfps"
                  className=" relative w-max transition-all duration-200 after:absolute after:-bottom-1 after:right-0 after:h-[2px] after:w-0 after:bg-base-content after:transition-all after:duration-200 hover:after:left-0 hover:after:right-auto hover:after:w-full hover:after:bg-white "
                >
                  CFPs
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-16 basis-1/3 md:mt-0">
            <h2 className="text-2xl font-bold text-color-pink md:text-center md:text-lg">
              Quick Links
            </h2>
            <ul className="md:text-md m-0 mt-4 list-none text-lg font-medium md:mt-6 md:text-center">
              <li>
                <Link
                  href="/about"
                  className="relative w-max transition-all duration-200 after:absolute after:-bottom-1 after:right-0 after:h-[2px] after:w-0 after:bg-base-content after:transition-all after:duration-200 hover:after:left-0 hover:after:right-auto hover:after:w-full hover:after:bg-white"
                >
                  About Us
                </Link>
              </li>
              <li className="my-6">
                <Link
                  href="/contact"
                  className="  relative w-max transition-all duration-200 after:absolute after:-bottom-1 after:right-0 after:h-[2px] after:w-0 after:bg-base-content after:transition-all after:duration-200 hover:after:left-0 hover:after:right-auto hover:after:w-full hover:after:bg-white"
                >
                  Contact Us
                </Link>
              </li>
              <li className="my-6">
                <Link
                  href="/privacy"
                  className="text-center relative w-max transition-all duration-200 after:absolute after:-bottom-1 after:right-0 after:h-[2px] after:w-0 after:bg-base-content after:transition-all after:duration-200 hover:after:left-0 hover:after:right-auto hover:after:w-full hover:after:bg-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-16 basis-1/3 md:mt-0">
            <h2 className="text-2xl font-bold text-color-pink md:text-center md:text-lg">
              Socials
            </h2>
            <ul className="m-0 md: sm:flex-col md:mt-[3rem] lg:ml-[4.5rem] list-none gap-3 font-medium md:mt-6 md:justify-center flex flex-row p-0">
              <li className="md:mt-[-3.5rem]">
                <Link
                  href="https://github.com/UniKonf/vibey"
                  className="p-3 text-center text-3xl hover:text-blue-400"
                  target="_blank"
                  aria-label="Visit us on GitHub"
                >
                  <AiOutlineGithub aria-hidden="true" />
                </Link>
              </li>
              <li className="md:mt-[-3.5rem]">
                <Link
                  href="https://twitter.com/vibeydotlive"
                  className="px-3 pb-4 text-3xl hover:text-blue-400"
                  target="_blank"
                  aria-label="Visit us on Twitter"
                >
                  <AiOutlineTwitter aria-hidden="true" />
                </Link>
              </li>
              <li className="md:mt-[-3.5rem]">
                <Link
                  href="https://discord.gg/erHegt9UTf"
                  className="px-3 pb-4 pt-3 text-3xl hover:text-indigo-500"
                  target="_blank"
                  aria-label="Visit us on Discord"
                >
                  <BsDiscord aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-5 border-base-content/30" />
        <div className="mx-auto mt-5 flex w-11/12 items-center justify-center">
          <div className="text-neutral-700 dark:text-neutral-400">
            Vibey © {new Date().getFullYear()}. All Rights Reserved.
          </div>
          {/* <div className=" basis-1/2 text-end">
            <Link href="/terms" className="text-sm font-light hover:underline ">
              Terms & Condition
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Footer;
