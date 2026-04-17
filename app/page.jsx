"use client"
import Image from "next/image";
import {supabase,supa} from "./supa";

export default function Home() {
async function handleClick() {
  await supabase.from("yan").insert([{name:"name"}])
  await supa.from("yan").insert([{name:"name"}])

}
  return <button onClick={handleClick} style={{color:"red",background:"yellow"}}>Insert</button>

} 