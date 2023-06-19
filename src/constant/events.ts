import { EventInterface } from '@/lib/types';

const events: EventInterface[] = [
  {
    id: 1,
    title: 'React India 2023',
    description:
      'Join the Indian edition of the most prestigious React conference from the International React community.An International 2-day conference.',
    startTime: '6 October 2023 9:00' as unknown as Date,
    endTime: '7 October 2023 19:00' as unknown as Date,
    link: 'https://www.reactindia.io/',
    socials: [
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/showcase/react-india-io/?originalSubdomain=in',
      },
      {
        name: 'twitter',
        link: 'https://twitter.com/react_india',
      },
    ],
    themes: ['React', 'networking', 'workshops'],
  },
];

export default events;
