import '../styles/globals.css';
import ContextWrapper from '../lib/context/ContextWrapper';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ContextWrapper>
      <Component {...pageProps} />
    </ContextWrapper>
  );
}
