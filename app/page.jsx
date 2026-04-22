'use client'

import { supabase } from '@/lib/supabaseClient'
// ... resto del código
export default function Home() {
  const [palabra, setPalabra] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [cargando, setCargando] = useState(false) 
const handleSubmit = async (e) => {
  e.preventDefault()
  setCargando(true)
  
  const { data, error } = await supabase
    .from('palabras')
    .insert([{ name: palabra }])
    .select()
  
  if (error) {
    setMensaje("Ww")
  } else {
    setMensaje("aaaaaaaa")
    setPalabra('')
  }
  
  setCargando(false)
}
 return (
    <div style={{ padding: '2rem' }}>
      <h1>Agregar una palabra a Supabase</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={palabra}
          onChange={(e) => setPalabra(e.target.value)}
                    placeholder="Escribe una palabra, ej: pluck"
          required
          style={{ padding: '0.5rem', marginRight: '1rem' }}
        />
        
        <button 
          type="submit" 
          disabled={cargando}
          style={{ padding: '0.5rem 1rem' }}
        >
          {cargando ? 'Enviando...' : 'Enviar'}
        </button>
      </form>

      {mensaje && (
        <p style={{ marginTop: '1rem' }}>{mensaje}</p>
      )}
    </div>
  )
}
