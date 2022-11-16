import { AuthSession } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { supabase } from '../db/supabaseClient';
import { EventInterface } from '../types';

export function useGetEvents(session?: AuthSession | null): {
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

        const { data, error, status } = await supabase
          .from('eventslist')
          .select('*');

        if (error != null && status !== 406) {
          throw new Error(error.message);
        }

        if (data != null) {
          console.log('Events found from Supabase: ', data);
          setEvents(data);
        }
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    void getData();
  }, [session]);

  return { loading, error, events };
}
