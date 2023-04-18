import { EventType } from '@/lib/types';

export const sortEventsByDate = (events: EventType[]) => {
  return events.sort((a, b) => +a.date - +b.date);
};
