import { createClient } from '@supabase/supabase-js';
//import {createBrowserClient} from "@supabase.ssr"
NEXT_PUBLIC_SUPABASE_URL="https://hfnzmlicxajbwrimultq.supabase.co"
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY="sb_publishable_YSoOTNaYX-q0MYwNf3uy4A_R6-Qp1sT"
const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);
//const supa = ()=> {createBrowserClient(url, publishableKey);}

export {supabase}