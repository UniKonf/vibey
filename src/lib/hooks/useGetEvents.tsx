import { eventsJ } from '@/lib/data/events';
import { EventInterface } from '@/lib/types';

import { useEffect, useState } from 'react';

export function useGetEvents(): {
  loading: boolean;
  error: any;
  events: EventInterface[] | undefined;
} {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [events, setEvents] = useState<EventInterface[] | undefined>(undefined);

  useEffect(() => {
    const getData = async (): Promise<any> => {
      try {
        setLoading(true);

        if (eventsJ != null) {
          setEvents(eventsJ);
        }
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    void getData();
  }, []);

  return { loading, error, events };
}
