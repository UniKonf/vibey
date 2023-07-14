import { SettingsContext } from '@/lib/context/settings';

import events from '@/constant/events';

import { Events, Heading, Hero, NewsLetter, SearchButton } from '../components';
import { NextPage } from 'next';
import { useContext } from 'react';

const Home: NextPage = () => {
  const { theme } = useContext(SettingsContext);

  return (
    <>
      {/* hero section */}
      <Hero />
      <div className="relative">
        <div className="flex flex-col gap-14 pt-5">
          {/* search button */}
          <div className="layout text-right">
            <SearchButton />
          </div>

          {/* Upcoming event section */}
          <section className="layout flex flex-col gap-6" id="upcoming-events">
            <Heading
              title="Upcoming Events"
              btnText="All Events"
              href="/events"
            />
            <Events events={events} />
          </section>

          {/* newsletter section */}
          <section
            className="relative overflow-hidden py-[2rem] text-center"
            id="newsletter-section"
          >
            <div
              className={`${
                theme === 'dark' ? 'bg-zinc-900' : 'bg-neutral-200'
              } max-w-5xl w-11/12 mx-auto rounded-lg p-3 md:p-7`}
            >
              <div className="mx-auto ">
                <h1 className="font-semibold">You're Invited.</h1>
                <p
                  className={`mt-0 md:mt-2 max-w-2xl mx-auto ${
                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
                  }`}
                >
                  Be a part of an awesome community and keep yourself updated
                  with upcoming tech events and hackathons.
                </p>
              </div>
              <div className="mt-4 ">
                <NewsLetter />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default Home;
