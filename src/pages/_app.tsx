import ContextWrapper from '@/lib/context/ContextWrapper';

import { ThemeProvider } from '@/components/ThemeProvider';

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { ReactElement } from 'react';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <SessionProvider
      // options={{
      //   clientMaxAge: 0,
      //   keepAlive: 0,
      // }}
      session={pageProps.session}
    >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ContextWrapper>
          <Component {...pageProps} />
        </ContextWrapper>
      </ThemeProvider>
    </SessionProvider>
  );
}
