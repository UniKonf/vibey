import { FC } from 'react';
import { EventInterface } from '../../lib/types';
import Event from '../Event';

interface Props {
  events: EventInterface[] | undefined;
}

const Events: FC<Props> = ({ events }) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {events != undefined &&
        events.map((event) => <Event key={event.id} event={event} />)}
    </div>
  );
};

export default Events;
