import { NextPage } from 'next';
import { Events, Heading, SearchBar } from '../components';
import { useGetEvents } from '../lib/hooks/useGetEvents';

const Home: NextPage = () => {
  const { events, loading, error } = useGetEvents();
  return (
    <>
      <SearchBar />
      <div className="flex flex-col gap-6">
        <Heading
          title="Upcoming Events"
          btnText="All Events"
          href="/upcoming"
        />
        <Events events={events} loading={loading} />
        <p>{error}</p>
      </div>
      <div className="flex flex-col gap-6">
        <Heading title="Past Events" btnText="All Past Events" href="/past" />
        <Events events={events} loading={loading} />
        <p>{error}</p>
      </div>
    </>
  );
};
export default Home;
