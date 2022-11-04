import { FC } from 'react';
import { EventInterface } from '../../lib/types';
import Event from './Event';

interface Props {
  Events: EventInterface[];
}

const Events: FC<Props> = ({ Events }) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {Events.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  );
};

export default Events;
