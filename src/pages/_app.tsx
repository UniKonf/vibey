import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { DarkModeBtn } from '../components';
import ContextWrapper from '../lib/context/ContextWrapper';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ContextWrapper>
      <>
        <Component {...pageProps} />
        <DarkModeBtn />
      </>
    </ContextWrapper>
  );
}
