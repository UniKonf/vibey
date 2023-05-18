import { sortEventsByDate } from '@/lib/helper';
import { EventType } from '@/lib/types';

import Event from '@/components/upcoming/Event';

import { NextPage } from 'next';

const events: EventType[] = [
  {
    id: 'id1',
    name: 'Conference',
    location: 'Goa, India',
    date: new Date('06 Oct 2023 GMT'),
    link: 'https://www.reactindia.io/',
    image: '/images/events/reactIndia.webp',
  },
  {
    id: 'id2',
    name: 'Meetup',
    logo: '/images/events/hackthisfall.png',
    location: 'Indore, India',
    date: new Date('04 June 2023 GMT'),
    link: 'https://hackthisfall.tech/meetups',
    image: '/images/events/indore.fc51bdc.png',
  },
  {
    id: 'id3',
    name: 'Conference',
    location: 'Bengaluru, India',
    date: new Date('02 June 2023 GMT'),
    link: 'https://jsconf.in/',
    image: '/images/events/jsconfindia.png',
  },
  {
    id: 'id4',
    name: '',
    location: 'New Delhi, India',
    date: new Date('20 May 2023 GMT'),
    link: 'https://www.commudle.com/communities/gdgcloudnd/events/google-cloud-community-day-2023',
    image: '/images/events/gccd.png',
  },
];

const EventPage: NextPage = () => {
  return (
    <div className="relative z-10 rounded-3xl">
      <div className="layout mx-auto flex max-w-6xl flex-col gap-14 py-10 px-2">
        <div className="mt-20 rounded-3xl bg-base-100/50 px-6 py-5 text-4xl text-transparent md:pb-20 md:pt-14 md:text-7xl">
          <span className="bg-gradient-to-bl from-[rgb(178,15,255)] to-[#ff5100] bg-clip-text">
            Upcoming Events
          </span>
        </div>

        <div className="events grid grid-cols-auto-sm gap-7">
          {sortEventsByDate(events).map((event) => (
            <Event key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
