import { sortEventsByFilter } from '@/lib/helper';
import { EventType } from '@/lib/types';

import Event from '@/components/upcoming/Event';

import { NextPage } from 'next';
import { useState } from 'react';
import { BsFillFunnelFill } from 'react-icons/bs';

const events: EventType[] = [
  {
    id: 'id1',
    name: 'Web3Conf India',
    location: 'Goa',
    date: new Date('11 August 2023 GMT'),
    link: 'https://web3confindia.xyz/',
    image: '/images/events/web3conf.png',
  },
  {
    id: 'id2',
    name: 'International React conference',
    location: 'Bangalore',
    date: new Date('07 July 2023 GMT'),
    link: 'https://reactnexus.com/',
    image: '/images/events/reactNexus.webp',
  },
  {
    id: 'id3',
    name: 'Civo Navigate ',
    location: 'London, UK',
    date: new Date('05 September 2023 GMT'),
    link: 'https://www.civo.com/navigate ',
    image: '/images/events/civo.svg',
  },
  {
    id: 'id4',
    name: 'International JavaScript Conference',
    location: 'New-york',
    date: new Date('25 September 2023 GMT'),
    link: 'https://javascript-conference.com/new-york/',
    image: '/images/events/JS.jpg',
    name: 'International JavaScript Conference',
    location: 'New-york',
    date: new Date('25 September 2023 GMT'),
    link: 'https://javascript-conference.com/new-york/',
    image: '/images/events/js.jpg',
  },
  {
    id: 'id5',
    name: 'REACT INDIA',
    location: 'Goa',
    date: new Date('05 October 2023 GMT'),
    link: 'https://www.reactindia.io/',
    image: '/images/events/reactindia.png',
    name: 'REACT INDIA',
    location: 'Goa',
    date: new Date('05 October 2023 GMT'),
    link: 'https://www.reactindia.io/',
    image: '/images/events/reactindia.png',
  },
  {
    id: 'id6',
    name: 'Open Source India',
    location: 'Bengaluru',
    date: new Date('12 October 2023 GMT'),
    link: 'https://www.opensourceindia.in/',
    image: '/images/events/open-source.jpg',
  },
  {
    id: 'id7',
    name: 'Builders Hub: BuidlWithUs',
    location: 'Gurugram, Haryana',
    date: new Date('June 24 2023 GMT'),
    link: 'https://lu.ma/BuildersHub-BuidlWithUs',
    image: '/images/events/builders.webp',
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
        </div>
      </div>
    </div>
  );
};

export default EventPage;
