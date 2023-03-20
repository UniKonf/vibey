import { Heading, Hero, SearchBar } from '../components';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <div className="relative z-10 rounded-t-3xl border-2 border-primary bg-base-100 supports-[backdrop-filter:blur(0px)]:bg-base-100/50 supports-[backdrop-filter:blur(0px)]:backdrop-blur-lg">
        <div className="container mx-auto flex max-w-6xl flex-col gap-14 py-5 px-2 pb-2">
          <SearchBar />
          <div className="flex flex-col gap-6">
            <Heading
              title="Upcoming Events"
              btnText="All Events"
              href="/upcoming"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
