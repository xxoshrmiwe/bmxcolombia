'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  useEffect(() => {
    const speedLinesContainer = document.getElementById('speedLines')
    if (speedLinesContainer) {
      for (let i = 0; i < 12; i++) {
        const line = document.createElement('div')
        line.className = 'speed-line'
        line.style.cssText =
          'position:absolute;height:1px;background:linear-gradient(to right,transparent,rgba(255,209,0,0.3),transparent);animation:speedLine 3s linear infinite;opacity:0;top:' +
          (20 + Math.random() * 60) + '%;width:' +
          (100 + Math.random() * 200) + 'px;animation-delay:' +
          (Math.random() * 5) + 's;animation-duration:' +
          (2 + Math.random() * 3) + 's;'
        speedLinesContainer.appendChild(line)
      }
    }

    document.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', function (this: HTMLElement) {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'))
        this.classList.add('active')
      })
    })

    const nav = document.querySelector('nav')
    const handleScroll = () => {
      if (nav) nav.style.background = window.scrollY > 80
        ? 'rgba(13,13,13,0.98)'
        : 'linear-gradient(to bottom,rgba(13,13,13,0.98),transparent)'
    }
    window.addEventListener('scroll', handleScroll)

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.pilot-card,.event-row,.news-item,.news-main').forEach(el => {
      const el2 = el as HTMLElement
      el2.style.opacity = '0'
      el2.style.transform = 'translateY(20px)'
      el2.style.transition = 'opacity 0.5s ease,transform 0.5s ease'
      observer.observe(el2)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-slash"></div>
        <div className="speed-lines" id="speedLines"></div>

        <div className="hero-content">
          <div className="hero-eyebrow">Portal Oficial BMX Racing Colombia</div>
          <h1 className="hero-title">
            <span className="line-bmx">BMX</span>
            <span className="line-col">COLOMBIA</span>
            <span className="line-racing">Racing · Tierra · Velocidad</span>
          </h1>
          <p className="hero-sub">La plataforma oficial del BMX Racing colombiano. Ranking nacional, calendario de competencias y la comunidad más grande del país.</p>
          <div className="hero-ctas">
            <Link href="/ranking" className="btn-primary"><span>Ver Ranking →</span></Link>
            <Link href="/calendario" className="btn-secondary">Calendario 2026</Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-bg-text">COL</div>
          <div className="glow-ring" style={{width:'400px',height:'400px'}}></div>
          <div className="glow-ring" style={{width:'500px',height:'500px',animationDelay:'0.5s',borderColor:'rgba(255,209,0,0.1)'}}></div>
          <div className="glow-ring" style={{width:'600px',height:'600px',animationDelay:'1s',borderColor:'rgba(232,0,28,0.08)'}}></div>
          <svg className="rider-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--rojo)" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="var(--rojo)" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <circle cx="200" cy="200" r="180" fill="url(#glow)"/>
            <ellipse cx="200" cy="320" rx="120" ry="8" fill="rgba(232,0,28,0.2)"/>
            {/* Bike wheels */}
            <circle cx="140" cy="290" r="55" fill="none" stroke="rgba(245,240,232,0.7)" strokeWidth="8"/>
            <circle cx="140" cy="290" r="35" fill="none" stroke="rgba(245,240,232,0.3)" strokeWidth="3"/>
            <circle cx="140" cy="290" r="6" style={{fill:'var(--rojo)'}}/>
            <circle cx="270" cy="290" r="55" fill="none" stroke="rgba(245,240,232,0.7)" strokeWidth="8"/>
            <circle cx="270" cy="290" r="35" fill="none" stroke="rgba(245,240,232,0.3)" strokeWidth="3"/>
            <circle cx="270" cy="290" r="6" style={{fill:'var(--rojo)'}}/>
            {/* Frame */}
            <line x1="140" y1="290" x2="200" y2="220" stroke="rgba(245,240,232,0.8)" strokeWidth="6" strokeLinecap="round"/>
            <line x1="270" y1="290" x2="200" y2="220" stroke="rgba(245,240,232,0.8)" strokeWidth="6" strokeLinecap="round"/>
            <line x1="200" y1="220" x2="160" y2="200" stroke="rgba(245,240,232,0.8)" strokeWidth="5" strokeLinecap="round"/>
            <line x1="200" y1="220" x2="240" y2="240" stroke="rgba(245,240,232,0.8)" strokeWidth="5" strokeLinecap="round"/>
            <line x1="140" y1="290" x2="240" y2="240" stroke="rgba(245,240,232,0.6)" strokeWidth="4" strokeLinecap="round"/>
            {/* Handlebars */}
            <line x1="160" y1="200" x2="145" y2="185" style={{stroke:'var(--rojo)'}} strokeWidth="5" strokeLinecap="round"/>
            <line x1="145" y1="185" x2="130" y2="188" stroke="rgba(245,240,232,0.9)" strokeWidth="4" strokeLinecap="round"/>
            <line x1="145" y1="185" x2="158" y2="182" stroke="rgba(245,240,232,0.9)" strokeWidth="4" strokeLinecap="round"/>
            {/* Rider body */}
            <ellipse cx="195" cy="195" rx="18" ry="22" fill="rgba(245,240,232,0.85)" transform="rotate(-20,195,195)"/>
            {/* Helmet */}
            <ellipse cx="185" cy="168" rx="22" ry="18" style={{fill:'var(--rojo)'}}/>
            <ellipse cx="185" cy="175" rx="22" ry="8" fill="rgba(13,13,13,0.8)"/>
            <ellipse cx="176" cy="172" rx="8" ry="4" fill="rgba(255,209,0,0.6)"/>
            {/* Arms */}
            <line x1="190" y1="188" x2="155" y2="192" stroke="rgba(245,240,232,0.8)" strokeWidth="5" strokeLinecap="round"/>
            {/* Legs */}
            <line x1="200" y1="210" x2="185" y2="250" stroke="rgba(245,240,232,0.8)" strokeWidth="6" strokeLinecap="round"/>
            <line x1="185" y1="250" x2="200" y2="280" stroke="rgba(245,240,232,0.7)" strokeWidth="5" strokeLinecap="round"/>
            <line x1="200" y1="210" x2="220" y2="248" stroke="rgba(245,240,232,0.8)" strokeWidth="6" strokeLinecap="round"/>
            {/* Speed effect */}
            <line x1="320" y1="240" x2="380" y2="238" stroke="rgba(255,209,0,0.4)" strokeWidth="2"/>
            <line x1="330" y1="255" x2="390" y2="252" stroke="rgba(255,209,0,0.3)" strokeWidth="1.5"/>
            <line x1="315" y1="225" x2="370" y2="222" stroke="rgba(255,209,0,0.2)" strokeWidth="1"/>
          </svg>
        </div>

        <div className="hero-stats">
          <div>
            <div className="stat-num">1,247<span>+</span></div>
            <div className="stat-label">Pilotos Activos</div>
          </div>
          <div>
            <div className="stat-num">32</div>
            <div className="stat-label">Eventos 2026</div>
          </div>
          <div>
            <div className="stat-num">18</div>
            <div className="stat-label">Departamentos</div>
          </div>
          <div>
            <div className="stat-num">9<span>+</span></div>
            <div className="stat-label">Categorías</div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-inner">
          {[1,2].map(k => (
            <span key={k} style={{display:'inline-flex'}}>
              <span className="ticker-item">COPA NACIONAL BMX 2026</span><span className="ticker-sep">★</span>
              <span className="ticker-item">MOLINA LIDERA EL RANKING ELITE</span><span className="ticker-sep">★</span>
              <span className="ticker-item">NUEVA PISTA EN MEDELLÍN HOMOLOGADA</span><span className="ticker-sep">★</span>
              <span className="ticker-item">COLOMBIA AL MUNDIAL UCI 2026</span><span className="ticker-sep">★</span>
              <span className="ticker-item">INSCRIPCIONES ABIERTAS — LIGA ANTIOQUIA</span><span className="ticker-sep">★</span>
              <span className="ticker-item">RESTREPO CLASIFICA PANAMERICANOS</span><span className="ticker-sep">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* RANKING */}
      <section className="ranking-section" id="ranking">
        <div className="ranking-header">
          <div>
            <div className="section-label">Temporada 2026</div>
            <h2 className="section-title">RANKING<br/>NACIONAL</h2>
          </div>
          <div className="filter-tabs">
            {['Elite Hombres','Elite Mujeres','Junior','Cruiser','Master'].map((cat,i) => (
              <button key={cat} className={`filter-tab${i===0?' active':''}`}>{cat}</button>
            ))}
          </div>
        </div>
        <div className="pilots-grid">
          {[
            {rank:1,cls:'gold',num:'#23',name:'SEBASTIÁN MOLINA',cat:'Elite Hombres',pts:2840,vic:7,pod:11},
            {rank:2,cls:'silver',num:'#07',name:'CARLOS RESTREPO',cat:'Elite Hombres',pts:2615,vic:5,pod:9},
            {rank:3,cls:'bronze',num:'#41',name:'JUAN TORRES',cat:'Elite Hombres',pts:2390,vic:4,pod:8},
            {rank:4,cls:'',num:'#15',name:'ANDRÉS GÓMEZ',cat:'Elite Hombres',pts:2180,vic:3,pod:6},
            {rank:5,cls:'',num:'#88',name:'MIGUEL VARGAS',cat:'Elite Hombres',pts:1960,vic:2,pod:5},
            {rank:6,cls:'',num:'#33',name:'DAVID HERRERA',cat:'Elite Hombres',pts:1740,vic:1,pod:4},
          ].map(p => (
            <Link href="/ranking" key={p.rank} className={`pilot-card ${p.cls}`} style={{textDecoration:'none',color:'inherit'}}>
              <div className="pilot-rank">{String(p.rank).padStart(2,'0')}</div>
              <div className="pilot-num">{p.num} · Colombia</div>
              <div className="pilot-name">{p.name}</div>
              <div className="pilot-category">{p.cat}</div>
              <div className="pilot-stats-row">
                <div><div className="pilot-stat-val">{p.pts.toLocaleString()}</div><div className="pilot-stat-lbl">Puntos</div></div>
                <div><div className="pilot-stat-val">{p.vic}</div><div className="pilot-stat-lbl">Victorias</div></div>
                <div><div className="pilot-stat-val">{p.pod}</div><div className="pilot-stat-lbl">Podios</div></div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{textAlign:'center',marginTop:'3rem'}}>
          <Link href="/ranking" className="btn-secondary">Ver Ranking Completo →</Link>
        </div>
      </section>

      {/* CALENDARIO */}
      <section className="calendar-section" id="calendario">
        <div className="section-label">Próximas fechas</div>
        <h2 className="section-title">CALENDARIO<br/>2026</h2>
        <div className="events-list">
          {[
            {day:'05',month:'ABR',name:'COPA NACIONAL APERTURA',loc:'Pista El Salitre, Bogotá',badge:'badge-nacional',tipo:'Nacional'},
            {day:'19',month:'ABR',name:'LIGA REGIONAL ANTIOQUIA',loc:'Pista La América, Medellín',badge:'badge-regional',tipo:'Regional'},
            {day:'03',month:'MAY',name:'VÁLIDA COPA UCI CALI',loc:'Pista Panamericana, Cali',badge:'badge-copa',tipo:'Copa UCI'},
            {day:'17',month:'MAY',name:'COPA NACIONAL SEGUNDA FECHA',loc:'Pista La Mesa, Cundinamarca',badge:'badge-nacional',tipo:'Nacional'},
            {day:'07',month:'JUN',name:'GRAN PRIX BMX BARRANQUILLA',loc:'Pista Olímpica, Barranquilla',badge:'badge-regional',tipo:'Regional'},
          ].map(e => (
            <div className="event-row" key={e.name}>
              <div>
                <div className="event-day">{e.day}</div>
                <div className="event-month">{e.month}</div>
              </div>
              <div>
                <div className="event-name">{e.name}</div>
                <div className="event-location">📍 {e.loc}</div>
              </div>
              <div className={`event-badge ${e.badge}`}>{e.tipo}</div>
            </div>
          ))}
        </div>
        <div style={{textAlign:'center',marginTop:'3rem'}}>
          <Link href="/calendario" className="btn-secondary">Ver Calendario Completo →</Link>
        </div>
      </section>

      {/* NOTICIAS */}
      <section className="news-section" id="noticias">
        <div className="section-label">Actualidad</div>
        <h2 className="section-title">ÚLTIMAS<br/>NOTICIAS</h2>
        <div className="news-grid">
          <div className="news-main">
            <div className="news-tag">🏆 Destacado — Nacional</div>
            <div className="news-title">Colombia clasifica tres pilotos al Mundial UCI BMX Racing 2026 en Papendal</div>
            <div className="news-excerpt">Los resultados de la temporada nacional consolidaron a Molina, Restrepo y Torres como los representantes tricolor en la cita máxima del BMX Racing mundial.</div>
            <div className="news-meta">26 MAR 2026 · 4 min de lectura</div>
          </div>
          <div className="news-side">
            {[
              {tag:'Infraestructura',title:'La pista de La Mesa recibe homologación UCI para competencias internacionales',date:'22 MAR 2026'},
              {tag:'Formación',title:'Nueva escuela de BMX Racing en Barranquilla ya abre inscripciones para 2026',date:'18 MAR 2026'},
              {tag:'Entrevista',title:'Sebastián Molina: "El BMX colombiano está listo para competir al más alto nivel"',date:'15 MAR 2026'},
            ].map(n => (
              <div className="news-item" key={n.tag}>
                <div>
                  <div className="news-tag">{n.tag}</div>
                  <div className="news-title">{n.title}</div>
                </div>
                <div className="news-meta">{n.date}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{textAlign:'center',marginTop:'3rem'}}>
          <Link href="/noticias" className="btn-secondary">Ver Todas las Noticias →</Link>
        </div>
      </section>

      {/* SPONSORS */}
      <div className="sponsors-section">
        <div className="sponsors-label">Nuestros patrocinadores y aliados estratégicos</div>
        <div className="sponsors-row">
          {['COLDEPORTES','FEDERACIÓN COL.','BMX FACTORY','TREK','REDLINE','SHIMANO','MOVISTAR'].map(s => (
            <span key={s} className="sponsor-logo">{s}</span>
          ))}
        </div>
      </div>

      {/* COMUNIDAD */}
      <section className="join-section" id="comunidad">
        <div>
          <div className="join-title">ÚNETE A LA<br/><span className="accent">MANADA</span><br/>BMX COL.</div>
          <p className="join-desc">Regístrate y sé parte de la comunidad más grande del BMX Racing en Colombia. Accede a resultados en tiempo real, perfil de piloto y mucho más.</p>
        </div>
        <div className="join-form">
          <div className="form-row">
            <input type="text" className="form-input" placeholder="Nombre"/>
            <input type="text" className="form-input" placeholder="Apellido"/>
          </div>
          <input type="email" className="form-input" placeholder="Correo electrónico"/>
          <div className="form-row">
            <input type="text" className="form-input" placeholder="Departamento"/>
            <input type="text" className="form-input" placeholder="Categoría"/>
          </div>
          <button className="btn-form">CREAR PERFIL PILOTO →</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div>
            <span className="footer-logo">BMX<span>COL</span></span>
            <p className="footer-tagline">La plataforma oficial de la comunidad BMX Racing de Colombia. Velocidad, tierra y pasión desde 2024.</p>
            <div className="footer-social">
              {['IG','YT','TK','FB'].map(s => <a key={s} href="#" className="social-btn">{s}</a>)}
            </div>
          </div>
          <div>
            <div className="footer-col-title">Competencia</div>
            <ul className="footer-links">
              {['Ranking Nacional','Calendario 2026','Resultados','Reglamento','Pistas Registradas'].map(l => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Comunidad</div>
            <ul className="footer-links">
              {['Perfil Piloto','Ligas Regionales','Escuelas BMX','Foro','Galería'].map(l => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Nosotros</div>
            <ul className="footer-links">
              {['Acerca de','Prensa','Patrocinadores','Contacto','Política de privacidad'].map(l => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 BMXCOLOMBIA.CO — Todos los derechos reservados</span>
          <span className="footer-domain">bmxcolombia.co</span>
        </div>
      </footer>
    </>
  )
}
