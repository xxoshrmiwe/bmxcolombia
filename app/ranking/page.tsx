import { client, urlFor } from '@/sanity/client'
import Image from 'next/image'
import { PILOTOS_RANKING_QUERY } from '@/sanity/queries'
export const revalidate = 60
export default async function RankingPage() {
  const pilotos = await client.fetch(PILOTOS_RANKING_QUERY)
  return (
    <main className="min-h-screen text-white pt-24 px-6 pb-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-black text-6xl uppercase italic mb-2">Ranking <span className="text-red-600">Nacional</span></h1>
        <p className="text-gray-500 font-mono text-sm mb-10">Temporada 2026</p>
        {pilotos.length === 0 ? (
          <p className="text-gray-500">No hay pilotos registrados aún. Agrégalos desde <a href="/studio" className="text-red-500 underline">/studio</a></p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {pilotos.map((piloto: any, i: number) => (
              <div
                key={piloto._id}
                className={`p-6 relative border-t-4 hover:-translate-y-1 transition-transform ${i === 0 ? 'border-yellow-400' : i === 1 ? 'border-gray-400' : i === 2 ? 'border-amber-600' : 'border-transparent hover:border-red-600'}`}
                style={{ background: 'var(--carbon)' }}
              >
                <span className="absolute right-4 top-2 text-6xl font-black text-white/5">{String(i + 1).padStart(2, '0')}</span>
                {piloto.foto && <Image src={urlFor(piloto.foto).width(80).height(80).url()} alt={piloto.nombre} width={80} height={80} className="rounded-full mb-3 border-2 border-red-600" />}
                <p className="text-xs font-mono text-gray-500 mb-1">#{piloto.numero} · {piloto.departamento}</p>
                <h2 className="text-xl font-black uppercase italic leading-tight mb-1">{piloto.nombre}</h2>
                <p className="text-xs text-red-500 font-mono uppercase tracking-widest mb-4">{piloto.categoria}</p>
                <div className="flex gap-6">
                  <div><p className="text-yellow-400 font-black text-xl">{piloto.puntos?.toLocaleString()}</p><p className="text-gray-500 text-xs uppercase">Puntos</p></div>
                  <div><p className="text-white font-black text-xl">{piloto.victorias}</p><p className="text-gray-500 text-xs uppercase">Victorias</p></div>
                  <div><p className="text-white font-black text-xl">{piloto.podios}</p><p className="text-gray-500 text-xs uppercase">Podios</p></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
