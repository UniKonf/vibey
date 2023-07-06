import { sortEventsByFilter } from '@/lib/helper';

import Event from '@/components/upcoming/Event';

import { events } from './eventsData';
import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { BsFillFunnelFill } from 'react-icons/bs';

const cities = [
  'Kolkata, India',
  'New Delhi, India',
  'Goa, India',
  'Mumbai, India',
  'Bangalore, India',
  'Hyderabad, India',
  'Chennai, India',
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
      <div className="layout mx-auto flex w-full max-w-6xl flex-col gap-14 px-2 py-10">
        <div className="mt-20 rounded-3xl bg-base-100/50 px-6 py-5 text-4xl text-transparent md:pb-20 md:pt-14 md:text-7xl">
          <span className="bg-gradient-to-bl from-[rgb(178,15,255)] to-[#ff5100] bg-clip-text">
            Upcoming Events
          </span>
        </div>
        <div>
          <button
            className="bg-black-500 flex cursor-pointer items-stretch rounded-xl border border-gray-400 bg-gray-100 px-4 py-2 font-semibold text-gray-800 shadow "
            onClick={() => handleShowFilter()}
          >
            {' '}
            <h3>Filter</h3>{' '}
            <span className="pl-4 pt-3">
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
                <Link key={event.id} href={`/events/${event.id}`}>
                  <Event {...event} />
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl bg-base-100/70 px-6 py-5 text-center text-xl text-transparent md:pb-20 md:pt-14 ">
              <span className="bg-gradient-to-bl from-[rgb(178,15,255)] to-[#ff5100] bg-clip-text ">
                No Upcoming Events in {chosenCity}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
