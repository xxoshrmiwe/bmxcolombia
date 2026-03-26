import { client, urlFor } from '@/sanity/client'
import Image from 'next/image'
import Link from 'next/link'
import { NOTICIAS_RECIENTES_QUERY } from '@/sanity/queries'
export const revalidate = 60
export default async function NoticiasPage() {
  const noticias = await client.fetch(NOTICIAS_RECIENTES_QUERY)
  return (
    <main className="min-h-screen text-white pt-24 px-6 pb-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-black text-6xl uppercase italic mb-10">Noticias <span className="text-red-600">BMX</span></h1>
        {noticias.length === 0 ? (
          <p className="text-gray-500">No hay noticias publicadas. Agrégalas desde <a href="/studio" className="text-red-500 underline">/studio</a></p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {noticias.map((noticia: any) => (
              <Link key={noticia._id} href={`/noticias/${noticia.slug?.current}`} className="group block noticia-card">
                {noticia.imagen && (
                  <div className="relative h-48 overflow-hidden">
                    <Image src={urlFor(noticia.imagen).width(400).height(200).url()} alt={noticia.titulo} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-5">
                  <span className="text-xs font-mono text-red-500 uppercase tracking-widest">{noticia.categoria}</span>
                  <h2 className="font-black text-lg uppercase italic mt-1 mb-2 group-hover:text-yellow-400 transition-colors">{noticia.titulo}</h2>
                  <p className="text-gray-500 text-sm line-clamp-2">{noticia.extracto}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
