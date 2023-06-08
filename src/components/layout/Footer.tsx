

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
         <div className="mt-16 basis-1/2 md:mt-0">
            <h4 className="font-bold text-center ">Latest</h4>
            <hr style={{ borderColor: '#ff5100'}}></hr>
            <ul className="list-none m-0 p-0 font-medium text-center">
               <li className="py-4 pr-1 pl-6 font-medium">
                  <Link href="/https://jsconf.in/" className="px-2  hover:underline text-center">
                     Conference
                  </Link>
               </li>
               <li className="py-4 pr-1 pl-6 font-medium">
                  <Link href="/" className="px-2  hover:underline text-center">
                     Latest CFP
                  </Link>
               </li>
               <li className="py-4 pr-1 pl-6 font-medium">
                  <Link href="/" className="px-2  hover:underline text-center">
                      Hackathon
                  </Link>
               </li>
            </ul>
         </div>
         <div className="mt-16 basis-1/2 md:mt-0">
            <h4 className="font-bold text-center">Company</h4>
            <hr style={{ borderColor: '#ff5100'}}></hr>
            <ul className="list-none m-0 p-0 font-medium text-center">
               <li className="py-4 pr-1 pl-6 font-medium">
                  <Link href="/About" className="px-2  hover:underline text-center">
                     About Us
                  </Link>
               </li>
               <li className="py-4 pr-1 pl-6 font-medium">
                  <Link href="/contact" className="px-2  hover:underline text-center">
                     Contact Us
                  </Link>
               </li>
               <li className="py-4 pr-1 pl-6 font-medium">
                  <Link href="/privacy" className="p-2  hover:underline text-center">
                     Privacy Policy
                  </Link>
               </li>

            </ul>
         </div>
         <div className="mt-16 basis-1/6 md:mt-0">
         <h4 className="font-bold text-center">Socials</h4>
         <hr style={{ borderColor: '#ff5100'}}></hr>
            <ul className="list-none m-0 p-0 font-medium text-center">
               <li className="text-center p-4  items-center">

                  <Link href="https://github.com/UniKonf/vibey" className="text-center hover:underline p-3">GitHub</Link>
               </li>
               <li className="p-4  items-center">

                  <Link href="https://twitter.com/vibeydotlive" className=" hover:underline px-3 pb-4">Twitter</Link>                 
               </li>
               <li className=" px-3 pt-3 pb-4 items-center">

                  <Link href="https://discord.gg/erHegt9UTf" className=" hover:underline px-3 pt-3 pb-4">Discord</Link>
               </li>
               <li className="pr-3 pt-3 pl-4 pb-4  text-center">

                  <Link href="https://instagram.com/vibeydotlive" className="text-center hover:underline pl-4 p-3">Instagram</Link>
               </li>
            </ul>
         </div>
         
        </div>
        <div className="inline-block mt-8 w-260 py-5 pl-10 pr-10 text-left text-sm ">
          © {new Date().getFullYear()} Vibey. All Rights Reserved.
        <li className="inline pl-96 text-right mt-8 mw-500 py-5  text-sm font-light md:order-4  md:w-auto">
        <Link href="/terms" className="pl-48 ml-2 hover:underline">Terms &amp; Conditions</Link>
        </li>
        </div>
      </div>
      <div className="mt-4 flex justify-center pl-">
        <VercelLogo />
      </div>
    </section>
  );
};

export default Footer;



