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
  {
    id: 1,
    title: 'KubeHuddle 2023',
    description:
      'KubeHuddle  conference where Developers, Platform Engineers, DevOps, SRE, Cloud Enthusiasts, Technical and Business Strategists come together to learn from each other, collaborate etc.',
    startTime: '17 May 2023 6:30' as unknown as Date,
    endTime: '19 May 2023 3:15 ' as unknown as Date,
    link: 'https://kubehuddle.com/2023/toronto/',
    socials: [
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/company/kubehuddle/?originalSubdomain=uk',
      },
      {
        name: 'twitter',
        link: 'https://twitter.com/KubeHuddle',
      },
      {
        name: 'discord',
        link: 'https://discord.com/invite/ErVgHCN',
      },
    ],
    themes: [
      'Cloud technologies',
      'Cloud Native and Kubernetes',
      'Technical Strategy',
      'App Development challenges',
    ],
  },
];

export default events;
