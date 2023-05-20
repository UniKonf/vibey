import { sortEventsByDate } from '@/lib/helper';
import { EventType } from '@/lib/types';

import Event from '@/components/upcoming/Event';

import { NextPage } from 'next';

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
    link: '#',
    image: '/images/events/bg-2.webp',
  },
  {
    id: 'id3',
    name: 'Hackerstellar',
    location: 'New Delhi',
    date: new Date('17 Sept 2023 GMT'),
    link: '#',
    image: '/images/events/bg-3.jpeg',
  },
  {
    id: 'id4',
    name: 'HackCBS',
    location: 'New Delhi',
    date: new Date('28 Sept 2023 GMT'),
    link: '#',
    image: '/images/events/bg-4.webp',
  },
];

const EventPage: NextPage = () => {
  return (
    <div className="relative z-10 rounded-3xl ">
      <div className="layout mx-auto flex w-full max-w-6xl flex-col gap-14 py-10 px-2">
        <div className="mt-20 rounded-3xl bg-base-100/50 px-6 py-5 text-4xl text-transparent md:pb-20 md:pt-14 md:text-7xl">
          <span className="bg-gradient-to-bl from-[rgb(178,15,255)] to-[#ff5100] bg-clip-text">
            Upcoming Events
          </span>
        </div>

        <div className="events grid w-full gap-4 md:grid-cols-auto-sm md:gap-7">
          {sortEventsByDate(events).map((event) => (
            <Event key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
