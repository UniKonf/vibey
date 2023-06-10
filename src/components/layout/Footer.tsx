
import VercelLogo from '@/Icons/VercelLogo';

import Image from "next/image";
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
               <Image width={200} height={200} src= "/static/Vibey-banner.png" alt="logo" className=" bg-transparent dark:hidden"/> 
               <Image width={200} height={200} src="/static/Vibey-banner.png" alt="logo" className="bg-transparent hidden dark:block"/>
            </Link>
            <p className=" mt-5">
            The One Spot for all tech Conference, Workshops and Events</p>
            <p className="text-primary">Find Your Next Developer Event
            </p>
         </div>
         <div className="mt-16 basis-1/3 md:mt-0">
            <h4 className="font-bold text-center text-primary">Latest</h4>
            <hr style={{ borderColor: '#ff5100'}}></hr>
            <ul className="list-none m-0 p-0 font-medium text-center justify-center">
               <li className="my-6">
                  <Link href="/https://jsconf.in/" className=" hover:underline">
                     Latest CFP
                  </Link>
               </li>
               <li  className="my-6">
                  <Link href="/" className="hover:underline ">
                  Hackathon
                  </Link>
               </li>
               <li  className="my-6">
                  <Link href="/" className=" hover:underline ">
                  Conference
                  </Link>
               </li>
            </ul>
         </div>
         <div className="mt-16 basis-1/3 md:mt-0">
            <h4 className="font-bold text-center text-primary">Quick Links</h4>
            <hr style={{ borderColor: '#ff5100'}}></hr>
            <ul className="list-none m-0 p-0 font-medium text-center justify-center">
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
                  <Link href="/privacy" className="hover:underline text-center">
                     Privacy Policy
                  </Link>
               </li>

            </ul>
         </div>
         <div className="mt-16 basis-1/3 md:mt-0">
         <h4 className="font-bold text-center text-primary">Socials</h4>
         <hr style={{ borderColor: '#ff5100'}}></hr>
            <ul className="list-none m-0 p-0 font-medium text-center justify-center">
               <li className="my-6">

                  <Link href="https://github.com/UniKonf/vibey" className="text-center hover:underline p-3">GitHub</Link>
               </li>
               <li className="my-6">

                  <Link href="https://twitter.com/vibeydotlive" className=" hover:underline px-3 pb-4">Twitter</Link>                 
               </li>
               <li className="my-6">

                  <Link href="https://discord.gg/erHegt9UTf" className=" hover:underline px-3 pt-3 pb-4">Discord</Link>
               </li>
            </ul>
         </div>
         
        </div>
      <div className="mt-12 mx-auto w-11/12 gap-14 flex">
         <div className=" basis-1/2 ">
            Vibey © {new Date().getFullYear()}. All Rights Reserved.
         </div>
         <div className=" basis-1/2 text-end">
            <Link href="/terms" className="hover:underline font-light text-sm ">Terms & Condition</Link>
         </div>
      </div>
      </div>
      <div className="mt-4 flex justify-center pl-">
        <VercelLogo />
      </div>
    </section>
  );
};

export default Footer;
