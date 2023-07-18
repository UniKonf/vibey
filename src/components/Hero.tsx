import ButtonLink from '@/components/links/ButtonLink';

import Image from 'next/image';
import { FC } from 'react';

const Hero: FC = () => {
  return (
    <section
      id="heroSection"
      className="relative mb-5 flex w-full flex-col items-center  justify-center py-[120px] sm:py-[160px] lg:py-[200px]"
    >
      {/* background image and overlay */}
      <div className="bg">
        <Image
          src="/images/homepage/heroSection.jpg"
          alt="hero-image"
          layout="fill"
          className="object-cover"
          loading="lazy"
        />
        <div className="overlay bg-gradient-to-b from-black to-color-purple opacity-60"></div>
      </div>
      {/* text */}
      <div className="layout z-10">
        <div className="text-center font-normal text-white">
          <p className="mb-2 text-2xl font-normal sm:text-3xl lg:mb-4 lg:text-4xl">
            All the online
          </p>
          <h1 className="text-3xl font-medium sm:text-5xl lg:text-7xl">
            CONFERENCES, WORKSHOPS & EVENTS <br />
          </h1>
          <p className="mt-2 text-2xl font-normal sm:text-3xl lg:mt-4 lg:text-4xl">
            at one place.
          </p>
        </div>
        {/* action buttons */}
        <div className="mt-[2rem] flex flex-wrap justify-center gap-[1rem] md:gap-[4rem]">
          <ButtonLink
            href="#upcoming-events"
            openNewTab={false}
            className="lg:px-10 lg:text-lg"
          >
            Explore Events
          </ButtonLink>

          <ButtonLink
            href="#newsletter-section"
            openNewTab={false}
            variant="outline"
            className="lg:px-10 lg:text-lg "
          >
            Subscribe
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
