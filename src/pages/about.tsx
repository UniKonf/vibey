import clsxm from '@/lib/clsxm';

import Button from '@/components/Buttons/Button';
import IconLink from '@/components/links/IconLink'; //import { SettingsContext } from '@/lib/context/settings';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiGithubFill, RiMailLine } from 'react-icons/ri';

const profiles = [
  {
    name: 'Deependra Kumar',
    email: 'deependrarajpoot178@gmail.com',
    github: 'https://github.com/Deepu178',
    title: 'Tech Lead & Maintainer',
    image: '/images/events/deependra.png',
  },
  {
    name: 'Kritika Goyal',
    email: 'https://github.com/Kirtikagoyal',
    github: 'https://github.com/Kirtikagoyal',
    title: 'Project Coordinator',
    image: '/images/events/Kritika.png',
  },
  {
    name: 'Manish Tyagi',
    email: ' manishtyagi088@gmail.com',
    github: 'https://github.com/money8203',
    title: 'Maintainer',
    image: '/images/events/ManishTyagi.png',
  },
  {
    name: 'Chandraprakash Darji',
    email: 'prakashchandra3786@gmail.com',
    github: 'https://github.com/Chandraprakash-Darji',
    title: 'Maintainer',
    image: '/images/events/Chandraprakash.png',
  },
];

const events = [
  { name: 'Events', image: '/static/event.jpg', link: '/events' },
  { name: 'Confrences', image: '/static/hackathon.jpg', link: '/confrences' },
  { name: 'CFPs', image: '/static/cfp.jpg', link: '/cfps' },
];
const about = () => {
  return (
    <>
      <div className="justify-content mx-auto w-11/12 gap-14 md:flex  ">
        <div className=" pt-24  basis-1/2 ">
          <Image
            width={400}
            height={300}
            src="/static/aboutImage.jpg"
            alt="logo"
            className=" text-center mx-auto rounded-lg"
            loading="lazy"
          />
        </div>
        <div className="text-center mt-14 basis-1/2  font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-4xl lg:pt-12">
          <span className=" text-transparent bg-gradient-to-bl from-[rgb(178,15,255)] to-[#ff5100] bg-clip-text">
            About Us
          </span>
          <p className="flex mt-4"></p>
          <p className=" flex text-sm font-light sm:text-sm md:text-lg lg:text-xl xl:text-2xl hyphens-auto">
            Vibey is a community driven initiative to find online conferences
            and events for developers. It is a web app that lets you find online
            events and conferences that are happening around the world. We a
            Vibey want that no developer should miss out on the oppurtinity they
            have to present their skills, enahnce their knowldege and work with
            top leaders in developer space around the world.
          </p>
        </div>
      </div>
      <div className="font-bold mt-36 mb-16 text-center md:text-2xl ">
        <span className="pt-48 text-transparent bg-gradient-to-bl from-[rgb(178,15,255)] to-[#ff5100] bg-clip-text text-2xl ">
          Know Everything About
        </span>
        <h3 className="hover font-light mt-8">
          All that's happening around in the Tech World
        </h3>
      </div>
      <div className="flex flex-col gap-10  lg:flex-row ">
        {events.map((event) => (
          <div
            key={event.name}
            className="mx-20 justify-center items-center overflow-hidden h-84 basis-1/3"
          >
            <div className="card justify-center text-center h-96">
              <Image
                width={200}
                height={200}
                src={event.image}
                alt="logo"
                className=" rounded-lg w-full h-40 text-center mx-auto"
                loading="lazy"
              />
              <h2 className="mt-10">{event.name}</h2>
              <span className="underline whitespace-pre w-full block py-3">
                {' '}
              </span>
              <Link href={event.link}>
                <Button type="button" className={clsxm(`items-center py-3`)}>
                  Know More
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="justify-content mx-auto w-11/12 gap-10 md:flex ">
        <div className="text-center pt-40 mt-5 basis-1/2  font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">
          <span className="pt-40 text-transparent bg-gradient-to-bl from-[rgb(178,15,255)] to-[#ff5100] bg-clip-text">
            Our Vision behind creating Vibey
          </span>
          <p className="flex mt-4"></p>
          <p className=" flex text-sm font-light sm:text-sm md:text-lg lg:text-xl xl:text-2xl hyphens-auto">
            At Vibey we aim to provide timely and comprehensive details across
            various industries, fostering a community of collaboration and
            knowledge sharing. By offering enriching opportunities, we empower
            individuals and organizations to stay ahead in their fields,
            promoting growth, innovation, and meaningful connections within the
            global tech community.
          </p>
        </div>
        <div className=" mt-10  basis-1/2 md:mt-0 text-center mx-auto lg:pt-48">
          <Image
            width={400}
            height={300}
            src="/static/vibeydesign.png"
            alt="logo"
            className=" text-center mx-auto rounded-lg "
            loading="lazy"
          />
        </div>
      </div>
      <div className="font-bold my-16 text-center md:text-2xl pt-14">
        <span className="pt-40 text-transparent bg-gradient-to-bl from-[rgb(178,15,255)] to-[#ff5100] bg-clip-text text-2xl">
          Our Team
        </span>
      </div>
      <div className=" justify-center gap-10 pb-14 mx-20 flex flex-col lg:flex-row ">
        {profiles.map((profile) => (
          <div
            key={profile.name}
            className="card justify-center w-fit h-fit my-15 mx-auto"
          >
            <Image
              width={128}
              height={128}
              src={profile.image}
              alt="logo"
              className="mx-8 mt-3 mb-6 h-32  rounded-full  dark:block text-center overflow-hidden"
              loading="lazy"
            />
            <h6 className="font-bold text-center">{profile.name}</h6>
            <h6 className="font-light text-center">{profile.title}</h6>
            <div className="flex justify-center gap-4">
              <IconLink
                variant="outline"
                aria-label="Visit us on Github"
                title="Github (External Link)"
                href={profile.github}
                icon={RiGithubFill}
                className="items-center w-fit flex my-3"
              />
              <IconLink
                variant="outline"
                aria-label="Mail us on"
                title="Mail (External Link)"
                href={`mailto: ${profile.email}`}
                icon={RiMailLine}
                className="items-center w-fit flex my-3"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default about;
