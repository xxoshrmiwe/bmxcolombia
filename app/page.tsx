import Link from 'next/link'

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Barlow+Condensed:ital,wght@0,300;0,400;0,700;0,900;1,900&family=Space+Mono:wght@400;700&display=swap');
        :root{--rojo:#E8001C;--amarillo:#FFD100;--tierra:#1A0A00;--polvo:#3D1F00;--carbon:#0D0D0D;--blanco:#F5F0E8;--gris:#888070;--acento:#FF4500;}
        body{background:var(--carbon);color:var(--blanco);font-family:'Barlow Condensed',sans-serif;overflow-x:hidden;cursor:crosshair;}
        body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");pointer-events:none;z-index:9999;opacity:0.6;}
        ::-webkit-scrollbar{width:4px;} ::-webkit-scrollbar-track{background:var(--carbon);} ::-webkit-scrollbar-thumb{background:var(--rojo);}
        .hero{min-height:100vh;position:relative;display:grid;grid-template-columns:1fr 1fr;align-items:center;overflow:hidden;padding:0 2.5rem;}
        .hero::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,var(--tierra) 0%,var(--polvo) 40%,transparent 60%),radial-gradient(ellipse at 80% 50%,rgba(232,0,28,0.15) 0%,transparent 60%);z-index:0;}
        .hero-slash{position:absolute;top:0;left:50%;width:3px;height:100%;background:linear-gradient(to bottom,transparent,var(--rojo) 30%,var(--amarillo) 70%,transparent);transform:rotate(-8deg) translateX(-50%);opacity:0.4;z-index:1;}
        .speed-lines{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;overflow:hidden;}
        .hero-content{position:relative;z-index:2;padding:8rem 0 4rem;}
        .hero-eyebrow{font-family:'Space Mono',monospace;font-size:0.7rem;letter-spacing:0.3em;color:var(--amarillo);text-transform:uppercase;margin-bottom:1.2rem;display:flex;align-items:center;gap:0.8rem;animation:fadeUp 0.8s ease 0.2s both;}
        .hero-eyebrow::before{content:'';display:block;width:30px;height:2px;background:var(--amarillo);}
        .hero-title{font-family:'Black Ops One',cursive;font-size:clamp(4.5rem,9vw,9rem);line-height:0.9;letter-spacing:-0.02em;margin-bottom:0.3rem;animation:fadeUp 0.8s ease 0.4s both;}
        .hero-title .line-col{color:var(--rojo);display:block;text-shadow:0 0 60px rgba(232,0,28,0.4);}
        .hero-title .line-bmx{-webkit-text-stroke:2px var(--blanco);color:transparent;display:block;}
        .hero-title .line-racing{display:block;color:var(--amarillo);font-size:0.4em;letter-spacing:0.25em;}
        .hero-sub{font-size:1.1rem;font-weight:300;color:var(--gris);margin:1.5rem 0 2.5rem;max-width:380px;line-height:1.5;animation:fadeUp 0.8s ease 0.6s both;}
        .hero-ctas{display:flex;gap:1rem;flex-wrap:wrap;animation:fadeUp 0.8s ease 0.8s both;}
        .btn-primary{font-family:'Black Ops One',cursive;font-size:0.9rem;letter-spacing:0.1em;padding:1rem 2.2rem;background:var(--rojo);color:var(--blanco);text-decoration:none;clip-path:polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%);transition:all 0.2s;position:relative;overflow:hidden;display:inline-block;}
        .btn-primary::after{content:'';position:absolute;inset:0;background:var(--amarillo);transform:translateX(-101%);transition:transform 0.3s ease;}
        .btn-primary:hover::after{transform:translateX(0);}
        .btn-primary span{position:relative;z-index:1;color:var(--carbon);}
        .btn-secondary{font-family:'Space Mono',monospace;font-size:0.75rem;letter-spacing:0.12em;padding:1rem 2rem;border:1.5px solid rgba(245,240,232,0.3);color:var(--blanco);text-decoration:none;transition:all 0.2s;clip-path:polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%);display:inline-block;}
        .btn-secondary:hover{border-color:var(--amarillo);color:var(--amarillo);}
        .hero-stats{position:absolute;bottom:3rem;left:2.5rem;display:flex;gap:3rem;z-index:2;animation:fadeUp 0.8s ease 1s both;}
        .stat-num{font-family:'Black Ops One',cursive;font-size:2.2rem;color:var(--blanco);line-height:1;}
        .stat-num span{color:var(--rojo);}
        .stat-label{font-family:'Space Mono',monospace;font-size:0.6rem;letter-spacing:0.2em;color:var(--gris);text-transform:uppercase;}
        .hero-visual{position:relative;z-index:2;display:flex;align-items:center;justify-content:center;height:100vh;}
        .hero-bg-text{position:absolute;font-family:'Black Ops One',cursive;font-size:18vw;color:transparent;-webkit-text-stroke:1px rgba(245,240,232,0.05);white-space:nowrap;pointer-events:none;right:-5%;top:50%;transform:translateY(-50%);z-index:0;}
        .rider-svg{width:380px;height:380px;filter:drop-shadow(0 0 40px rgba(232,0,28,0.3));animation:riderFloat 4s ease-in-out infinite;}
        @keyframes riderFloat{0%,100%{transform:translateY(0px) rotate(-2deg);}50%{transform:translateY(-12px) rotate(2deg);}}
        .glow-ring{position:absolute;border-radius:50%;border:1px solid rgba(232,0,28,0.2);animation:ringPulse 3s ease-in-out infinite;}
        @keyframes ringPulse{0%,100%{transform:scale(1);opacity:1;}50%{transform:scale(1.05);opacity:0.5;}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);}}
        .ticker{background:var(--rojo);padding:0.7rem 0;overflow:hidden;white-space:nowrap;}
        .ticker-inner{display:inline-flex;animation:ticker 25s linear infinite;}
        .ticker-item{font-family:'Black Ops One',cursive;font-size:0.85rem;letter-spacing:0.1em;color:var(--blanco);padding:0 2rem;}
        .ticker-sep{color:var(--amarillo);padding:0 0.5rem;}
        @keyframes ticker{from{transform:translateX(0);}to{transform:translateX(-50%);}}
        section{padding:6rem 2.5rem;}
        .section-label{font-family:'Space Mono',monospace;font-size:0.65rem;letter-spacing:0.35em;color:var(--rojo);text-transform:uppercase;display:flex;align-items:center;gap:0.8rem;margin-bottom:1rem;}
        .section-label::before{content:'//';color:var(--amarillo);}
        .section-title{font-family:'Black Ops One',cursive;font-size:clamp(2.5rem,5vw,4.5rem);line-height:0.95;letter-spacing:-0.01em;}
        .ranking-section{background:var(--tierra);position:relative;overflow:hidden;}
        .ranking-section::before{content:'RANKING';position:absolute;font-family:'Black Ops One',cursive;font-size:15vw;color:transparent;-webkit-text-stroke:1px rgba(255,255,255,0.03);top:50%;left:50%;transform:translate(-50%,-50%);white-space:nowrap;pointer-events:none;}
        .ranking-header{display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:end;margin-bottom:3rem;}
        .filter-tabs{display:flex;gap:0.5rem;flex-wrap:wrap;justify-content:flex-end;}
        .filter-tab{font-family:'Space Mono',monospace;font-size:0.65rem;letter-spacing:0.12em;padding:0.4rem 1rem;border:1px solid rgba(245,240,232,0.15);color:var(--gris);cursor:pointer;transition:all 0.2s;clip-path:polygon(4px 0%,100% 0%,calc(100% - 4px) 100%,0% 100%);background:transparent;}
        .filter-tab.active,.filter-tab:hover{border-color:var(--amarillo);color:var(--amarillo);}
        .pilots-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1.5px;}
        .pilot-card{background:var(--carbon);padding:1.8rem;position:relative;overflow:hidden;cursor:pointer;transition:transform 0.3s ease;border-top:3px solid transparent;}
        .pilot-card:hover{transform:translateY(-4px);border-top-color:var(--rojo);}
        .pilot-card.gold{border-top-color:var(--amarillo);}
        .pilot-card.silver{border-top-color:#C0C0C0;}
        .pilot-card.bronze{border-top-color:#CD7F32;}
        .pilot-rank{font-family:'Black Ops One',cursive;font-size:3.5rem;line-height:1;color:transparent;-webkit-text-stroke:1.5px rgba(245,240,232,0.1);position:absolute;right:1.5rem;top:1rem;}
        .pilot-num{font-family:'Space Mono',monospace;font-size:0.65rem;letter-spacing:0.2em;color:var(--gris);margin-bottom:0.5rem;}
        .pilot-name{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-style:italic;font-size:1.5rem;letter-spacing:0.02em;text-transform:uppercase;line-height:1.1;margin-bottom:0.3rem;}
        .pilot-category{font-family:'Space Mono',monospace;font-size:0.6rem;letter-spacing:0.15em;color:var(--rojo);text-transform:uppercase;margin-bottom:1.2rem;}
        .pilot-stats-row{display:flex;gap:1.5rem;}
        .pilot-stat-val{font-family:'Black Ops One',cursive;font-size:1.2rem;color:var(--amarillo);}
        .pilot-stat-lbl{font-size:0.65rem;letter-spacing:0.1em;color:var(--gris);text-transform:uppercase;}
        .calendar-section{background:var(--carbon);}
        .events-list{margin-top:3rem;}
        .event-row{display:grid;grid-template-columns:100px 1fr auto;gap:2rem;align-items:center;padding:2rem 0;border-bottom:1px solid rgba(245,240,232,0.06);transition:all 0.3s;cursor:pointer;position:relative;}
        .event-row:hover{padding-left:1rem;}
        .event-day{font-family:'Black Ops One',cursive;font-size:2.5rem;line-height:1;color:var(--blanco);}
        .event-month{font-family:'Space Mono',monospace;font-size:0.6rem;letter-spacing:0.2em;color:var(--rojo);text-transform:uppercase;}
        .event-name{font-family:'Barlow Condensed',sans-serif;font-weight:900;font-style:italic;font-size:1.6rem;text-transform:uppercase;margin-bottom:0.3rem;}
        .event-location{font-size:0.85rem;color:var(--gris);letter-spacing:0.05em;}
        .event-badge{font-family:'Space Mono',monospace;font-size:0.6rem;letter-spacing:0.15em;padding:0.4rem 0.8rem;text-transform:uppercase;clip-path:polygon(4px 0%,100% 0%,calc(100% - 4px) 100%,0% 100%);}
        .badge-nacional{background:var(--rojo);color:var(--blanco);}
        .badge-regional{background:var(--polvo);color:var(--amarillo);border:1px solid var(--amarillo);}
        .badge-copa{background:var(--amarillo);color:var(--carbon);}
        .news-section{background:var(--carbon);}
        .news-grid{display:grid;grid-template-columns:2fr 1fr;gap:2px;margin-top:3rem;}
        .news-main{background:var(--tierra);padding:2.5rem;position:relative;overflow:hidden;cursor:pointer;}
        .news-main::before{content:'';position:absolute;top:0;left:0;width:100%;height:3px;background:linear-gradient(to right,var(--rojo),var(--amarillo));}
        .news-side{display:flex;flex-direction:column;gap:2px;}
        .news-item{background:var(--polvo);padding:1.5rem;cursor:pointer;transition:background 0.2s;flex:1;display:flex;flex-direction:column;justify-content:space-between;}
        .news-item:hover{background:var(--tierra);}
        .news-tag{font-family:'Space Mono',monospace;font-size:0.6rem;letter-spacing:0.2em;color:var(--rojo);text-transform:uppercase;margin-bottom:0.6rem;}
        .news-title{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:1rem;text-transform:uppercase;line-height:1.2;color:var(--blanco);transition:color 0.2s;}
        .news-item:hover .news-title{color:var(--amarillo);}
        .news-main .news-title{font-size:2rem;font-weight:900;font-style:italic;margin-bottom:1rem;}
        .news-meta{font-family:'Space Mono',monospace;font-size:0.6rem;letter-spacing:0.1em;color:var(--gris);margin-top:0.8rem;}
        .news-excerpt{font-size:0.9rem;color:var(--gris);line-height:1.6;margin-top:0.8rem;}
        .sponsors-section{background:var(--tierra);padding:4rem 2.5rem;text-align:center;}
        .sponsors-label{font-family:'Space Mono',monospace;font-size:0.6rem;letter-spacing:0.35em;color:var(--gris);text-transform:uppercase;margin-bottom:2.5rem;}
        .sponsors-row{display:flex;gap:3rem;align-items:center;justify-content:center;flex-wrap:wrap;}
        .sponsor-logo{font-family:'Black Ops One',cursive;font-size:1.1rem;color:rgba(245,240,232,0.2);letter-spacing:0.08em;transition:color 0.2s;cursor:pointer;}
        .sponsor-logo:hover{color:var(--blanco);}
        .join-section{background:var(--polvo);padding:6rem 2.5rem;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;}
        .join-title{font-family:'Black Ops One',cursive;font-size:clamp(2.5rem,5vw,4.5rem);line-height:0.95;}
        .join-title .accent{color:var(--rojo);}
        .join-desc{font-size:1rem;color:var(--gris);margin-top:1.5rem;line-height:1.6;max-width:380px;}
        .join-form{display:flex;flex-direction:column;gap:1rem;}
        .form-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem;}
        .form-input{width:100%;background:rgba(245,240,232,0.05);border:1px solid rgba(245,240,232,0.1);color:var(--blanco);padding:0.9rem 1.2rem;font-family:'Space Mono',monospace;font-size:0.75rem;letter-spacing:0.05em;outline:none;transition:border-color 0.2s;}
        .form-input:focus{border-color:var(--rojo);}
        .form-input::placeholder{color:var(--gris);}
        .btn-form{font-family:'Black Ops One',cursive;font-size:0.9rem;letter-spacing:0.1em;padding:1.1rem 2rem;background:var(--rojo);color:var(--blanco);border:none;cursor:pointer;clip-path:polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%);transition:background 0.2s;text-align:left;}
        .btn-form:hover{background:var(--amarillo);color:var(--carbon);}
        footer{background:var(--tierra);padding:4rem 2.5rem 2rem;}
        .footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:3rem;margin-bottom:3rem;}
        .footer-logo{font-family:'Black Ops One',cursive;font-size:1.8rem;color:var(--blanco);display:block;margin-bottom:1rem;}
        .footer-logo span{color:var(--rojo);}
        .footer-tagline{font-size:0.85rem;color:var(--gris);line-height:1.5;margin-bottom:1.5rem;}
        .footer-social{display:flex;gap:0.5rem;}
        .social-btn{font-family:'Space Mono',monospace;font-size:0.65rem;letter-spacing:0.1em;padding:0.5rem 0.8rem;border:1px solid rgba(245,240,232,0.15);color:var(--gris);text-decoration:none;transition:all 0.2s;}
        .social-btn:hover{border-color:var(--rojo);color:var(--rojo);}
        .footer-col-title{font-family:'Black Ops One',cursive;font-size:0.85rem;letter-spacing:0.1em;margin-bottom:1.2rem;color:var(--blanco);}
        .footer-links{list-style:none;}
        .footer-links li{margin-bottom:0.6rem;}
        .footer-links a{font-size:0.85rem;color:var(--gris);text-decoration:none;transition:color 0.2s;letter-spacing:0.03em;}
        .footer-links a:hover{color:var(--blanco);}
        .footer-bottom{border-top:1px solid rgba(245,240,232,0.06);padding-top:1.5rem;display:flex;justify-content:space-between;align-items:center;}
        .footer-copy{font-family:'Space Mono',monospace;font-size:0.6rem;letter-spacing:0.1em;color:var(--gris);}
        .footer-domain{font-family:'Black Ops One',cursive;font-size:0.85rem;color:rgba(245,240,232,0.15);}
      `}</style>

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
                <stop offset="0%" stopColor="#E8001C" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#E8001C" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <circle cx="200" cy="200" r="180" fill="url(#glow)"/>
            <ellipse cx="200" cy="320" rx="120" ry="8" fill="rgba(232,0,28,0.2)"/>
            {/* Bike wheels */}
            <circle cx="140" cy="290" r="55" fill="none" stroke="rgba(245,240,232,0.7)" strokeWidth="8"/>
            <circle cx="140" cy="290" r="35" fill="none" stroke="rgba(245,240,232,0.3)" strokeWidth="3"/>
            <circle cx="140" cy="290" r="6" fill="#E8001C"/>
            <circle cx="270" cy="290" r="55" fill="none" stroke="rgba(245,240,232,0.7)" strokeWidth="8"/>
            <circle cx="270" cy="290" r="35" fill="none" stroke="rgba(245,240,232,0.3)" strokeWidth="3"/>
            <circle cx="270" cy="290" r="6" fill="#E8001C"/>
            {/* Frame */}
            <line x1="140" y1="290" x2="200" y2="220" stroke="rgba(245,240,232,0.8)" strokeWidth="6" strokeLinecap="round"/>
            <line x1="270" y1="290" x2="200" y2="220" stroke="rgba(245,240,232,0.8)" strokeWidth="6" strokeLinecap="round"/>
            <line x1="200" y1="220" x2="160" y2="200" stroke="rgba(245,240,232,0.8)" strokeWidth="5" strokeLinecap="round"/>
            <line x1="200" y1="220" x2="240" y2="240" stroke="rgba(245,240,232,0.8)" strokeWidth="5" strokeLinecap="round"/>
            <line x1="140" y1="290" x2="240" y2="240" stroke="rgba(245,240,232,0.6)" strokeWidth="4" strokeLinecap="round"/>
            {/* Handlebars */}
            <line x1="160" y1="200" x2="145" y2="185" stroke="#E8001C" strokeWidth="5" strokeLinecap="round"/>
            <line x1="145" y1="185" x2="130" y2="188" stroke="rgba(245,240,232,0.9)" strokeWidth="4" strokeLinecap="round"/>
            <line x1="145" y1="185" x2="158" y2="182" stroke="rgba(245,240,232,0.9)" strokeWidth="4" strokeLinecap="round"/>
            {/* Rider body */}
            <ellipse cx="195" cy="195" rx="18" ry="22" fill="rgba(245,240,232,0.85)" transform="rotate(-20,195,195)"/>
            {/* Helmet */}
            <ellipse cx="185" cy="168" rx="22" ry="18" fill="#E8001C"/>
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

      <script dangerouslySetInnerHTML={{__html:`
        const speedLinesContainer = document.getElementById('speedLines');
        if(speedLinesContainer){
          for(let i=0;i<12;i++){
            const line=document.createElement('div');
            line.className='speed-line';
            line.style.cssText='position:absolute;height:1px;background:linear-gradient(to right,transparent,rgba(255,209,0,0.3),transparent);animation:speedLine 3s linear infinite;opacity:0;top:'+(20+Math.random()*60)+'%;width:'+(100+Math.random()*200)+'px;animation-delay:'+(Math.random()*5)+'s;animation-duration:'+(2+Math.random()*3)+'s;';
            speedLinesContainer.appendChild(line);
          }
        }
        document.querySelectorAll('.filter-tab').forEach(tab=>{
          tab.addEventListener('click',function(){
            document.querySelectorAll('.filter-tab').forEach(t=>t.classList.remove('active'));
            this.classList.add('active');
          });
        });
        const nav=document.querySelector('nav');
        if(nav) window.addEventListener('scroll',()=>{nav.style.background=window.scrollY>80?'rgba(13,13,13,0.98)':'linear-gradient(to bottom,rgba(13,13,13,0.98),transparent)';});
        const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity='1';entry.target.style.transform='translateY(0)';}});},{threshold:0.1});
        document.querySelectorAll('.pilot-card,.event-row,.news-item,.news-main').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(20px)';el.style.transition='opacity 0.5s ease,transform 0.5s ease';observer.observe(el);});
      `}}/>
    </>
  )
}
