import { sortEventsByFilter } from '@/lib/helper';
import { EventType } from '@/lib/types';

import Event from '@/components/upcoming/Event';

import { NextPage } from 'next';
import { useState } from 'react';
import { BsFillFunnelFill } from 'react-icons/bs';

const hackathons: EventType[] = [
  {
    id: 'id1',
    name: 'TiDB Future App Hackathon 2023',
    location: 'Online',
    date: new Date('28 Jul 2023 GMT'),
    link: 'https://tidbhackathon2023.devpost.com/?ref_feature=challenge&ref_medium=discover',
    image: '/images/events/bg-1.jpeg',
  },
  {
    id: 'id2',
    name: 'Hack4Bengal 2.0',
    location: 'New Town, India',
    date: new Date('07 Jul 2023 GMT'),
    link: 'https://hack4bengal-2.devfolio.co/',
    image: '/images/events/bg-2.webp',
  },
  {
    id: 'id3',
    name: 'NEARCON IRL Hackathon',
    location: 'Armazem, Portugal',
    date: new Date('7 Nov 2023 GMT'),
    link: 'https://nearcon-hackathon.devpost.com/?ref_feature=challenge&',
    image: '/images/events/bg-3.jpeg',
  },
  {
    id: 'id4',
    name: 'OPL x SEI Web3 Hackathon',
    location: 'Santa Clara, United States',
    date: new Date('26 Aug 2023 GMT'),
    link: 'https://opl-sei-hackathon.devfolio.co/',
    image: '/images/events/bg-3.jpeg',
  },
  {
    id: 'id5',
    name: 'STEAM Fest Mini Hackathon',
    location: 'Online',
    date: new Date('16 June 2023 GMT'),
    link: 'https://steam-fest-mini-hackathon.devpost.com/?ref_feature=challenge&ref_medium=discover',
    image: '/images/events/bg-1.jpeg',
  },
  {
    id: 'id1',
    name: 'TiDB Future App Hackathon 2023',
    location: 'Online',
    date: new Date('28 Jul 2023 GMT'),
    link: 'https://tidbhackathon2023.devpost.com/?ref_feature=challenge&ref_medium=discover',
    image: '/images/events/bg-1.jpeg',
  },
  {
    id: 'id2',
    name: 'Hack4Bengal 2.0',
    location: 'New Town, India',
    date: new Date('07 Jul 2023 GMT'),
    link: 'https://hack4bengal-2.devfolio.co/',
    image: '/images/events/bg-2.webp',
  },
  {
    id: 'id3',
    name: 'NEARCON IRL Hackathon',
    location: 'Armazem, Portugal',
    date: new Date('7 Nov 2023 GMT'),
    link: 'https://nearcon-hackathon.devpost.com/?ref_feature=challenge&',
    image: '/images/events/bg-3.jpeg',
  },
  {
    id: 'id4',
    name: 'OPL x SEI Web3 Hackathon',
    location: 'Santa Clara, United States',
    date: new Date('26 Aug 2023 GMT'),
    link: 'https://opl-sei-hackathon.devfolio.co/',
    image: '/images/events/bg-3.jpeg',
  },
  {
    id: 'id5',
    name: 'STEAM Fest Mini Hackathon',
    location: 'Online',
    date: new Date('16 June 2023 GMT'),
    link: 'https://steam-fest-mini-hackathon.devpost.com/?ref_feature=challenge&ref_medium=discover',
    image: '/images/events/bg-1.jpeg',
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
const HackathonPage: NextPage = () => {
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
            Upcoming Hackathons
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
          {sortEventsByFilter(hackathons, chosenCity).length > 0 ? (
            <div className="events grid grid-cols-auto-sm gap-7">
              {sortEventsByFilter(hackathons, chosenCity).map((event) => (
                <Event key={event.id} {...event} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl bg-base-100/70 px-6 py-5 text-center text-xl text-transparent md:pb-20 md:pt-14 ">
              <span className="bg-gradient-to-bl from-[rgb(178,15,255)] to-[#ff5100] bg-clip-text ">
                No Upcoming Hackathons in {chosenCity}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HackathonPage;
