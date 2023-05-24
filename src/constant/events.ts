import { EventInterface } from '@/lib/types';

const events: EventInterface[] = [
  {
    id: 1,
    title: 'JSConf India 2023',
    description:
      'Join the Indian edition of the most prestigious JS conference from the International JavaScript community.An International 1-day conference.',
    startTime: '2 June 2023 9:00' as unknown as Date,
    endTime: '2 June 2023 19:00' as unknown as Date,
    link: 'https://jsconf.in/',
    socials: [
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/company/jsconf-india/',
      },
      {
        name: 'twitter',
        link: 'https://twitter.com/jsconf_india',
      },
    ],
    themes: ['javascript', 'networking', 'workshops'],
  },
];

export default events;
