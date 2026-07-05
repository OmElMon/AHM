import { createClient } from '@supabase/supabase-js';

declare const process: { env: Record<string, string | undefined> };

const url = process.env.EXPO_PUBLIC_SUPABASE_URL;
const key = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = url && key ? createClient(url, key) : null;
