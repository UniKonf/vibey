import { sortEventsByDate, sortEventsByFilter } from '@/lib/helper';
import { EventType } from '@/lib/types';

import Event from '@/components/upcoming/Event';

import { NextPage } from 'next';
import { useState } from 'react';
import { BsFillFunnelFill } from 'react-icons/bs';

const events: EventType[] = [
  {
    id: 'id1',
    name: 'React India 2023',
    location: 'Goa',
    date: new Date('06 Oct 2023 GMT'),
    link: 'https://www.reactindia.io/',
    image: '/images/events/reactIndia.webp',
  },
  {
    id: 'id2',
    name: 'HackCBS',
    logo: '/images/events/kronos-logo.png',
    location: 'New Delhi',
    date: new Date('06 Sept 2023 GMT'),
    link: 'https://hackcbs.tech/',
    image: '/images/events/bg-2.webp',
  },
  {
    id: 'id3',
    name: 'Hackerstellar',
    location: 'New Delhi',
    date: new Date('17 Sept 2023 GMT'),
    link: 'https://hackerstellar.csikjsce.org/ ',
    image: '/images/events/bg-3.jpeg',
  },
  {
    id: 'id4',
    name: 'HackCBS',
    location: 'New Delhi',
    date: new Date('28 Sept 2023 GMT'),
    link: 'https://hackcbs.tech/',
    image: '/images/events/bg-4.webp',
  },
  {
    id: 'id5',
    name: 'JSConf India 2023',
    location: 'Bengaluru',
    date: new Date('02 June 2023 GMT'),
    link: 'https://jsconf.in/',
    image: '/images/events/bg-4.webp',
  },
];

const cities = [
  'Kolkata',
  'New Delhi',
  'Goa',
  'Mumbai',
  'Bangalore',
  'Hyderabad',
  'Chennai',
];
const EventPage: NextPage = () => {
  const [chosenCity, setChosenCity] = useState<string>('');
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const handleCityEvents = (city: string): void => {
    setChosenCity(city);
    setShowFilter(false);
  };

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="relative z-10 rounded-3xl ">
      <div className="layout mx-auto flex w-full max-w-6xl flex-col gap-14 py-10 px-2">
        <div className="mt-20 rounded-3xl bg-base-100/50 px-6 py-5 text-4xl text-transparent md:pb-20 md:pt-14 md:text-7xl">
          <span className="bg-gradient-to-bl from-[rgb(178,15,255)] to-[#ff5100] bg-clip-text">
            Upcoming Events
          </span>
        </div>
        <div>
          <button
            className="bg-black-500 flex cursor-pointer items-stretch rounded-xl border border-gray-400 bg-gray-100 py-2 px-4 font-semibold text-gray-800 shadow "
            onClick={() => handleShowFilter()}
          >
            {' '}
            <h3>Filter</h3>{' '}
            <span className="pt-3 pl-4">
              <BsFillFunnelFill />
            </span>
          </button>

          <div className="events mt-5 grid cursor-pointer grid-cols-auto-sm gap-7">
            {showFilter &&
              cities.map((city, index) => (
                <div
                  key={index}
                  onClick={() => handleCityEvents(city)}
                  className="cursor:pointer rounded-xl  bg-base-100/70 text-center sm:pb-10 sm:pt-7 "
                >
                  <h3 className="text-sm ">{city}</h3>
                </div>
              ))}
          </div>
        </div>
        <div>
          {sortEventsByFilter(events, chosenCity).length > 0 ? (
            <div className="events grid grid-cols-auto-sm gap-7">
              {sortEventsByFilter(events, chosenCity).map((event) => (
                <Event key={event.id} {...event} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl bg-base-100/70 px-6 py-5 text-center text-xl text-transparent md:pb-20 md:pt-14 ">
              <span className="bg-gradient-to-bl from-[rgb(178,15,255)] to-[#ff5100] bg-clip-text ">
                No Upcoming Events in {chosenCity}
              </span>
            </div>
          )}

          <div className="events grid w-full gap-4 md:grid-cols-auto-sm md:gap-7">
            {sortEventsByDate(events).map((event) => (
              <Event key={event.id} {...event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
