import GetContributor from '@/pages/Contributors/GetContributor';

import Head from 'next/head';

export default function Contributor() {
  return (
    <>
      <Head>
        <title>Contributors - Vibey</title>
      </Head>
      <div>
        <GetContributor />
      </div>
    </>
  );
}
