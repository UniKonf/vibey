import { EventType } from '@/lib/types';

import Event from '@/components/upcoming/Event';

import React from 'react';

type Props = { events: EventType[] };

const Events = ({ events }: Props) => {
  return (
    <div className="events grid grid-cols-auto-sm gap-7">
      {events.map((event) => (
        <Event key={event.id} {...event} />
      ))}
    </div>
  );
};

export default Events;
