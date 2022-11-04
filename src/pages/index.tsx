import { NextPage } from 'next';
import { useContext } from 'react';
import {
  DarkModeBtn,
  Events,
  Heading,
  Hero,
  Navbar,
  SearchBar,
} from '../components';
import Footer from '../components/Footer';
import { ThemeContext } from '../lib/context/theme';
import { events } from '../lib/data/events';

const Home: NextPage = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div
      className={`min-h-screen bg-base-100 bg-gradient-to-bl from-[rgb(7,252,193,0.2)] to-[rgba(178,15,255,0.15)] font-bold text-base-content ${
        theme === 'light' ? 'theme-light' : 'theme-dark'
      }`}
    >
      <Navbar />
      <Hero />
      <div className="relative z-10 rounded-t-3xl border-2 border-b-0 border-primary bg-base-100/50 backdrop-blur-lg">
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
          <div className="flex flex-col gap-6">
            <Heading
              title="Past Events"
              btnText="All Past Events"
              href="/hackathons/upcoming"
            />
            <Events Events={events} />
          </div>
          <div className="flex flex-col gap-6">
            <Heading title="Add your Event" />
            <div className="card max-w-max text-2xl font-medium">
              <p>
                1. Fork the repo github.com
                <br /> 2. Add Event data in markdown file
                <br /> 3. Create pull request and Your event will be live.
                <br /> 4. That’s it. Just that.
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <DarkModeBtn />
    </div>
  );
};
export default Home;
