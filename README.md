[![DEVCONF BANNER](/public/static/gh_banner.png)](https://dev-conf.vercel.app/)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mkubdev/DevConf/blob/main/LICENSE)

## DevConf

Find your next developer virtual event and workshop ⚡

## How to add your event ?

1. [Clone the repos](#getting-started)
2. Edit [`src/lib/data/events.ts`](https://github.com/mkubdev/DevConf/blob/main/src/lib/data/events.ts)

```ts
{
  id: 1, // we should remove id
  title: 'Event 1',
  description: 'Event 1 description',
  date: '2020-01-01',
  time: '12:00',
  link: 'https://www.google.com',
  socials: [
    { name: 'facebook', link: 'https://www.facebook.com' },
    { name: 'twitter', link: 'https://www.twitter.com' },
  ],
  themes: ['theme1', 'theme2'], // todo
},
```

3. Open a Pull Request

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/mkubdev/DevConf; cd DevConf
```

2. Install nextjs dependencies

```bash
npm install
```

3. Start up DevConf ⚡ !

```bash
npm run dev
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
