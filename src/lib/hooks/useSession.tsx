import { AuthSession } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { supabase } from '../db/supabaseClient';

export function useSession() {
  const [session, setSession] = useState<AuthSession | null>(null);

  useEffect(() => {
    // @ts-ignore
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return session;
}
