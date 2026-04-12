import { createClient } from '@supabase/supabase-js'
const url ="NEXT_PUBLIC_SUPABASE_URL=https://hfnzmlicxajbwrimultq.supabase.co";
const publishableKey = "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_YSoOTNaYX-q0MYwNf3uy4A_R6-Qp1sT";
const supabase = createClient(url, publishableKey);

export default supabase;