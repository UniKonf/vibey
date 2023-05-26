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
        <meta name="description" content={descriptionContent} />
        <meta name="author" content="vibey" />
        {/* Open Graph */}
        <meta name="og:type" content="website" />
        <meta name="og:url" content={urlContent} />
        <meta name="og:title" content={titleContent} />
        <meta name="og:description" content={descriptionContent} />
        <meta
          name="og:image"
          content="https://vibey.vercel.app/static/gh_banner.png"
        />
        {/* Twitter  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={urlContent} />
        <meta name="twitter:title" content={titleContent} />
        <meta name="twitter:description" content={descriptionContent} />
        <meta
          name="twitter:image"
          content="https://vibey.vercel.app/static/gh_banner.png"
        />
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
