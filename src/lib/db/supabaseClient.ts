import { createClient } from '@supabase/supabase-js';
import { cp } from 'fs';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Please define the NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables inside .env.local'
  );
}

const test = createClient(supabaseUrl, supabaseAnonKey);
export const supabase = test;
