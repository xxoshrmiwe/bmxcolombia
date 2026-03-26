import Link from 'next/link'
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-black text-xl uppercase italic tracking-tight">
          BMX<span className="text-red-600">Colombia</span>
        </Link>
        <div className="flex gap-8 text-sm font-mono uppercase tracking-widest">
          <Link href="/ranking" className="hover:text-red-500 transition-colors">Ranking</Link>
          <Link href="/calendario" className="hover:text-red-500 transition-colors">Calendario</Link>
          <Link href="/noticias" className="hover:text-red-500 transition-colors">Noticias</Link>
        </div>
      </div>
    </nav>
  )
}
