import { EventInterface } from '../types';

export const eventsJ: EventInterface[] = [
  {
    id: 1,
    title: 'Pozitive Technologies',
    description: 'Full-stack conference in Poznań, Poland\\r\\nNov 24 2022',
    link: 'https://pozitive.tech/en',
    startTime: '2022-11-24T12:00:00',
    themes: ['devops', 'fullstack', 'security'],
    endTime: '2022-11-25T18:36:52',
    socials: [
      { link: 'https://www.facebook.com', name: 'facebook' },
      { link: 'https://www.twitter.com', name: 'twitter' },
    ],
  },
  {
    id: 2,
    title: 'FuzzCon Europe',
    description:
      'Automotive Edition brings together leading developers, DevOps engineers, and security experts from the automotive industry.',
    link: 'https://www.fuzzcon.eu/automotive-edition',
    startTime: '2022-11-17T12:00:00',
    themes: ['devops', 'fullstack', 'security'],
    endTime: '2022-11-18T13:40:20',
    socials: [
      { link: 'https://www.facebook.com', name: 'facebook' },
      { link: 'https://www.twitter.com', name: 'twitter' },
    ],
  },
  {
    id: 3,
    title: 'MongoDB x Google Cloud Game Day',
    description:
      'Level up and show off your skills during the the MongoDB x Google Cloud Skills Boost Virtual Game Day. This is an interactive, challenge-based game that kicks off on December 13 and will be available through December 15. Come for the practical hands-on experience using MongoDB Atlas on Google Cloud and potentially win some prizes (some cool swag kits and more!).',
    link: 'https://www.mongodb.com/webinars/google-virtual-lab-game-day',
    startTime: '2022-12-13T09:00:00',
    themes: ['devops', 'gamedev'],
    endTime: '2022-12-15T10:00:00',
    socials: [{ link: 'https://twitter.com/MongoDB', name: 'twitter' }],
  },
];
