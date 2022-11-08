import { AuthSession } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { supabase } from '../db/supabaseClient';

export function useSession(): AuthSession | null {
  const [session, setSession] = useState<AuthSession | null>(null);

  useEffect(() => {
    // @ts-expect-error
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return session;
}
