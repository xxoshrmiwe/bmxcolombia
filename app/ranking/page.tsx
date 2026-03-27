'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/supabase/client'

interface Resultado {
  rank_final: number | null
  moto1: string
  moto2: string
  moto3: string
  moto_total: number
  ronda_1_2: string | null
  ronda_1_4: string | null
  estado: string
  pilotos: {
    placa: number
    nombre_completo: string
  }
  categorias: {
    nombre: string
  }
  validas: {
    numero: number
    nombre: string
    fecha: string
  }
}

const colorPos = (pos: string | null) => {
  if (!pos || pos === '—') return 'var(--gris)'
  if (pos === '1st') return 'var(--amarillo)'
  if (pos === '2nd') return '#C0C0C0'
  if (pos === '3rd') return '#CD7F32'
  if (pos.startsWith('DNF') || pos.startsWith('CR') || pos === 'DNS') return 'var(--rojo)'
  return 'var(--blanco)'
}

function PosTag({ value }: { value: string | null }) {
  const v = value ?? '—'
  return (
    <span style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '0.85rem',
      fontWeight: 700,
      color: colorPos(v),
      background: 'rgba(255,255,255,0.05)',
      padding: '0.2rem 0.5rem',
      borderRadius: '4px',
      display: 'inline-block',
      minWidth: 48,
      textAlign: 'center',
    }}>
      {v}
    </span>
  )
}

function ModalPiloto({ r, onClose }: { r: Resultado; onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(0,0,0,0.8)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--polvo)',
          border: '1px solid #333',
          borderRadius: '12px',
          padding: '2rem',
          width: '100%',
          maxWidth: 480,
          position: 'relative',
        }}
      >
        {/* Cerrar */}
        <button onClick={onClose} style={{
          position: 'absolute', top: 16, right: 16,
          background: 'transparent', border: 'none',
          color: 'var(--gris)', fontSize: '1.5rem', cursor: 'pointer', lineHeight: 1,
        }}>×</button>

        {/* Placa + nombre */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <span style={{
            background: 'var(--rojo)', color: 'var(--blanco)',
            fontFamily: 'var(--font-mono)', fontWeight: 900, fontSize: '1.5rem',
            padding: '0.3rem 0.8rem', borderRadius: '6px',
          }}>
            {r.pilotos.placa}
          </span>
          <div>
            <p style={{
              fontFamily: 'var(--font-titulo)', fontSize: '1.1rem',
              fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase',
              color: 'var(--blanco)', margin: 0,
            }}>
              {r.pilotos.nombre_completo}
            </p>
            <p style={{ color: 'var(--gris)', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', margin: 0 }}>
              {r.categorias.nombre}
            </p>
          </div>
        </div>

        {/* Posición + Puntos */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '1.5rem', marginBottom: '1.5rem',
          padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px',
        }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--gris)', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 0.25rem' }}>Posición</p>
            <p style={{
              fontFamily: 'var(--font-mono)', fontWeight: 900, fontSize: '2.5rem', margin: 0,
              color: r.rank_final === 1 ? 'var(--amarillo)' : r.rank_final === 2 ? '#C0C0C0' : r.rank_final === 3 ? '#CD7F32' : 'var(--blanco)',
            }}>
              {r.rank_final ?? '—'}
              {r.rank_final === 1 ? ' 🥇' : r.rank_final === 2 ? ' 🥈' : r.rank_final === 3 ? ' 🥉' : ''}
            </p>
          </div>
          <div style={{ width: 1, height: 60, background: '#444' }} />
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--gris)', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 0.25rem' }}>Puntos</p>
            <p style={{ fontFamily: 'var(--font-mono)', fontWeight: 900, fontSize: '2.5rem', color: 'var(--amarillo)', margin: 0 }}>
              {r.moto_total}
            </p>
          </div>
        </div>

        {/* Motos */}
        <p style={{ color: 'var(--gris)', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
          Series — Motos
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {[['M1', r.moto1], ['M2', r.moto2], ['M3', r.moto3]].map(([label, val]) => (
            <div key={label} style={{
              flex: 1, textAlign: 'center',
              background: 'rgba(0,0,0,0.3)', borderRadius: '8px', padding: '0.75rem 0.5rem',
            }}>
              <p style={{ color: 'var(--gris)', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', margin: '0 0 0.4rem', textTransform: 'uppercase' }}>{label}</p>
              <PosTag value={val as string} />
            </div>
          ))}
        </div>

        {/* Eliminatorias */}
        <p style={{ color: 'var(--gris)', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
          Eliminatorias
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {[
            ['1/4', r.ronda_1_4],
            ['1/2', r.ronda_1_2],
            ['Final', r.rank_final ? `${r.rank_final}°` : null],
          ].map(([label, val]) => (
            <div key={label as string} style={{
              flex: 1, textAlign: 'center',
              background: 'rgba(0,0,0,0.3)', borderRadius: '8px', padding: '0.75rem 0.5rem',
            }}>
              <p style={{ color: 'var(--gris)', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', margin: '0 0 0.4rem', textTransform: 'uppercase' }}>{label}</p>
              <PosTag value={val as string | null} />
            </div>
          ))}
        </div>

        {/* Válida */}
        <p style={{ color: 'var(--gris)', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', textAlign: 'center' }}>
          {r.validas.nombre} · {new Date(r.validas.fecha).toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      </div>
    </div>
  )
}

export default function RankingPage() {
  const [resultados, setResultados] = useState<Resultado[]>([])
  const [categorias, setCategorias] = useState<string[]>([])
  const [validas, setValidas] = useState<{ numero: number; nombre: string }[]>([])
  const [categoriaActiva, setCategoriaActiva] = useState<string>('')
  const [validaActiva, setValidaActiva] = useState<number>(3)
  const [busqueda, setBusqueda] = useState('')
  const [cargando, setCargando] = useState(true)
  const [pilotoSeleccionado, setPilotoSeleccionado] = useState<Resultado | null>(null)

  useEffect(() => { cargarFiltros() }, [])
  useEffect(() => { if (categoriaActiva) cargarResultados() }, [categoriaActiva, validaActiva])

  async function cargarFiltros() {
    const { data: cats } = await supabase.from('categorias').select('nombre').order('nombre')
    const { data: vals } = await supabase.from('validas').select('numero, nombre').order('numero')
    if (cats) {
      const nombres = cats.map((c) => c.nombre)
      setCategorias(nombres)
      setCategoriaActiva(nombres[0] || '')
    }
    if (vals) setValidas(vals)
  }

  async function cargarResultados() {
    setCargando(true)
    const { data, error } = await supabase
      .from('resultados_valida')
      .select(`
        rank_final, moto1, moto2, moto3, moto_total,
        ronda_1_2, ronda_1_4, estado,
        pilotos ( placa, nombre_completo ),
        categorias ( nombre ),
        validas ( numero, nombre, fecha )
      `)
      .eq('categorias.nombre', categoriaActiva)
      .eq('validas.numero', validaActiva)
      .order('rank_final', { ascending: true, nullsFirst: false })
      .order('moto_total', { ascending: true })

    if (!error && data) {
      const filtrados = data.filter((r: any) => r.categorias && r.validas) as Resultado[]
      setResultados(filtrados)
    }
    setCargando(false)
  }

  const resultadosFiltrados = resultados.filter((r) => {
    if (!busqueda) return true
    const q = busqueda.toLowerCase()
    return (
      r.pilotos.nombre_completo.toLowerCase().includes(q) ||
      String(r.pilotos.placa).includes(q)
    )
  })

  return (
    <main style={{ minHeight: '100vh', background: 'var(--carbon)', padding: '2rem 1rem' }}>
      {pilotoSeleccionado && (
        <ModalPiloto r={pilotoSeleccionado} onClose={() => setPilotoSeleccionado(null)} />
      )}

      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        {/* Header */}
        <h1 style={{
          fontFamily: 'var(--font-titulo)',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase',
          color: 'var(--blanco)', marginBottom: '0.25rem', letterSpacing: '-0.02em',
        }}>
          RANKING <span style={{ color: 'var(--rojo)' }}>2026</span>
        </h1>
        <p style={{ color: 'var(--gris)', fontFamily: 'var(--font-body)', marginBottom: '2rem' }}>
          Liga Distrital BMX Bogotá — Toca un piloto para ver su detalle completo
        </p>

        {/* Filtros */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', alignItems: 'flex-end' }}>
          <div>
            <label style={{ color: 'var(--gris)', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Válida
            </label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {validas.map((v) => (
                <button key={v.numero} onClick={() => setValidaActiva(v.numero)} style={{
                  padding: '0.4rem 1rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
                  fontWeight: validaActiva === v.numero ? 700 : 400,
                  background: validaActiva === v.numero ? 'var(--rojo)' : 'var(--polvo)',
                  color: 'var(--blanco)', border: 'none', borderRadius: '4px', cursor: 'pointer',
                }}>
                  V{v.numero}
                </button>
              ))}
            </div>
          </div>

          <div style={{ flex: 1, minWidth: 200 }}>
            <label style={{ color: 'var(--gris)', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Buscar piloto
            </label>
            <input
              type="text"
              placeholder="Placa o nombre..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              style={{
                width: '100%', padding: '0.4rem 1rem',
                fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
                background: 'var(--polvo)', color: 'var(--blanco)',
                border: '1px solid #444', borderRadius: '4px', outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Tabs de categoría */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {categorias.map((cat) => (
            <button key={cat} onClick={() => setCategoriaActiva(cat)} style={{
              padding: '0.35rem 0.85rem',
              fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
              fontWeight: categoriaActiva === cat ? 700 : 400,
              background: categoriaActiva === cat ? 'var(--amarillo)' : 'var(--polvo)',
              color: categoriaActiva === cat ? 'var(--tierra)' : 'var(--gris)',
              border: 'none', borderRadius: '4px', cursor: 'pointer',
              textTransform: 'uppercase', letterSpacing: '0.05em',
            }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Tabla limpia */}
        {cargando ? (
          <p style={{ color: 'var(--gris)', fontFamily: 'var(--font-mono)' }}>Cargando...</p>
        ) : resultadosFiltrados.length === 0 ? (
          <p style={{ color: 'var(--gris)', fontFamily: 'var(--font-mono)' }}>No hay resultados para esta selección.</p>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--rojo)' }}>
                  {['#', 'PLACA', 'PILOTO', 'PUNTOS', 'RESULTADO'].map((h) => (
                    <th key={h} style={{
                      padding: '0.6rem 0.75rem',
                      textAlign: h === 'PILOTO' ? 'left' : 'center',
                      color: 'var(--gris)', fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem', textTransform: 'uppercase',
                      letterSpacing: '0.1em', fontWeight: 500,
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {resultadosFiltrados.map((r, i) => (
                  <tr
                    key={i}
                    onClick={() => setPilotoSeleccionado(r)}
                    style={{
                      borderBottom: '1px solid #1a1a1a',
                      background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
                      cursor: 'pointer', transition: 'background 0.15s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(232,0,28,0.08)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)')}
                  >
                    {/* # */}
                    <td style={{ padding: '0.9rem 0.75rem', textAlign: 'center', width: 48 }}>
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontWeight: 700,
                        fontSize: r.rank_final && r.rank_final <= 3 ? '1.2rem' : '0.95rem',
                        color: r.rank_final === 1 ? 'var(--amarillo)' : r.rank_final === 2 ? '#C0C0C0' : r.rank_final === 3 ? '#CD7F32' : 'var(--gris)',
                      }}>
                        {r.rank_final ?? '—'}
                      </span>
                    </td>

                    {/* Placa */}
                    <td style={{ padding: '0.9rem 0.75rem', textAlign: 'center', width: 80 }}>
                      <span style={{
                        background: 'var(--rojo)', color: 'var(--blanco)',
                        fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.9rem',
                        padding: '0.2rem 0.6rem', borderRadius: '4px',
                      }}>
                        {r.pilotos.placa}
                      </span>
                    </td>

                    {/* Nombre */}
                    <td style={{ padding: '0.9rem 0.75rem', color: 'var(--blanco)', fontWeight: 500, fontSize: '0.95rem' }}>
                      {r.pilotos.nombre_completo}
                      <span style={{ color: 'var(--gris)', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', marginLeft: '0.5rem', opacity: 0.6 }}>
                        ver detalle →
                      </span>
                    </td>

                    {/* Puntos */}
                    <td style={{ padding: '0.9rem 0.75rem', textAlign: 'center', width: 90 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 900, fontSize: '1.15rem', color: 'var(--amarillo)' }}>
                        {r.moto_total}
                      </span>
                    </td>

                    {/* Resultado */}
                    <td style={{ padding: '0.9rem 0.75rem', textAlign: 'center', width: 110 }}>
                      {r.rank_final ? (
                        <span style={{
                          fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.9rem',
                          color: r.rank_final === 1 ? 'var(--amarillo)' : r.rank_final === 2 ? '#C0C0C0' : r.rank_final === 3 ? '#CD7F32' : 'var(--blanco)',
                          background: 'rgba(255,255,255,0.05)',
                          padding: '0.2rem 0.6rem', borderRadius: '4px',
                        }}>
                          {r.rank_final === 1 ? '1st 🥇' : r.rank_final === 2 ? '2nd 🥈' : r.rank_final === 3 ? '3rd 🥉' : `${r.rank_final}°`}
                        </span>
                      ) : (
                        <span style={{ color: 'var(--gris)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {resultadosFiltrados.length > 0 && (
          <p style={{ color: 'var(--gris)', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', marginTop: '1rem' }}>
            {resultadosFiltrados.length} pilotos · {categoriaActiva} · Toca cualquier fila para ver el detalle completo
          </p>
        )}
      </div>
    </main>
  )
}
