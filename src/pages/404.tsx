import UnstyledLink from '@/components/links/UnstyledLink';

import React from 'react';

const Custom404 = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="mb-4 text-8xl font-bold">404 - Page Not Found</h1>
        <p className="text-2xl">
          {' '}
          Oops! This page is under construction, but you can help make it
          faster!
        </p>
        &nbsp;
        <span className="block text-xl">
          Contribute to our open-source project and help improve the experience
          for everyone.
        </span>
        <p className="mt-4 text-center">
          You can contribute at{' '}
          <UnstyledLink
            href="https://github.com/UniKonf/vibey"
            className="text-primary"
          >
            UniKonf/vibey
          </UnstyledLink>
          .
        </p>
      </div>
    </>
  );
};

export default Custom404;
