import { Head, Html, Main, NextScript } from 'next/document';
import { FC } from 'react';

const descriptionContent =
  'The DEVCONF website is a one-stop place where you can find about All the online Conferences, workshops, and events';
const titleContent =
  'All the online Conference workshops, and events at one place';
const urlContent = 'https://dev-conf.vercel.app/';

const Document: FC = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={descriptionContent} />
        <meta name="author" content="DEVCONF" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={urlContent} />
        <meta property="og:title" content={titleContent} />
        <meta property="og:description" content={descriptionContent} />
        <meta property="og:image" content="/static/gh_banner.png" />
        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={urlContent} />
        <meta property="twitter:title" content={titleContent} />
        <meta property="twitter:description" content={descriptionContent} />
        <meta property="twitter:image" content="/static/gh_banner.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
