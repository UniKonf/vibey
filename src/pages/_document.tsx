import { Head, Html, Main, NextScript } from 'next/document';
import { FC } from 'react';

const descriptionContent =
  'The vibey website is a one-stop place where you can find about All the online Conferences, workshops, and events';
const titleContent =
  'All the online Conference workshops, and events at one place';
const urlContent = 'https://vibeylive.vercel.app/';
const titleText = 'Vibey';

const Document: FC = () => {
  return (
    <Html lang="en">
      <title>{titleText}</title>
      <Head>
        <meta name="title" content={titleText} />
        <meta name="description" content={descriptionContent} />
        <meta
          name="keywords"
          content="Vibey, community-driven initiative, conferences, meetups, workshops, developers, web app, empowerment, online events, early stages, collective ambition, expertise, contributors, success, experienced developer, coding journey, valuable contributions."
        />
        <meta name="author" content="vibey" />
        <meta name="language" content="en" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={urlContent} />
        <meta property="og:title" content={titleContent} />
        <meta property="og:description" content={descriptionContent} />
        <meta property="og:image" content="/static/gh_banner.png" />
        {/* Twitter  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={urlContent} />
        <meta name="twitter:title" content={titleContent} />
        <meta name="twitter:description" content={descriptionContent} />
        <meta name="twitter:image" content="/static/gh_banner.png" />
        <link rel="icon" href="/static/gh_banner.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
