import { AuthSession } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { EventInterface } from '../types';
import { supabase } from '../db/supabaseClient';

export function getEvents(session?: AuthSession | null) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | null>(null);
  const [events, setEvents] = useState<EventInterface[] | undefined>(undefined);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);

        const { data, error, status } = await supabase
          .from('eventslist')
          .select('*');

        if (error && status !== 406) {
          throw error;
        }

        if (data) {
          console.log('Events found from Supabase: ', data);
          setEvents(data);
        }
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [session]);

  return { loading, error, events };
}
