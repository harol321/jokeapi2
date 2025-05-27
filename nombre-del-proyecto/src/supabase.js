import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hfgsnbuwflxuchycerxq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmZ3NuYnV3Zmx4dWNoeWNlcnhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzMDE3NTcsImV4cCI6MjA2Mzg3Nzc1N30.LQXJZbxY6OIPccrsCFvhD67iqWiLObfmqKr-SIvil1E'
export const supabase = createClient(supabaseUrl, supabaseKey);

