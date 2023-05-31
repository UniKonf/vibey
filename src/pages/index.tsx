import events from '@/constant/events';

import { Events, Heading, Hero, SearchButton } from '../components';
import { NextPage } from 'next';

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
        </div>
      </div>
    </>
  );
};
export default Home;
