import { EventInterface } from '@/lib/types';

import Event from '@/components/Event';
import Loader from '@/components/Loader';

import { FC } from 'react';

interface Props {
  events: EventInterface[] | undefined;
  loading?: boolean;
}

const Events: FC<Props> = ({ events, loading }) => {
  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
      {loading ? (
        <>
          <div className="card flex min-h-[14rem] animate-pulse items-center justify-center">
            <Loader />
          </div>
          <div className="card flex min-h-[14rem] animate-pulse items-center justify-center">
            <Loader />
          </div>
        </>
      ) : null}
      {events?.map((event) => <Event key={event.id} event={event} />)}
    </div>
  );
};

export default Events;
