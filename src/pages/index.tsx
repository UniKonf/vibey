import UnstyledLink from '@/components/links/UnstyledLink';

import events from '@/constant/events';

import { Events, Heading, Hero, SearchButton } from '../components';
import { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      {/* hero section */}
      <Hero />
      <div className="relative">
        <div className="flex flex-col gap-14 py-5 pb-2">
          {/* search button */}
          <div className="layout text-right">
            <SearchButton />
          </div>

          {/* Upcoming event section */}
          <section className="layout flex flex-col gap-6" id="upcoming-events">
            <Heading
              title="Upcoming Events"
              btnText="All Events"
              href="/upcoming"
            />
            <Events events={events} />
          </section>

          {/* Add new event section */}
          <section
            className="relative w-full py-[80px] sm:py-[120px]"
            id="add-event"
          >
            {/* background */}
            <div className="bg opacity-40">
              <Image
                src="/images/homepage/addNewEvent.png"
                alt="hero-image"
                layout="fill"
                className="opavity-40 object-cover lg:object-fill"
              />
            </div>
            {/* section body */}
            <div className="layout relative flex flex-col gap-14 py-10">
              <div className="flex flex-col gap-5">
                {/* heading */}
                <Heading title="Add your Event" />
                <div className="max-w-max text-base sm:text-2xl">
                  {/* steps */}
                  <ul className="list-inside list-disc text-color-pink">
                    <li>
                      <span className="text-foreground">
                        Open a new issue{' '}
                        <UnstyledLink
                          href="https://github.com/UniKonf/vibey"
                          className="text-color-pink hover:underline"
                        >
                          UniKonf/vibey
                        </UnstyledLink>
                      </span>
                    </li>
                    <li>
                      {' '}
                      <span className="text-foreground">
                        Add Event details in the issue.{' '}
                      </span>{' '}
                    </li>
                    <li>
                      {' '}
                      <span className="text-foreground">
                        {' '}
                        Submit issue.{' '}
                      </span>{' '}
                    </li>
                    <li>
                      {' '}
                      <span className="text-foreground">
                        {' '}
                        That’s it. Just that.{' '}
                      </span>{' '}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default Home;
