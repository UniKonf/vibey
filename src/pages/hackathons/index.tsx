import { sortByFilter } from '@/lib/helper';
import { HackathonDataType } from '@/lib/types';

import HackathonCardPage from '@/components/upcoming/HackathonCardPage';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextPage } from 'next';
import Head from 'next/head';
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

const HackathonPage: NextPage<HackathonDataType> = ({
  hackathonsData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [chosenCity, setChosenCity] = useState<string>('');
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const handleCityHackathons = (city: string): void => {
    setChosenCity(city);
    setShowFilter(false);
  };

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <Head>
        <title>Hackathons - Vibey</title>
      </Head>
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
                    onClick={() => handleCityHackathons(city)}
                    className="cursor:pointer rounded-xl  bg-base-100/70 text-center sm:pb-10 sm:pt-7 "
                  >
                    <h3 className="text-sm ">{city}</h3>
                  </div>
                ))}
            </div>
          </div>
          <div>
            {sortByFilter(hackathonsData, chosenCity).length > 0 ? (
              <div className="events grid grid-cols-auto-sm gap-7">
                {sortByFilter(hackathonsData, chosenCity).map(
                  (hackathon, index) => (
                    <HackathonCardPage
                      slug=""
                      address={{
                        isOnline: false,
                        location: '',
                      }}
                      tags={[]}
                      key={index}
                      {...hackathon}
                    />
                  )
                )}
              </div>
            ) : (
              <div className="rounded-3xl bg-base-100/70 px-6 py-5 text-center text-xl text-transparent md:pb-20 md:pt-14 ">
                <span className="bg-gradient-to-bl from-[rgb(178,15,255)] to-[#ff5100] bg-clip-text ">
                  No Upcoming Hackathon in {chosenCity}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
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
