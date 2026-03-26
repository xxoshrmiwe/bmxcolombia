'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function RegistroPage() {
  const [tipo, setTipo] = useState<'corredor' | 'papa' | null>(null)
  const [enviado, setEnviado] = useState(false)

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center px-6 pt-20 pb-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Barlow+Condensed:ital,wght@0,400;0,700;0,900;1,900&family=Space+Mono:wght@400;700&display=swap');
        .form-input{width:100%;background:rgba(245,240,232,0.05);border:1px solid rgba(245,240,232,0.1);color:#F5F0E8;padding:0.9rem 1.2rem;font-family:'Space Mono',monospace;font-size:0.8rem;letter-spacing:0.05em;outline:none;transition:border-color 0.2s;}
        .form-input:focus{border-color:#E8001C;}
        .form-input::placeholder{color:#888070;}
        .tipo-btn{flex:1;padding:1.2rem;border:1.5px solid rgba(245,240,232,0.15);color:#888070;font-family:'Black Ops One',cursive;font-size:1rem;letter-spacing:0.05em;cursor:pointer;transition:all 0.2s;background:transparent;clip-path:polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%);}
        .tipo-btn.active{border-color:#E8001C;color:#F5F0E8;background:rgba(232,0,28,0.1);}
        .tipo-btn:hover{border-color:#E8001C;color:#F5F0E8;}
        .btn-submit{width:100%;font-family:'Black Ops One',cursive;font-size:1rem;letter-spacing:0.1em;padding:1.1rem;background:#E8001C;color:#F5F0E8;border:none;cursor:pointer;clip-path:polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%);transition:background 0.2s;}
        .btn-submit:hover{background:#FFD100;color:#0D0D0D;}
        .btn-submit:disabled{background:#333;color:#666;cursor:not-allowed;}
      `}</style>

      <div style={{width:'100%',maxWidth:'480px'}}>
        
        {!enviado ? (
          <>
            {/* Header */}
            <div style={{marginBottom:'2.5rem'}}>
              <p style={{fontFamily:"'Space Mono',monospace",fontSize:'0.65rem',letterSpacing:'0.35em',color:'#E8001C',textTransform:'uppercase',marginBottom:'0.8rem'}}>//  Únete</p>
              <h1 style={{fontFamily:"'Black Ops One',cursive",fontSize:'clamp(2.5rem,6vw,3.5rem)',lineHeight:'0.95',marginBottom:'0.5rem'}}>
                CREA TU<br/><span style={{color:'#E8001C'}}>CUENTA</span>
              </h1>
              <p style={{color:'#888070',fontSize:'0.9rem',marginTop:'0.8rem'}}>Sé parte de la comunidad BMX Racing Colombia.</p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setEnviado(true); }} style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
              
              {/* Nombre */}
              <div>
                <label style={{fontFamily:"'Space Mono',monospace",fontSize:'0.6rem',letterSpacing:'0.2em',color:'#888070',textTransform:'uppercase',display:'block',marginBottom:'0.5rem'}}>Nombre Completo</label>
                <input type="text" className="form-input" placeholder="Tu nombre completo" required />
              </div>

              {/* Email */}
              <div>
                <label style={{fontFamily:"'Space Mono',monospace",fontSize:'0.6rem',letterSpacing:'0.2em',color:'#888070',textTransform:'uppercase',display:'block',marginBottom:'0.5rem'}}>Correo Electrónico</label>
                <input type="email" className="form-input" placeholder="tucorreo@email.com" required />
              </div>

              {/* Contraseña */}
              <div>
                <label style={{fontFamily:"'Space Mono',monospace",fontSize:'0.6rem',letterSpacing:'0.2em',color:'#888070',textTransform:'uppercase',display:'block',marginBottom:'0.5rem'}}>Contraseña</label>
                <input type="password" className="form-input" placeholder="Mínimo 8 caracteres" required minLength={8} />
              </div>

              {/* Tipo */}
              <div>
                <label style={{fontFamily:"'Space Mono',monospace",fontSize:'0.6rem',letterSpacing:'0.2em',color:'#888070',textTransform:'uppercase',display:'block',marginBottom:'0.5rem'}}>Soy...</label>
                <div style={{display:'flex',gap:'0.75rem'}}>
                  <button type="button" className={`tipo-btn${tipo==='corredor'?' active':''}`} onClick={() => setTipo('corredor')}>
                    🚴 Corredor
                  </button>
                  <button type="button" className={`tipo-btn${tipo==='papa'?' active':''}`} onClick={() => setTipo('papa')}>
                    👨‍👦 Papá / Mamá
                  </button>
                </div>
              </div>

              {/* Submit */}
              <div style={{marginTop:'0.5rem'}}>
                <button type="submit" className="btn-submit" disabled={!tipo}>
                  CREAR CUENTA →
                </button>
              </div>

              <p style={{fontFamily:"'Space Mono',monospace",fontSize:'0.6rem',letterSpacing:'0.1em',color:'#888070',textAlign:'center'}}>
                ¿Ya tienes cuenta?{' '}
                <Link href="/login" style={{color:'#E8001C',textDecoration:'none'}}>Inicia sesión</Link>
              </p>
            </form>
          </>
        ) : (
          /* Éxito */
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:'4rem',marginBottom:'1.5rem'}}>🏆</div>
            <h2 style={{fontFamily:"'Black Ops One',cursive",fontSize:'2.5rem',lineHeight:'0.95',marginBottom:'1rem'}}>
              ¡BIENVENIDO A<br/><span style={{color:'#E8001C'}}>BMX COL!</span>
            </h2>
            <p style={{color:'#888070',marginBottom:'2rem'}}>Tu cuenta ha sido creada. Pronto recibirás un correo de confirmación.</p>
            <Link href="/" style={{fontFamily:"'Black Ops One',cursive",fontSize:'0.9rem',letterSpacing:'0.1em',padding:'1rem 2rem',background:'#E8001C',color:'#F5F0E8',textDecoration:'none',clipPath:'polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)'}}>
              IR AL INICIO →
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
