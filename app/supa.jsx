import { createClient } from '@supabase/supabase-js'
const url ="https://hfnzmlicxajbwrimultq.supabase.co";
const publishableKey = "sb_publishable_YSoOTNaYX-q0MYwNf3uy4A_R6-Qp1sT";
const supabase = createClient(url, publishableKey);

export default supabase;