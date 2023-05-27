import { EventType } from '@/lib/types';

export const sortEventsByDate = (events: EventType[]) => {
  return events.sort((a, b) => +a.date - +b.date);
};

//sort events by city name and date
export const sortEventsByFilter = (events: EventType[], filterName: string) => {
  if (filterName.length > 0) {
    events = events.filter((event) => event.location === filterName);
  }
  return events.sort((a, b) => +a.date - +b.date);
};
// Time
export function getTime(time: Date) {
  return `${new Date(time).toLocaleTimeString('en-US', {
    timeStyle: 'short',
  })}`;
}

// get Date
export function getDate(time: Date) {
  return `${new Date(time).toLocaleDateString('en-US', {
    dateStyle: 'medium',
  })}`;
}

// get TimeZone
export function getTimeZone(time: Date) {
  return `${(/\((.*)\)/.exec(new Date(time).toString()) || 'GMT')[1]
    .split(' ')
    .map((i) => i[0].toUpperCase())
    .join('')}`;
}

// get Date and Time
export function getDateTime(time: Date) {
  return `${getDate(time)} ${getTime(time)} ${getTimeZone(time)}`;
}
