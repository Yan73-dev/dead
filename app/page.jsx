import Image from "next/image";
import supabase from "./supa";

export default function Home() {
async function handleClick() {
  supabase.from('test').insert({ name: 'John Doe' })}
  return <button onClick={handleClick}>Insert</button>

} 