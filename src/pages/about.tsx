import clsxm from '@/lib/clsxm';

import Button from '@/components/Buttons/Button';
import IconLink from '@/components/links/IconLink'; //import { SettingsContext } from '@/lib/context/settings';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiGithubFill, RiMailLine } from 'react-icons/ri';

const about = () => {
  return (
    <>
      <div className="justify-content mx-auto w-11/12 gap-14 pl-6 md:flex ">
        <div className="mx-auto mt-2 basis-1/2  pt-56 pl-6 text-center md:mt-0">
          <Image
            width={400}
            height={300}
            src="/static/Vibey-hero.png"
            alt="logo"
            className="mx-auto text-center dark:hidden "
          />
          <Image
            width={400}
            height={300}
            src="/static/Vibey-hero.png"
            alt="logo"
            className="mx-auto hidden text-center dark:block"
          />
        </div>
        <div className="mt-14 basis-1/2 pt-56 pb-24 text-center  font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">
          <span className="bg-gradient-to-bl from-[rgb(178,15,255)] to-[#ff5100] bg-clip-text pt-40 text-transparent">
            About Us
          </span>
          <p className="mt-4 flex"></p>
          <p className=" flex text-sm font-light sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
            Vibey is a community driven initiative to find online conferences
            and events for developers. It is a web app that lets you find online
            events and conferences that are happening around the world. We a
            Vibey want that no developer should miss out on the oppurtinity they
            have to present their skills, enahnce their knowldege and work with
            top leaders in developer space around the world.
          </p>
        </div>
      </div>
      <div className="mt-24 mb-16 text-center font-bold md:text-2xl">
        <span className="bg-gradient-to-bl from-[rgb(178,15,255)] to-[#ff5100] bg-clip-text pt-40 text-2xl text-transparent">
          Know Everything About
        </span>
        <h3 className="hover font-light">
          All that's happening around in the Tech World
        </h3>
      </div>
      <div className="mx-20 grid grid-cols-1 items-center justify-center gap-3 overflow-hidden sm:grid-cols-1 sm:text-left md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <div className="card mx-auto w-min justify-center px-0 pt-0 text-center">
          <Image
            width={200}
            height={200}
            src="/static/event.jpg"
            alt="logo"
            className=" mx-auto h-56 w-full overflow-hidden rounded-lg text-center dark:hidden "
          />
          <Image
            width={200}
            height={200}
            src="/static/event.jpg"
            alt="logo"
            className="hidden h-56 w-full overflow-hidden rounded-lg text-center dark:block"
          />
          <h2 className="mt-10">Events</h2>
          <span className="block w-full whitespace-pre py-3 underline"> </span>
          <Link href="/events">
            <Button type="button" className={clsxm(`items-center py-3`)}>
              Know More
            </Button>
          </Link>
        </div>
        <div className="card mx-auto w-min justify-center px-0 pt-0 text-center">
          <Image
            width={200}
            height={200}
            src="/static/hackathon.jpg"
            alt="logo"
            className="mx-auto h-56 w-full overflow-hidden rounded-lg text-center dark:hidden"
          />
          <Image
            width={200}
            height={200}
            src="/static/hackathon.jpg"
            alt="logo"
            className="hidden h-56 w-full overflow-hidden rounded-lg text-center dark:block"
          />
          <h2 className="mt-10">Conference</h2>
          <span className="block w-full whitespace-pre py-3 underline "> </span>
          <Link href="/events">
            <Button type="button" className={clsxm(`items-center py-3`)}>
              Know More
            </Button>
          </Link>
        </div>
        <div className="card mx-auto w-min justify-center px-0 pt-0 text-center">
          <Image
            width={200}
            height={200}
            src="/static/cfp.jpg"
            alt="logo"
            className="mx-auto h-56 w-full overflow-hidden rounded-lg text-center dark:hidden"
          />
          <Image
            width={200}
            height={200}
            src="/static/cfp.jpg"
            alt="logo"
            className="hidden h-56 w-full overflow-hidden rounded-lg text-center dark:block"
          />
          <h2 className="mt-10">CFPs</h2>
          <span className="block w-full whitespace-pre py-3 underline"> </span>
          <Link href="/events">
            <Button type="button" className={clsxm(`items-center py-3`)}>
              Know More
            </Button>
          </Link>
        </div>
      </div>
      <div className="justify-content mx-auto w-11/12 gap-10 pl-6 md:flex ">
        <div className="mt-5 basis-1/2 pt-40 text-center  font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">
          <span className="bg-gradient-to-bl from-[rgb(178,15,255)] to-[#ff5100] bg-clip-text pt-40 text-transparent">
            Our Vision behind creating Vibey
          </span>
          <p className="mt-4 flex"></p>
          <p className=" flex text-sm font-light sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
            At Vibey we aim to provide timely and comprehensive details across
            various industries, fostering a community of collaboration and
            knowledge sharing. By offering enriching opportunities, we empower
            individuals and organizations to stay ahead in their fields,
            promoting growth, innovation, and meaningful connections within the
            global tech community.
          </p>
        </div>
        <div className="mx-auto mt-10 basis-1/2  pt-52 pl-6 text-center md:mt-0">
          <Image
            width={400}
            height={300}
            src="/static/vibeydesign.png"
            alt="logo"
            className="mx-auto text-center dark:hidden "
          />
          <Image
            width={400}
            height={300}
            src="/static/vibeydesign.png"
            alt="logo"
            className="mx-auto hidden text-center dark:block"
          />
        </div>
      </div>
      <div className="my-16 pt-14 text-center font-bold md:text-2xl">
        <span className="bg-gradient-to-bl from-[rgb(178,15,255)] to-[#ff5100] bg-clip-text pt-40 text-2xl text-transparent">
          Our Team
        </span>
      </div>
      <div className=" mx-20 grid grid-cols-1 justify-center  gap-10 pb-14 sm:grid-cols-2 sm:text-left md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        <div className="card my-15 mx-auto h-fit w-fit justify-center">
          <Image
            width={128}
            height={128}
            src="/images/events/DeepandraKumar.png"
            alt="logo"
            className="mx mb-6-8 mt-3 h-32 overflow-hidden  rounded-full text-center  dark:hidden"
          />
          <Image
            width={128}
            height={128}
            src="/images/events/DeepandraKumar.png"
            alt="logo"
            className="mx-8 mt-3 mb-6 h-32  overflow-hidden  rounded-full text-center dark:block"
          />
          <h6 className="text-center font-bold">Deepandra Kumar</h6>
          <h6 className="text-center font-light">Tech Lead & Maintainer</h6>
          <div className="flex justify-center gap-4">
            <IconLink
              variant="outline"
              aria-label="Visit us on Github"
              title="Github (External Link)"
              href="https://github.com/Deepu178"
              icon={RiGithubFill}
              className="my-3 flex w-fit items-center"
            />
            <IconLink
              variant="outline"
              aria-label="Mail us on"
              title="Mail (External Link)"
              href="mailto: deependrarajpoot178@gmail.com"
              icon={RiMailLine}
              className="my-3 flex w-fit items-center"
            />
          </div>
        </div>
        <div className="card my-15 mx-auto h-fit w-fit justify-center">
          <Image
            width={128}
            height={128}
            src="/images/events/Kritika.png"
            alt="logo"
            className="mx mb-6-8 mt-3 h-32 overflow-hidden  rounded-full text-center  dark:hidden"
          />
          <Image
            width={128}
            height={128}
            src="/images/events/Kritika.png"
            alt="logo"
            className="mx-8 mt-3 mb-6 h-32  overflow-hidden  rounded-full text-center dark:block"
          />
          <h6 className="text-center font-bold">Kritika Goyal</h6>
          <h6 className="text-center font-light">Project Coordinator</h6>
          <div className="flex justify-center gap-4">
            <IconLink
              variant="outline"
              aria-label="Visit us on Github"
              title="Github (External Link)"
              href="https://github.com/Kirtikagoyal"
              icon={RiGithubFill}
              className="my-3 flex w-fit items-center"
            />
            <IconLink
              variant="outline"
              aria-label="Mail us on"
              title="Mail (External Link)"
              href="mailto: goyalkirtika.077@gmail.com"
              icon={RiMailLine}
              className="my-3 flex w-fit items-center"
            />
          </div>
        </div>
        <div className="card my-15 mx-auto h-fit w-fit justify-center">
          <Image
            width={128}
            height={128}
            src="/images/events/ManishTyagi.png"
            alt="logo"
            className="mx mb-6-8 mt-3 h-32 overflow-hidden  rounded-full text-center  dark:hidden"
          />
          <Image
            width={128}
            height={128}
            src="/images/events/ManishTyagi.png"
            alt="logo"
            className="mx-8 mt-3 mb-6 h-32  overflow-hidden  rounded-full text-center dark:block"
          />
          <h6 className="text-center font-bold">Manish Tyagi</h6>
          <h6 className="text-center font-light">
            Project Manager & Maintainer
          </h6>
          <div className="flex justify-center gap-4">
            <IconLink
              variant="outline"
              aria-label="Visit us on Github"
              title="Github (External Link)"
              href="https://github.com/money8203"
              icon={RiGithubFill}
              className="my-3 flex w-fit items-center"
            />
            <IconLink
              variant="outline"
              aria-label="Mail us on"
              title="Mail (External Link)"
              href="mailto: manishtyagi088@gmail.com"
              icon={RiMailLine}
              className="my-3 flex w-fit items-center"
            />
          </div>
        </div>
        <div className="card my-15 mx-auto h-fit w-fit justify-center">
          <Image
            width={128}
            height={128}
            src="/images/events/Chandraprakash.png"
            alt="logo"
            className="mx mb-6-8 mt-3 h-32 overflow-hidden  rounded-full text-center  dark:hidden"
          />
          <Image
            width={128}
            height={128}
            src="/images/events/Chandraprakash.png"
            alt="logo"
            className="mx-8 mt-3 mb-6 h-32  overflow-hidden  rounded-full text-center dark:block"
          />
          <h6 className="text-center font-bold">Chandraprakash Darji</h6>
          <h6 className="text-center font-light">Maintainer</h6>
          <div className="flex justify-center gap-4">
            <IconLink
              variant="outline"
              aria-label="Visit us on Github"
              title="Github (External Link)"
              href="https://github.com/Chandraprakash-Darji"
              icon={RiGithubFill}
              className="my-3 flex w-fit items-center"
            />
            <IconLink
              variant="outline"
              aria-label="Mail us on"
              title="Mail (External Link)"
              href="mailto: prakashchandra3786@gmail.com"
              icon={RiMailLine}
              className="my-3 flex w-fit items-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
