//libs

import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

//
export const supabase = createClient('https://apejucllmkfvwpfjkzcl.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwZWp1Y2xsbWtmdndwZmpremNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwNjQ5NTEsImV4cCI6MjA2MDY0MDk1MX0.Fi408mSA6iDm_P_bHeSh6mDWtU22HMUIY6CuGVmuqwE", {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

