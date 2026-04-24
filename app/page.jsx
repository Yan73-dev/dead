'use client'

import { createClient } from 'supa.ts'

export default function Home() {
  function handleClick() {
    const supabase = createClient({
      url: process.env.NEXT_PUBLIC_SUPABASE_URL,
      key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      //supabase.from("monster").insert([{ name: "Dragon" }]).select(),
    })

    supabase.from("monster").insert([{ name: "Dragon" }]).select()
  }
  return (
    <div>
      <button type="button" onClick={handleClick}>scream</button>
    </div>
   )}