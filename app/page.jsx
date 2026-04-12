"use client"
import Image from "next/image";
import supabase from "./supa";

export default function Home() {
async function handleClick() {
  await supabase.insert.into("test").values({ name: "John Doe" }).execute();}
  return <button onClick={handleClick}>Insert</button>

} 