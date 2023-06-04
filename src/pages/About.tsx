import clsxm from '@/lib/clsxm';
import { SettingsContext } from '@/lib/context/settings';
import Button from "@/components/Buttons/Button";
import Image from "next/image";
import Link from 'next/link';
import React from 'react';
import { useContext } from 'react';

const about = () => {
  const { theme } = useContext(SettingsContext);
  return (
    <>
      <div className="justify-content pl-6 mx-auto w-11/12 gap-14 md:flex  ">
        <div className="pt-40 pl-6 mt-16  basis-1/2 md:mt-0 text-center mx-auto">
            <Image width={400} height={300} src= "/static/Vibey-hero.png" alt="logo" className="dark:hidden text-center mx-auto "/> 
            <Image width={400} height={300} src="/static/Vibey-hero.png" alt="logo" className="hidden dark:block text-center mx-auto"/>     
        </div>   
        <div className="text-left pt-40 mt-16 basis-1/2 md:mt-0 font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">
          <span className="pt-40 text-transparent bg-gradient-to-bl from-[rgb(178,15,255)] to-[#ff5100] bg-clip-text">
            About Us
          </span>          
          <p className="flex mt-4"></p>
          <p className=" flex text-sm font-light sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
            Vibey is a community driven initiative to find online conferences and events for developers. 
            It is a web app that lets you find online events and conferences that are happening around the world. 
            We a Vibey want that no developer should miss out on the oppurtinity they have to present their skills,
            enahnce their knowldege and work with top leaders in developer space around the world.
          </p>
        </div>
      </div>
      <div className="font-bold my-16 text-center md:text-2xl">
          <span className="pt-40 text-transparent bg-gradient-to-bl from-[rgb(178,15,255)] to-[#ff5100] bg-clip-text text-2xl">
            Know Everything About
          </span>   
      </div>
      <div className="mx-20 grid grid-cols-1 gap-5  sm:text-left sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
        <div className="card justify-center text-center  px-0 pt-0 ">
          <Image width={200} height={200} src= "/static/event.jpg" alt="logo" className="dark:hidden text-center mx-auto overflow-hidden"/> 
          <Image width={350} height={200} src="/static/event.jpg" alt="logo" className="hidden dark:block text-center overflow-hidden w-full h-2/5"/>     
          <h2 className="mt-10 mb-6">Events</h2>
          <span className="underline whitespace-pre w-fit">                                                           </span>
          <div className="text-left pl-10">Know which developer event is happening around and in which city in India.</div>
          <Link href="/events"><Button
            type="button"
            className={clsxm(`ml-auto px-4 my-6 md:ml-0 md:px-7`,theme === 'dark' ? 'hover:text-black' : '')}
          >Know More
          </Button></Link>
        </div>       
        <div className="card text-center  px-0 pt-0">
          <Image width={200} height={200} src= "/static/cfp.jpg" alt="logo" className="dark:hidden text-center mx-auto "/> 
          <Image width={350} height={200} src="/static/cfp.jpg" alt="logo" className="hidden dark:block text-center w-full h-2/5"/>     
          <h2 className="mt-10 mb-6">CFPs</h2>
          <span className="underline whitespace-pre w-fit">                                                           </span>
          <div className="text-left pl-10">List of all the upcoming CFPs in following months, in respective cities in India</div>
          <Link href="/cfp"><Button
            type="button"
            className={clsxm(`ml-auto px-4 my-6 md:ml-0 md:px-7`,theme === 'dark' ? 'hover:text-black' : '')}
          >Know More
          </Button></Link>
        </div>
        <div className="card text-center px-0 pt-0">
          <Image width={200} height={200} src= "/static/hackathon.jpg" alt="logo" className="dark:hidden text-center mx-auto overflow-hidden w-full"/> 
          <Image width={350} height={200} src="/static/hackathon.jpg" alt="logo" className="hidden dark:block text-center overflow-hidden w-full h-2/5"/>     
          <h2 className="text-center mt-10 mb-6">Hackathon</h2>
          <span className="items-center underline whitespace-pre w-fit">                                                           </span>
          <div className="text-left pl-10">Here you'll find all of the top National Level Hackathons Happening around India.</div>
          <Link className="items-center" href="/hackathon"><Button
            type="button"
            className={clsxm(`ml-auto px-4 my-6 md:ml-0 md:px-7 justify-center`,theme === 'dark' ? 'hover:text-black' : '')}
          >Know More
          </Button></Link>
        </div>   
      </div>
    </>
  );
};

export default about;
