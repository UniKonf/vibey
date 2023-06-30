import '../styles/globals.css';
import ContextWrapper from '../lib/context/ContextWrapper';
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
      <ContextWrapper>
        <Component {...pageProps} />
      </ContextWrapper>
    </SessionProvider>
  );
}
