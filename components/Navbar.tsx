'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        <Link href="/" className="font-black text-xl uppercase italic tracking-tight">
          BMX<span className="text-red-600">Colombia</span>
        </Link>

        {/* Desktop links */}
        <div className="nav-desktop-links">
          <Link href="/ranking" className="hover:text-red-500 transition-colors">Ranking</Link>
          <Link href="/calendario" className="hover:text-red-500 transition-colors">Calendario</Link>
          <Link href="/noticias" className="hover:text-red-500 transition-colors">Noticias</Link>
          <Link href="/login" className="nav-wheel-btn" aria-label="Login">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="11" cy="11" r="9.5" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="11" cy="11" r="2" fill="currentColor"/>
              <line x1="11" y1="9" x2="11" y2="1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              <line x1="11" y1="13" x2="11" y2="20.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              <line x1="9" y1="11" x2="1.5" y2="11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              <line x1="13" y1="11" x2="20.5" y2="11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              <line x1="9.59" y1="9.59" x2="4.1" y2="4.1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              <line x1="12.41" y1="12.41" x2="17.9" y2="17.9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              <line x1="12.41" y1="9.59" x2="17.9" y2="4.1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              <line x1="9.59" y1="12.41" x2="4.1" y2="17.9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <span className="nav-wheel-label">LOGIN</span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span className={`nav-ham-line${open ? ' open' : ''}`}></span>
          <span className={`nav-ham-line${open ? ' open' : ''}`}></span>
          <span className={`nav-ham-line${open ? ' open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`nav-mobile-menu${open ? ' nav-mobile-menu--open' : ''}`}>
        <Link href="/ranking"  className="nav-mobile-link" onClick={() => setOpen(false)}>Ranking</Link>
        <Link href="/calendario" className="nav-mobile-link" onClick={() => setOpen(false)}>Calendario</Link>
        <Link href="/noticias"  className="nav-mobile-link" onClick={() => setOpen(false)}>Noticias</Link>
        <Link href="/login"    className="nav-mobile-link nav-mobile-login" onClick={() => setOpen(false)}>Login</Link>
      </div>
    </nav>
  )
}
