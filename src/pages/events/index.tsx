import { EventType } from '@/lib/types';

import Events from '@/components/upcoming/Events';

import { NextPage } from 'next';

const events: EventType[] = [
  {
    id: 'id1',
    name: 'Hackoona Matata',
    location: 'New Delhi',
    date: new Date(2023, 8, 10),
    link: '#',
    image:
      'https://source.unsplash.com/random?300x300?fest,hackathon,coding,tech',
  },
  {
    id: 'id2',
    name: 'HackCBS',
    logo: 'https://hackcbs.tech/assets/img/logo_final.png',
    location: 'New Delhi',
    date: new Date(2023, 8, 10),
    link: '#',
    image:
      'https://source.unsplash.com/random?300x300?hackathon,technology, conferences',
  },
  {
    id: 'id3',
    name: 'Hackerstellar',
    location: 'New Delhi',
    date: new Date(2023, 8, 10),
    link: '#',
    image: 'https://source.unsplash.com/random?300x300?hack,computers',
  },
  {
    id: 'id4',
    name: 'HackCBS',
    location: 'New Delhi',
    date: new Date(2023, 8, 10),
    link: '#',
    image: 'https://source.unsplash.com/random?300x300?club,party',
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

        <Events events={events} />
      </div>
    </div>
  );
};

export default EventPage;
