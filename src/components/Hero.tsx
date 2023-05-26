import ButtonLink from '@/components/links/ButtonLink';

import Image from 'next/image';
import { FC } from 'react';

const Hero: FC = () => {
  return (
    <section
      id="heroSection"
      className="relative flex w-full flex-col items-center justify-center py-[150px] lg:py-[200px]"
    >
      {/* background image and overlay */}
      <div className="bg">
        <Image
          src="/images/homepage/heroSection.jpg"
          alt="hero-image"
          layout="fill"
        />
        <div className="overlay bg-gradient-to-b from-black to-color-purple opacity-60"></div>
      </div>
      {/* text and buttons */}
      <div className="layout z-10">
        <div className="text-center font-normal text-white">
          <p className="text-2xl font-normal sm:mb-2 sm:text-3xl lg:mb-4 lg:text-4xl">
            All the online
          </p>
          <h1 className="font-medium">
            CONFERENCE, WORKSHOP & EVENTS <br />
          </h1>
          <p className="text-2xl font-normal sm:mt-2 sm:text-3xl lg:mt-4 lg:text-4xl">
            at one place.
          </p>
        </div>
        <div className="mt-[2rem] flex flex-wrap justify-center gap-[1rem] md:gap-[4rem]">
          <ButtonLink href="#upcoming-events" openNewTab={false}>
            Explore Events
          </ButtonLink>
          <ButtonLink href="#add-event" openNewTab={false} variant="outline">
            Add New Events
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
