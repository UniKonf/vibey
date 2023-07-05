import { sortEventsByFilter } from '@/lib/helper';
import { HackathonType } from '@/lib/types';

import Hackathon from '@/components/upcoming/Hackathon';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextPage } from 'next';
import { useState } from 'react';
import { BsFillFunnelFill } from 'react-icons/bs';

const cities = [
  'Kolkata',
  'New Delhi',
  'Goa',
  'Mumbai',
  'Bangalore',
  'Hyderabad',
  'Chennai',
];

const HackathonPage: NextPage<HackathonType> = ({
  hackathonsData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
          {sortEventsByFilter(hackathonsData, chosenCity).length > 0 ? (
            <div className="events grid grid-cols-auto-sm gap-7">
              {sortEventsByFilter(hackathonsData, chosenCity).map(
                (hackathon) => (
                  <Hackathon key={hackathon.id} {...hackathon} />
                )
              )}
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
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/hackathons`
  );

  const response = await res.json();
  const hackathonsData = response.hackathon;
  return {
    props: {
      hackathonsData,
    },
    revalidate: 10,
  };
};
export default HackathonPage;
