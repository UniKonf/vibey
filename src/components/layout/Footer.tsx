import VercelLogo from '@/Icons/VercelLogo';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

const Footer: FC = () => {
  const router = useRouter();
  if (router.pathname === '/dashboard') return null;

  return (
    <section className="py-10">
      <div className="layout mx-auto">
        <hr className="border-base-content/30 pb-5" />

        <div className="justify-content mx-auto w-11/12 gap-14 md:flex">
          <div className="mt-16 basis-1/2 md:mt-0">
            <Link href="/_document">
              <Image
                width={200}
                height={200}
                src="/static/Vibey-banner.png"
                alt="logo"
                className=" bg-transparent dark:hidden"
              />
              <Image
                width={200}
                height={200}
                src="/static/Vibey-banner.png"
                alt="logo"
                className="hidden bg-transparent dark:block"
              />
            </Link>
            <p className=" mt-5">
              The One Spot for all tech Conferences, Workshops and Events
            </p>
            <p className="text-primary">Find Your Next Developer Event</p>
          </div>
          <div className="mt-16 basis-1/3 md:mt-0">
            <h4 className="text-center font-bold text-primary">Latest</h4>
            <hr style={{ borderColor: '#ff5100' }}></hr>
            <ul className="m-0 list-none justify-center p-0 text-center font-medium">
              <li className="my-6">
                <Link href="/events" className=" hover:underline">
                  Events
                </Link>
              </li>
              <li className="my-6">
                <Link href="/hackathons" className="hover:underline ">
                  Hackathon
                </Link>
              </li>
              <li className="my-6">
                <Link href="/cfps" className=" hover:underline ">
                  CFPs
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-16 basis-1/3 md:mt-0">
            <h4 className="text-center font-bold text-primary">Quick Links</h4>
            <hr style={{ borderColor: '#ff5100' }}></hr>
            <ul className="m-0 list-none justify-center p-0 text-center font-medium">
              <li className="my-6">
                <Link href="/About" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li className="my-6">
                <Link href="/contact" className="  hover:underline">
                  Contact Us
                </Link>
              </li>
              <li className="my-6">
                <Link href="/privacy" className="text-center hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-16 basis-1/3 md:mt-0">
            <h4 className="text-center font-bold text-primary">Socials</h4>
            <hr style={{ borderColor: '#ff5100' }}></hr>
            <ul className="m-0 list-none justify-center p-0 text-center font-medium">
              <li className="my-6">
                <Link
                  href="https://github.com/UniKonf/vibey"
                  className="p-3 text-center hover:underline"
                  target="blank"
                >
                  GitHub
                </Link>
              </li>
              <li className="my-6">
                <Link
                  href="https://twitter.com/vibeydotlive"
                  className=" px-3 pb-4 hover:underline"
                  target="blank"
                >
                  Twitter
                </Link>
              </li>
              <li className="my-6">
                <Link
                  href="https://discord.gg/erHegt9UTf"
                  className=" px-3 pb-4 pt-3 hover:underline"
                  target="blank"
                >
                  Discord
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 flex w-11/12 gap-14">
          <div className=" basis-1/2 ">
            Vibey © {new Date().getFullYear()}. All Rights Reserved.
          </div>
          <div className=" basis-1/2 text-end">
            <Link href="/terms" className="text-sm font-light hover:underline ">
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
      <div className="pl- mt-4 flex justify-center">
        <VercelLogo />
      </div>
    </section>
  );
};

export default Footer;
