import { FC } from 'react';
import { connectHits, HitsProvided } from 'react-instantsearch-core';
import { EventInterface } from '../../lib/types';
import Event from '../Event';
import Heading from '../Heading';

type Props = HitsProvided<EventInterface>;

/**
 * Search hits component: List of results
 */
const SerachHits: FC<Props> = ({ hits }) => {
  return (
    <div className="flex flex-col gap-6">
      <Heading title="Search" />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {hits.map((hit: EventInterface) => (
          <Event event={hit} key={hit.id} />
        ))}
      </div>
    </div>
  );
};

export default connectHits<Props, EventInterface>(SerachHits);
