import { NextPage } from 'next';
import { Events, Heading, Hero, Navbar, SearchBar } from '../components';
import { events } from '../lib/data/events';

const Home: NextPage = () => {
  return (
    <div className="theme-dark min-h-screen bg-base-100 bg-gradient-to-bl from-[rgb(7,252,193,0.2)] to-[rgba(178,15,255,0.15)] font-bold text-base-content">
      <Navbar />
      <Hero />
      <div className="relative z-10 rounded-t-3xl border-2 border-b-0 border-primary bg-base-100/50 backdrop-blur">
        <div className="container mx-auto flex flex-col gap-14 py-10 px-2">
          <SearchBar />
          <div className="flex flex-col gap-6">
            <Heading
              title="Upcoming Events"
              btnText="All Events"
              href="/hackathons/upcoming"
            />
            <Events Events={events} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
