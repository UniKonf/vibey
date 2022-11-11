import { NextPage } from 'next';
import { Events, Heading, SearchBar } from '../components';
import { Results } from '../components/Search/Results';
import { index } from '../lib/AlgoliaClent';
import { useGetEvents } from '../lib/hooks/useGetEvents';

const Home: NextPage = () => {
  const { events, loading, error } = useGetEvents();
  if (events != null)
    void index.saveObjects(
      events.map((event) => ({ objectID: event.id, ...event }))
    );
  return (
    <>
      <SearchBar />
      <Results />
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
