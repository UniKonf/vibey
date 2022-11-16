import { NextPage } from 'next';
import { Events, SearchBar } from '../../components';
import { useGetEvents } from '../../lib/hooks/useGetEvents';

const Upcoming: NextPage = () => {
  const { events, loading, error } = useGetEvents();

  return (
    <div className="relative z-10 rounded-3xl">
      <div className="container mx-auto flex max-w-6xl flex-col gap-14 py-10 px-2">
        <div className="mt-20 rounded-3xl bg-base-100/50 px-6 py-5 text-4xl text-transparent md:pb-20 md:pt-14 md:text-7xl">
          <span className="bg-gradient-to-bl from-[rgb(178,15,255)] to-[#ff5100] bg-clip-text">
            Upcoming Events
          </span>
        </div>
        <SearchBar />
        <div className="flex flex-col gap-6">
          <Events events={events} loading={loading} />
          <p>{error}</p>
        </div>
      </div>
    </div>
  );
};
export default Upcoming;
