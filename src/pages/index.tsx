import events from '@/constant/events';

import { Events, Heading, Hero, SearchBar } from '../components';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <div className="relative">
        <div className="layout flex flex-col gap-14 py-5 pb-2">
          <SearchBar />
          <div className="flex flex-col gap-6" id="upcoming-events">
            <Heading
              title="Upcoming Events"
              btnText="All Events"
              href="/upcoming"
            />
            <Events events={events} />
          </div>
          <div className="relative w-full">
            <div className="relative flex flex-col gap-14 py-10">
              <div className="flex flex-col gap-5">
                <Heading title="Add your Event" />

                <div
                  className="card max-w-max text-2xl font-medium"
                  id="add-event"
                >
                  <p>
                    1. Open a new issue{' '}
                    <a
                      href="https://github.com/unikonf/vibey/issues/new?assignees=&labels=add+event&template=add-event.yml&title=Add+%5BEVENT+NAME%5D"
                      className="udnerline text-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      UniKonf/Vibey
                    </a>
                    <br /> 2. Add Event details in the issue.
                    <br /> 3. Submit issue.
                    <br /> 4. That’s it. Just that.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
