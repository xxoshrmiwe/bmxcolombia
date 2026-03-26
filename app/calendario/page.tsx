import { client } from '@/sanity/client'
export const revalidate = 300
const EVENTOS_QUERY = `*[_type == "evento" && fecha >= $hoy] | order(fecha asc) { _id, nombre, tipo, fecha, ciudad, departamento, pista, inscripcionesAbiertas, urlInscripcion }`
export default async function CalendarioPage() {
  const hoy = new Date().toISOString().split('T')[0]
  const eventos = await client.fetch(EVENTOS_QUERY, { hoy })
  const badgeColor: Record<string,string> = { Nacional:'bg-red-600 text-white', Regional:'border border-yellow-400 text-yellow-400', 'Copa UCI':'bg-yellow-400 text-black', Internacional:'bg-blue-600 text-white', Liga:'border border-gray-400 text-gray-400' }
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white pt-24 px-6 pb-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-black text-6xl uppercase italic mb-2">Calendario <span className="text-red-600">2026</span></h1>
        <p className="text-gray-500 font-mono text-sm mb-10">Próximos eventos</p>
        {eventos.length === 0 ? (
          <p className="text-gray-500">No hay eventos próximos. Agrégalos desde <a href="/studio" className="text-red-500 underline">/studio</a></p>
        ) : (
          <div className="divide-y divide-white/5">
            {eventos.map((evento: any) => {
              const fecha = new Date(evento.fecha + 'T00:00:00')
              return (
                <div key={evento._id} className="flex items-center gap-8 py-6 hover:pl-4 transition-all group">
                  <div className="w-20 text-center flex-shrink-0">
                    <p className="font-black text-3xl leading-none">{fecha.getDate()}</p>
                    <p className="text-red-500 font-mono text-xs uppercase tracking-widest">{fecha.toLocaleString('es-CO',{month:'short'})}</p>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-black text-xl uppercase italic group-hover:text-yellow-400 transition-colors">{evento.nombre}</h2>
                    <p className="text-gray-500 text-sm mt-1">📍 {evento.pista ? `${evento.pista}, ` : ''}{evento.ciudad}, {evento.departamento}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    {evento.inscripcionesAbiertas && evento.urlInscripcion && <a href={evento.urlInscripcion} target="_blank" className="text-xs font-mono px-3 py-1 bg-green-600 text-white uppercase tracking-wider hover:bg-green-500">Inscribirse</a>}
                    <span className={`text-xs font-mono px-3 py-1 uppercase tracking-wider ${badgeColor[evento.tipo] || 'text-gray-400'}`}>{evento.tipo}</span>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}
