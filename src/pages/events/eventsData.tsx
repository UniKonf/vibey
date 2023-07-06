import { SpeakerType } from '@/lib/types';
type EventPageDataType = {
  id: string;
  name: string;
  location: string;
  date: Date;
  link: string;
  image: string;
  logo?: string;
  organizer: string;
  details?: string;
  speakers?: SpeakerType[];
  duration?: string;
  requiresTicket?: boolean;
  sponsors?: string[];
};
export const events: EventPageDataType[] = [
  {
    id: 'id1',
    name: 'Web3Conf India',
    location: 'Novotel Goa, Dona Silvia Resort, India',
    date: new Date('11 August 2023 GMT'),
    link: 'https://web3confindia.xyz/',
    image: '/images/events/web3conf.png',
    details: `Web3Conf is India's first and biggest chain agnostic conference by GirlScript Foundation. Last year, this conference was conducted around the same duration with over 1500+ enthusiastic web3.0 lovers in Goa. Along with a Hackathon 'Hack - Web3conf', we also have Startup Pitch Sessions and Talks and Panel discussions as well as company booths.\n \nGirlScript is supporting beginners in tech education since 2017 with programs like GirlScript Summer of Code, LetsPy, Tech In Slums, Uplift Project, etc. The foundation has impacted 500,000+ learners and has been featured in Forbes Asia, Tedx, Booking.com Technology Playmaker, ElasticSearch Cause Awards, Women Tech Network Awards, Society of Women Engineers Magazine, etc, and has worked with over 250+ global tech and social good companies like Microsoft, Redhat, Twitter, Atlassian, Filecoin, Polygon, Dapper Labs, Child Rights & You, etc. \n \nThe foundation also conducted Web3.0 beginner-friendly boot camps in 52 cities in India impacting 15,000+ learners. To create opportunities with Builders, Organizers, Learners, and Entrepreneurs, GirlScript also conducted Web3 Villa Meetups via Web3 Meetup India in 10+ cities as well as International NFT Day in 12 cities along with Flow Hackathon 2023 with over 7000+ developers and Winter of Blockchain with over 4000 developers. This year, Our team is all set to welcome the 3000+ Web3.0 enthusiasts in Goa for Web3conf 2023.`,
    speakers: [
      {
        name: 'Saurabh Bangad',
        profile:
          'https://media.licdn.com/dms/image/C5603AQHwVfcShhShUA/profile-displayphoto-shrink_800_800/0/1565879978905?e=1694044800&v=beta&t=1CwY3DW84_OuTHz2g9-YX9-2_h0QUtPJ069CwPFknK8',
        designation: 'Works in Google',
        socials: {
          Github: '',
          Twitter: '',
          LinkedIn: 'https://www.linkedin.com/in/saurabhbangad/',
        },
      },
      {
        name: 'Krishna Upadhyaya',
        profile: 'https://web3confindia.xyz/assets/krishna-a03820c5.webp',
        designation: 'Works in Polygon',
        socials: {
          Github: '',
          Twitter: 'https://twitter.com/0xkris16',
          LinkedIn: '',
        },
      },
      {
        name: 'Anam Ansari ',
        profile: 'https://web3confindia.xyz/assets/anam-a66def25.webp',
        designation: 'DevRel Intern at Solana Foundation',
        socials: {
          Github: '',
          Twitter: 'https://twitter.com/anamansari062',
          LinkedIn: '',
        },
      },
      {
        name: 'Harpalsinh Jadeja',
        profile: 'https://web3confindia.xyz/assets/harpalsinh-88d02023.webp',
        designation: 'DevRel in Celo Foundation',
        socials: {
          Github: '',
          Twitter: 'https://twitter.com/HarpalJadeja11',
          LinkedIn: '',
        },
      },
    ],
    duration: '4 Days',
    requiresTicket: true,
    sponsors: [
      'https://web3confindia.xyz/assets/coinmarketcap-38d6156a.png',
      'https://web3confindia.xyz/assets/StackOS-be0b9a84.png',
      'https://web3confindia.xyz/assets/AssetMantle-87f72acf.png',
      'https://web3confindia.xyz/assets/Alchemy-419ce528.png',
    ],
    organizer: 'GirlScript Foundation',
  },
  {
    id: 'id2',
    name: 'International React conference',
    location: 'Bangalore, India',
    date: new Date('07 July 2023 GMT'),
    link: 'https://reactnexus.com/',
    image: '/images/events/reactNexus.webp',
    details:
      'React Nexus is an international React Conference hosted in Bangalore on July 07-08, 2023. React Nexus will be a two day in-person conference fully packed with amazing talks on topics related to React and React Native. You will get an opportunity to network with enthusiastic react developers at this conference.',
    speakers: [
      {
        name: 'Tapas Adhikary',
        profile:
          'https://reactnexus.com/_next/image?url=%2F_next%2Fstatic%2Fimages%2Ftapas-ccb4e5d8714a7ab1f23ec8ca7197207d.png&w=640&q=75',
        designation: 'Founder, ReactPlay',
        socials: {
          Github: '',
          Twitter: 'https://twitter.com/tapasadhikary',
          LinkedIn: 'https://www.linkedin.com/in/tapasadhikary/',
        },
      },
      {
        name: 'Tejas Kumar',
        profile:
          'https://reactnexus.com/_next/image?url=%2F_next%2Fstatic%2Fimages%2Ftejas-2dd2fb683aecc1e23310d6536ba5a5a3.png&w=640&q=75',
        designation: 'DevRel Consultant',
        socials: {
          Github: '',
          Twitter: 'https://twitter.com/tejaskumar_',
          LinkedIn: 'https://www.linkedin.com/in/tejasq/',
        },
      },
      {
        name: 'Varsha Saha',
        profile:
          'https://reactnexus.com/_next/image?url=%2F_next%2Fstatic%2Fimages%2Fvarsha-0495bb8c6916357a0d1deeca475c0d48.png&w=640&q=75',
        designation: 'Engineering Manager, Flipkart',
        socials: {
          Github: '',
          Twitter: 'https://twitter.com/saha_varsha',
          LinkedIn: 'https://www.linkedin.com/in/varsha-saha-0a10a0113/',
        },
      },
      {
        name: 'Sanket Sahu',
        profile:
          'https://reactnexus.com/_next/image?url=%2F_next%2Fstatic%2Fimages%2Fsanket-bda4b112d19c3e4d1b80d15ff367c6c9.png&w=640&q=75',
        designation: 'Founder, GeekyAnts',
        socials: {
          Github: '',
          Twitter: 'https://twitter.com/sanketsahu',
          LinkedIn: 'https://www.linkedin.com/in/sanketsahu/',
        },
      },
      {
        name: 'Matheus Albuquerque',
        profile:
          'https://reactnexus.com/_next/image?url=%2F_next%2Fstatic%2Fimages%2Fmatheus-211342b557a5a1b4fa9a15e6b05097e3.png&w=640&q=75',
        designation: 'Sr. Software Engineer, Medallia',
        socials: {
          Github: '',
          Twitter: 'https://twitter.com/ythecombinator',
          LinkedIn: 'https://www.linkedin.com/in/ythecombinator/',
        },
      },
    ],
    duration: '1 Day',
    requiresTicket: true,
    sponsors: [
      'https://reactnexus.com/_next/image?url=%2F_next%2Fstatic%2Fimages%2Ffreshworks-cc3703c4104d7be3e66c6a47919c9a47.png&w=640&q=75',
      'https://reactnexus.com/_next/image?url=%2F_next%2Fstatic%2Fimages%2Flocofy-blue-3b34191c3b66f089a31030912284bcdc.png&w=384&q=75',
      'https://reactnexus.com/_next/image?url=%2F_next%2Fstatic%2Fimages%2Fporter-bed62b54e2696dbbbea3f03b04f43211.png&w=384&q=75',
      'https://reactnexus.com/_next/image?url=%2F_next%2Fstatic%2Fimages%2Fgeekyants-02e85272715fdc177908a568b6d99d40.png&w=256&q=75',
    ],
    organizer: 'React Nexus',
  },
  {
    id: 'id3',
    name: 'Civo Navigate ',
    location: 'London, UK',
    date: new Date('05 September 2023 GMT'),
    link: 'https://www.civo.com/navigate ',
    image: '/images/events/civo.svg',
    details:
      'Civo Navigate Europe 2023 is a tech event packed with talks and workshops focused on navigating and succeeding within the cloud native landscape. There will be an overriding theme of innovation, with a focus on helping companies better leverage cloud native technologies. Education will be at the forefront of all talks and workshops, aimed at various skill levels. \nSome of the brightest minds in cloud native will be joining us at the event, including a globally renowned keynote speaker who has inspired many people in the techspace - to be unveiled soon.',
    speakers: [
      {
        name: 'Marty Weiner',
        profile:
          'https://www.civo.com/assets/public/navigate/eu-2023/keynote-speakers/marty-weiner-bc20e1948c3a1ab74a50aeec592c6660e32f01e650d5ace78acf91808a0a5a6b.png',
        designation: 'Founding engineer at Pinterest',
        socials: {
          Github: '',
          Twitter: 'https://twitter.com/MartyWeiner',
          LinkedIn: '',
        },
      },
      {
        name: 'Nick Caldwell',
        profile:
          'https://www.civo.com/assets/public/navigate/eu-2023/keynote-speakers/nick-caldwell-e3babd1fd5dd1c9937d1992e15241e9f55373dd1ed938d74f6d950e3a98d9344.png',
        designation: 'Former General Manager at Twitter',
        socials: {
          Github: '',
          Twitter: 'https://twitter.com/nickcald',
          LinkedIn: 'https://www.linkedin.com/in/nickcaldwell/',
        },
      },
    ],
    duration: '2 Days',
    requiresTicket: true,
    organizer: 'Civo',
  },
  {
    id: 'id4',
    name: 'International JavaScript Conference',
    location: 'New-york',
    date: new Date('25 September 2023 GMT'),
    link: 'https://javascript-conference.com/new-york/',
    image: '/images/events/JS.jpg',
    details:
      'ALWAYS LEARNING, ALWAYS GETTING BETTER.\n\n The JavaScript world is constantly evolving and there’s something new to learn every day. We at International JavaScript Conference want you to be a part of that change and stay on top of the latest trends.\n\nTHE FULLSTACK CONFERENCE \n\nFrom Angular and React to WebAssembly; from Progressive Web Apps to JAMstack – international experts share insights on the present and future JavaScript. Join us to broaden your knowledge and network with other JS enthusiasts.',
    speakers: [
      {
        name: 'Erin Zimmer',
        profile:
          'https://conftool-img-production.s3-eu-west-1.amazonaws.com/1688026805180_zimmer_erin_wp.jpg',
        designation: 'Senior developer at Cash App',
        socials: {
          Github: '',
          Twitter: 'https://twitter.com/ErinJZimmer',
          LinkedIn: '',
        },
      },
      {
        name: 'Miško Hevery',
        profile:
          'https://conftool-img-production.s3-eu-west-1.amazonaws.com/1667985505966_hevery_misko_wp.jpg',
        designation: 'Builder.io',
        socials: {
          Github: '',
          Twitter: 'https://twitter.com/mhevery',
          LinkedIn: '',
        },
      },
      {
        name: 'Deepa Subramanian',
        profile:
          'https://conftool-img-production.s3-eu-west-1.amazonaws.com/1655119528952_subramanian_deepa_wp.jpg',
        designation: 'Adobe Inc',
        socials: {
          Github: '',
          Twitter: '',
          LinkedIn: '',
        },
      },
      {
        name: 'Rainer Hahnekamp',
        profile:
          'https://conftool-img-production.s3-eu-west-1.amazonaws.com/1646994559669_hahnekamp_rainer_wp.jpg',
        designation: 'AngularArchitects.io',
        socials: {
          Github: '',
          Twitter: 'https://twitter.com/rainerhahnekamp',
          LinkedIn: '',
        },
      },
      {
        name: 'Jaime Garcia',
        profile:
          'https://conftool-img-production.s3-eu-west-1.amazonaws.com/1649148376611_garcia_jaime_wp.jpg',
        designation: 'Software Engineer at BlockBar',
        socials: {
          Github: '',
          Twitter: 'https://twitter.com/jaumint',
          LinkedIn: '',
        },
      },
      {
        name: 'Maximiliano Firtman',
        profile:
          'https://conftool-img-production.s3-eu-west-1.amazonaws.com/1667983868535_firtman_maximiliano_wp.jpg',
        designation: 'Works at firt.dev',
        socials: {
          Github: '',
          Twitter: 'https://twitter.com/firt',
          LinkedIn: '',
        },
      },
    ],
    duration: '4 Days',
    requiresTicket: true,
    sponsors: [
      'https://javascript-conference.com/wp-content/uploads/2022/10/MySQL-1.jpg',
      'https://javascript-conference.com/wp-content/uploads/2022/10/Passage.id_-1.jpg',
      'https://javascript-conference.com/wp-content/uploads/2022/10/Rollbar-1.jpg',
      'https://javascript-conference.com/wp-content/uploads/2022/10/Frontegg-1.jpg',
    ],
    organizer: 'Software & Support Media Group',
  },
  {
    id: 'id5',
    name: 'REACT INDIA',
    location: 'Goa, India',
    date: new Date('05 October 2023 GMT'),
    link: 'https://www.reactindia.io/',
    image: '/images/events/reactindia.png',
    details:
      "We are BAAACK!️ Bigger, Better, and Hybrid. \n\nThat's right folks! India's biggest React conference is back again. And this time, it's gonna be bigger, better, and hybrid. React India is an international conference that provides a platform for developers to share and discuss their insights and experiences with React! It Provides developers from India an opportunity meet, listen, and network with React Developers and Open Source Contributors all around the world! This year the conference will be held from 6th Oct to 7th Oct Conference will follow, Covid-19 measures and policies.\n\nWhy attend React India ?\nReact India is an international community-led non-profit initiative that provides a platform for developers to share their insights and experiences with React.\n\nAs the organizers of React India, we consider it our success when people at our conferences network with each other and build cool things using something they learned or someone they met at React India. We feel proud when people wait for this conference to happen every year and meet new people who end up being their friends, or future co-workers.",
    speakers: [
      {
        name: 'Sathya Gunasekaran',
        profile:
          'https://www.reactindia.io/_ipx/w_256,q_100/https%3A%2F%2Fmedia.graphassets.com%2FfeNpDUTrG9ZcpuzUO5vA?url=https%3A%2F%2Fmedia.graphassets.com%2FfeNpDUTrG9ZcpuzUO5vA&w=256&q=100',
        designation: 'Software Engineer React core team, Meta',
        socials: {
          Github: '',
          Twitter: 'https://twitter.com/_gsathya',
          LinkedIn: '',
        },
      },
      {
        name: 'Taz Singh',
        profile:
          'https://www.reactindia.io/_ipx/w_256,q_100/https%3A%2F%2Fmedia.graphassets.com%2FxvpNpQRCTvK0ziiXaezn?url=https%3A%2F%2Fmedia.graphassets.com%2FxvpNpQRCTvK0ziiXaezn&w=256&q=100',
        designation: 'Founder, Guild',
        socials: {
          Github: '',
          Twitter: 'https://twitter.com/tazsingh',
          LinkedIn: '',
        },
      },
      {
        name: 'Gant Laborde',
        profile:
          'https://www.reactindia.io/_ipx/w_256,q_100/https%3A%2F%2Fmedia.graphassets.com%2FH8dOxrC9S0y8d2JfKyAW?url=https%3A%2F%2Fmedia.graphassets.com%2FH8dOxrC9S0y8d2JfKyAW&w=256&q=100',
        designation: 'Google Dev Expert, Owner of Infinite Red',
        socials: {
          Github: '',
          Twitter: 'https://twitter.com/GantLaborde',
          LinkedIn: '',
        },
      },
      {
        name: 'Shruti Kapoor',
        profile:
          'https://www.reactindia.io/_ipx/w_256,q_100/https%3A%2F%2Fmedia.graphassets.com%2FkaSRV7FQ4Wpq4fzKjtdT?url=https%3A%2F%2Fmedia.graphassets.com%2FkaSRV7FQ4Wpq4fzKjtdT&w=256&q=100',
        designation: 'Front End Engineer, Slack',
        socials: {
          Github: '',
          Twitter: 'https://twitter.com/shrutikapoor08',
          LinkedIn: '',
        },
      },
    ],
    duration: '3 Days',
    requiresTicket: true,
    sponsors: [
      'https://www.reactindia.io/_ipx/w_128,q_100/%2F_next%2Fstatic%2Fmedia%2Freact-mumbai.89160cc4.png?url=%2F_next%2Fstatic%2Fmedia%2Freact-mumbai.89160cc4.png&w=128&q=100',
      'https://www.reactindia.io/_ipx/w_96,q_100/%2F_next%2Fstatic%2Fmedia%2Freact-alicante-logo.2b47d689.png?url=%2F_next%2Fstatic%2Fmedia%2Freact-alicante-logo.2b47d689.png&w=96&q=100',
      'https://www.reactindia.io/_ipx/w_96,q_100/%2F_next%2Fstatic%2Fmedia%2Fjs-blr-logo.156a046e.jpeg?url=%2F_next%2Fstatic%2Fmedia%2Fjs-blr-logo.156a046e.jpeg&w=96&q=100',
      'https://www.reactindia.io/_ipx/w_96,q_100/%2F_next%2Fstatic%2Fmedia%2Fjavascript-kingdom.660abf4f.png?url=%2F_next%2Fstatic%2Fmedia%2Fjavascript-kingdom.660abf4f.png&w=96&q=100',
    ],
    organizer: 'Geekabyte',
  },
  {
    id: 'id6',
    name: 'Open Source India',
    location: 'NIMHANS Convention Center, Bengaluru, India',
    date: new Date('12 October 2023 GMT'),
    link: 'https://www.opensourceindia.in/',
    image: '/images/events/open-source.jpg',
    details:
      'Open Source India (OSI) is an attempt by the team at Open Source For You magazine in partnership with India’s Open Source community and industry—to bring various stake-holders under one roof. The mission of OSI is simple—to accelerate development and deployment of Open Source in India, and beyond. \n\nWhat happens at Open Source India?\nJust like a large scale “tech fest” there various things happen simultaneously. However, the core of the event is the Conference that attracts the best IT talent from all across India. The conference is spread across 3 halls which can seat 1100+ audience at any point of time. Multiple tracks (some are 2-day, some 1-day and some are half-day tracks) get conducted simultaneously. Open Source experts and luminaries from all across India, and the globe share their knowledge and wisdom with the techie audience. And, these techies don’t just listen to the talks but also network with each other. They also network with the speakers and the exhibitors. Some seek talent for their team. Some seek new opportunities to grow their careers. Some seek new ideas. Some seek members to join their Open Source project communities. And, then there are LIVE contests and quizzes where lots of gadgets and gifts are given away to winners–right then and there. Plus, free tea & coffee to keep the momentum at a high. You should see the buzz in the halls during the break-out of lunch sessions. It’s all happening here. In a festive “Open” environment.\n\n The 2023 edition of Open Source India (OSI) will be its 20th edition! We cannot thank the Open Source community and the industry enough for enabling us to reach this milestone To make it a SPECIAL edition, we plan to undertake many improvements and upgrades, including - \n 1. Better and more space in Workshop hall.\n 2. Smarter registration and on-site printing of badges.\n 3. Smarter system to upgrade passe.\n 4. More international experts as speaker.\n 5. Increased “In-depth sessions” and “Hands-on workshops.\n 6. Gifts and lucky draws for 1st 2000 registrant. \n Plus, access to Keynotes and the Community Track will be FREE for everyone who registers be 12th of October.',
    duration: '2 Days',
    requiresTicket: false,
    sponsors: [
      'https://www.opensourceindia.in/wp-content/uploads/2023/04/googlecloud_OSI2023.jpg',
      'https://www.opensourceindia.in/wp-content/uploads/2023/06/AWS_OSI-2023-.jpg',
      'https://www.opensourceindia.in/wp-content/uploads/2023/06/pure-storage_OSI-2023.jpg',
      'https://www.opensourceindia.in/wp-content/uploads/2023/06/Apryse_OSI2023-1.jpg',
    ],
    organizer: 'OSI',
  },
  {
    id: 'id7',
    name: 'Builders Hub: BuidlWithUs',
    location: 'Gurugram, Haryana, India',
    date: new Date('June 24 2023 GMT'),
    link: 'https://lu.ma/BuildersHub-BuidlWithUs',
    image: '/images/events/builders.webp',
    details:
      "​​​🚀 Get ready to join the ranks of web3 builders and create the decentralized future of tomorrow!\n\n🏢 Introducing the 'Builders Hub: BuildRL Powered by FlipkartXPolygon Delhi Guild Edition' hosted at Flipkart Office in the Cyber City, Gurgaon.\n\n💪 Our event is all about empowering builders like you with the knowledge, tools, and resources you need to succeed in the rapidly-evolving world of web3 development.\n\n​​👨‍💻 Bring your laptops and get ready to dive deep into the world of web3 with our immersive code-along session. Our expert speakers will guide you through an exciting lineup of talks and activities designed to equip you with the knowledge and tools you need to succeed in this rapidly-evolving industry.\n\n​​🤝 But that's not all - the event will also feature a fun activity to help you connect with other builders in the Web3 space. This is an incredible opportunity to expand your network, forge new partnerships, and learn from the successes and failures of others in the web3 space.​​\n\n🍕👕 And of course, we'll keep you fueled up and looking sharp throughout the event with food, drinks, and swag. So come hungry, thirsty, and ready to rock! \n\n🎉 Don't miss out on this incredible opportunity to join the ranks of web3 builders and build the decentralized future of tomorrow. Register now and unleash your full potential as a builder!",
    speakers: [
      {
        name: 'Saksham Taneja',
        profile: 'https://avatars.githubusercontent.com/u/43172716?v=4',
        designation: 'Developer Community @ Polygon',
        socials: {
          Github: 'https://github.com/sakshamtaneja21',
          Twitter: 'https://twitter.com/sakshamtaneja00',
          LinkedIn: 'https://www.linkedin.com/in/tanejasaksham/',
        },
      },
      {
        name: 'Nishant Mishra',
        profile:
          'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=120,height=120/avatars/wu/15ba6e61-24a6-42d0-ac9a-cf0090f3fb9a',
        designation: 'Guild Mage @GuildDelhi',
        socials: {
          Github: 'https://github.com/Nishant2907',
          Twitter: 'https://twitter.com/curlyParadox',
          LinkedIn: 'https://www.linkedin.com/in/curlyparadox/',
        },
      },
    ],
    duration: '4hrs',
    requiresTicket: false,
    sponsors: [
      'https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-transparent-vector-3.png',
      'https://upload.wikimedia.org/wikipedia/commons/2/24/Polygon_blockchain_logo.png',
    ],
    organizer: 'Polygon/Guild',
  },
];
