import { EventInterface } from '@/lib/types';

const events: EventInterface[] = [
  {
    id: 1,
    title: 'API Day @BITS Pilani',
    description:
      'We are proud to celebrate the first edition of "API Day" @ BITS Pilani, Pilani Campus on 15 April 2023.  This is a one-day event, which aims to educate and inspire students about the importance of APIs and how they have revolutionized the world of technology.',
    startTime: '15 April 2023 9:00' as unknown as Date,
    endTime: '15 April 2023 17:00' as unknown as Date,
    link: 'https://www.bits-postman-lab.in/events',
    socials: [
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/company/bits-pilani-postman-lab/',
      },
    ],
    themes: ['APIs', 'Postman', 'Open Source'],
  },
  {
    id: 1,
    title: 'KubeCon + CloudNativeCon Europe 2023',
    description:
      'KubeCon + CloudNativeCon Europe 2023 has SOLD OUT for in-person tickets and the waitlist has now been closed. For those on the waitlist, notifications will be sent via email by 7 April, 2023 (PDT).',
    startTime: '18 April 2023 8:00' as unknown as Date,
    endTime: '21 April 2023 18:00' as unknown as Date,
    link: 'https://www.bits-postman-lab.in/events',
    socials: [
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/company/cloud-native-computing-foundation/',
      },
      {
        name: 'twitter',
        link: 'https://twitter.com/CloudNativeFdn',
      },
      {
        name: 'youtube',
        link: 'https://www.youtube.com/c/cloudnativefdn',
      },
      {
        name: 'facebook',
        link: 'https://www.facebook.com/CloudNativeComputingFoundation/',
      },
    ],
    themes: ['APIs', 'Postman', 'Open Source'],
  },
];

export default events;
