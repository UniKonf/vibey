import { SettingsContext } from '@/lib/context/settings';
import { SpeakerType } from '@/lib/types';

import events from '../../lib/db/eventsData';
import Custom404 from '../404';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC, useEffect } from 'react';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { BsCalendarDate } from 'react-icons/bs';
import { GiDuration } from 'react-icons/gi';
import { IoLocationOutline } from 'react-icons/io5';
import { IoTicket } from 'react-icons/io5';

interface Props {
  name: string;
  profile: string;
  designation: string;
  socials: {
    [key: string]: string;
  };
}

const SpeakerCard: FC<Props> = ({ name, profile, designation, socials }) => {
  const { theme } = React.useContext(SettingsContext);

  return (
    <div
      className={`rounded-xl ${
        theme === 'dark' ? 'bg-zinc-800' : 'bg-white'
      }  flex flex-col items-center p-6 drop-shadow-lg transition-all duration-300 ease-in-out hover:shadow-lg md:p-6  `}
    >
      <div className="h-36 w-fit overflow-hidden rounded-full">
        <Image
          alt="Profile"
          className="h-full w-full"
          src={profile}
          width={500}
          height={500}
        ></Image>
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-2xl">{name}</h2>
        <p
          className={`${
            theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
          } text-sm`}
        >
          {designation}
        </p>
        <div className="mt-2 flex justify-center gap-1">
          {socials?.Twitter?.trim().length > 0 && (
            <a href={socials.Twitter} target="_blank" rel="noreferrer">
              <AiOutlineTwitter className="cursor-pointer text-2xl" />
            </a>
          )}
          {socials?.Github?.trim().length > 0 && (
            <a href={socials.Github} target="_blank" rel="noreferrer">
              <AiOutlineGithub className="cursor-pointer text-2xl" />
            </a>
          )}
          {socials?.LinkedIn?.trim().length > 0 && (
            <a href={socials.LinkedIn} target="_blank" rel="noreferrer">
              <AiOutlineLinkedin className="cursor-pointer text-2xl" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const EventDetails: NextPage = () => {
  const { theme } = React.useContext(SettingsContext);
  interface Event {
    id: string;
    name: string;
    location: string;
    date: Date;
    link: string;
    image: string;
    details?: string;
    speakers?: SpeakerType[];
    duration?: string;
    requiresTicket?: boolean;
    sponsors?: string[];
    organizer?: string;
  }
  const [current, setEvent] = React.useState<Event | null>(null);
  const router = useRouter();
  const id = router.query.eventName;

  useEffect(() => {
    const currentEvent = events.find((e) => e.id === id);
    if (currentEvent) {
      setEvent(currentEvent);
    }
  }, [id]);
  if (!current) return <Custom404 />;
  else
    return (
      <div className="pt-24 pb-8">
        {/* Event Detail wrapper */}
        <div className=" mx-auto w-11/12 md:w-8/12">
          {/* Event Image and details container */}
          <div
            className={`${
              theme === 'dark' ? 'bg-zinc-900' : 'bg-neutral-200'
            } rounded-lg`}
          >
            {/* Event Image */}
            <div className="relative rounded-lg md:h-96">
              <Image
                alt="Event Image"
                className="h-full w-full rounded-lg"
                src={current.image}
                width={1000}
                height={1000}
              ></Image>
            </div>
            {/* Event Details short */}
            <div className="px-4 py-6 md:px-6 md:py-8 ">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold md:text-4xl">
                    {current?.name}
                  </h1>
                  <p className="mt-2 text-neutral-400">
                    By {current?.organizer}
                  </p>
                </div>
                <button className="hidden rounded-md bg-color-pink px-4 py-2 text-neutral-100 shadow-md md:block">
                  <a href={current?.link} target="_blank" rel="noreferrer">
                    Know More
                  </a>
                </button>
                <div className="fixed bottom-0 left-0 z-50 block w-full md:hidden">
                  <button className="w-full bg-color-pink px-4 py-3 text-lg text-neutral-100 ">
                    <a href={current?.link} target="_blank" rel="noreferrer">
                      Know More
                    </a>
                  </button>
                </div>
              </div>
              <div
                className={`mt-4 flex max-w-full flex-col gap-4 p-4 md:max-w-fit md:flex-row md:items-center ${
                  theme === 'dark' ? 'bg-zinc-800' : 'bg-neutral-300'
                } text-md rounded-md shadow-md md:text-lg`}
              >
                <div className="flex items-center gap-2">
                  <BsCalendarDate />
                  <p>
                    {current?.date.toLocaleString('en-IN', {
                      dateStyle: 'long',
                    })}
                  </p>
                </div>
                <hr
                  className={`${
                    theme === 'dark' ? 'border-white' : 'border-black'
                  } hidden w-6 rotate-90 md:block`}
                ></hr>
                <div className="flex items-center gap-2  ">
                  <IoLocationOutline className="" />
                  <p>{current?.location}</p>
                </div>
              </div>
            </div>
          </div>
          {/* New section start */}
          <div
            className={`mt-4 ${
              theme === 'dark' ? 'bg-zinc-900' : 'bg-neutral-200'
            } rounded-xl`}
          >
            <div className="px-4 py-6 md:px-6 md:py-8 ">
              {/* About the event */}
              <div className="">
                <h1 className="text-2xl font-bold md:text-4xl">
                  About the Event
                </h1>
                <hr className="mt-4 block border-neutral-600 md:hidden"></hr>

                {/* About the event icons */}
                <div className="mt-4 flex flex-col gap-2 md:mt-5 md:flex-row md:gap-8">
                  <div className="flex items-center gap-2">
                    <div
                      className={`rounded-lg p-2 ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
                      }`}
                    >
                      <GiDuration className="text-2xl " />
                    </div>
                    <div>
                      {/* <p>Duration</p> */}
                      <p> {current?.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`rounded-lg p-2 ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
                      }`}
                    >
                      <IoTicket className="text-2xl" />
                    </div>
                    <div>
                      {/* <p>Entry</p> */}
                      <p>
                        {current?.requiresTicket ? 'Requires Ticket' : 'Free'}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-lg ">
                  <p
                    className={`${
                      theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                    } whitespace-pre-line`}
                  >
                    {current?.details}
                  </p>
                </div>
              </div>
              <div className="mt-8 md:mt-10">
                <h1 className="text-2xl font-bold md:text-4xl ">Speakers</h1>
                <hr className="mt-4 block border-neutral-600 md:hidden"></hr>
                <div className="relative mt-6 grid grid-cols-1 gap-3 text-lg sm:grid-cols-2 lg:grid-cols-3 ">
                  {current?.speakers ? (
                    current?.speakers?.map((speaker, index) => (
                      <SpeakerCard
                        key={index}
                        name={speaker.name}
                        designation={speaker.designation}
                        profile={speaker.profile}
                        socials={speaker.socials}
                      />
                    ))
                  ) : (
                    <p>Speakers not yet revealed!</p>
                  )}
                </div>
              </div>
              <div className="mt-12 mb-4">
                <h1 className="text-2xl font-bold md:text-4xl ">
                  Event Sponsors
                </h1>
                <hr className="mt-4 block border-neutral-600 md:hidden"></hr>
                {current?.sponsors ? (
                  <div
                    className={`mt-6 grid grid-cols-2 items-center gap-8 md:grid-cols-4 md:gap-8 ${
                      theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-400'
                    } rounded-lg p-4`}
                  >
                    {current?.sponsors?.map((sponsor, index) => {
                      return (
                        <div key={index} className="overflow-hidden">
                          <Image
                            alt="Sponsor"
                            className="w-44"
                            src={sponsor}
                            width={500}
                            height={500}
                          ></Image>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="mt-5">No sponsors to show!</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default EventDetails;
