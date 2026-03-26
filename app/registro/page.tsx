'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function RegistroPage() {
  const [tipo, setTipo] = useState<'corredor' | 'papa' | null>(null)
  const [enviado, setEnviado] = useState(false)

  return (
    <main className="min-h-screen text-white flex items-center justify-center px-6 pt-20 pb-16">
      <div className="reg-container">

        {!enviado ? (
          <>
            <div className="reg-header">
              <p className="reg-eyebrow">//  Únete</p>
              <h1 className="reg-title">
                CREA TU<br/><span className="accent">CUENTA</span>
              </h1>
              <p className="reg-subtitle">Sé parte de la comunidad BMX Racing Colombia.</p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setEnviado(true); }} className="reg-form">

              <div>
                <label className="form-label">Nombre Completo</label>
                <input type="text" className="form-input" placeholder="Tu nombre completo" required />
              </div>

              <div>
                <label className="form-label">Correo Electrónico</label>
                <input type="email" className="form-input" placeholder="tucorreo@email.com" required />
              </div>

              <div>
                <label className="form-label">Contraseña</label>
                <input type="password" className="form-input" placeholder="Mínimo 8 caracteres" required minLength={8} />
              </div>

              <div>
                <label className="form-label">Soy...</label>
                <div className="reg-tipo-row">
                  <button type="button" className={`tipo-btn${tipo === 'corredor' ? ' active' : ''}`} onClick={() => setTipo('corredor')}>
                    🚴 Corredor
                  </button>
                  <button type="button" className={`tipo-btn${tipo === 'papa' ? ' active' : ''}`} onClick={() => setTipo('papa')}>
                    👨‍👦 Papá / Mamá
                  </button>
                </div>
              </div>

              <div className="reg-actions">
                <button type="submit" className="btn-submit" disabled={!tipo}>
                  CREAR CUENTA →
                </button>
              </div>

              <p className="reg-footer-text">
                ¿Ya tienes cuenta?{' '}
                <Link href="/login">Inicia sesión</Link>
              </p>
            </form>
          </>
        ) : (
          <div className="reg-success">
            <div className="reg-success-icon">🏆</div>
            <h2 className="reg-success-title">
              ¡BIENVENIDO A<br/><span className="accent">BMX COL!</span>
            </h2>
            <p className="reg-success-text">Tu cuenta ha sido creada. Pronto recibirás un correo de confirmación.</p>
            <Link href="/" className="btn-primary">
              <span>IR AL INICIO →</span>
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
