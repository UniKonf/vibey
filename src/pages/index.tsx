import events from '@/constant/events';

import { Events, Heading, Hero, NewsLetter, SearchButton } from '../components';
import { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {/* {console.log('status', status)}
        {console.log('session: ', session)} */}

        {/* Signed in as {session.user?.name}{' '} */}
        {/* <img src={session.user?.avatar_url} alt='' /> */}
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      {/* hero section */}
      <Hero />
      <div className="relative">
        <div className="flex flex-col gap-14 py-5 pb-2">
          {/* search button */}
          <div className="layout text-right">
            <SearchButton />
          </div>
          <button onClick={() => signIn()}>Sign in</button>
          {/* Upcoming event section */}
          <section className="layout flex flex-col gap-6" id="upcoming-events">
            <Heading
              title="Upcoming Events"
              btnText="All Events"
              href="/events"
            />
            <Events events={events} />
          </section>

          {/* newsletter section */}
          <section
            className="relative overflow-hidden py-[2rem] text-center"
            id="newsletter-section"
          >
            <div className="bg">
              <div
                className="overlay translate-y-64 -rotate-[5deg] bg-color-pink opacity-60 sm:translate-y-52"
                style={{ width: '150%', height: '150%' }}
              ></div>
            </div>
            <div className="layout z-10">
              <Heading
                title="Subscribe to our Newsletter"
                className="justify-center"
              />
              <p className="m-auto mb-[5rem] max-w-[700px] sm:mb-[7rem]">
                Stay updated on tech events and hackathons with our newsletter.
                Get exclusive invites, expert insights, and join a vibrant
                community shaping the future of technology.
              </p>
              <div className="py-[2.5rem]">
                <NewsLetter />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default Home;
