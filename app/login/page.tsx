'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [enviado, setEnviado] = useState(false)

  return (
    <main className="min-h-screen login-page text-white flex items-center justify-center px-6 pt-20 pb-16">
      <div className="reg-container">

        {!enviado ? (
          <>
            <div className="login-header">
              <p className="login-eyebrow">//  Acceso</p>
              <h1 className="login-title">
                BIENVENIDO<br/><span className="accent">DE VUELTA</span>
              </h1>
              <p className="login-subtitle">Inicia sesión en tu cuenta BMX Racing Colombia.</p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setEnviado(true) }} className="login-form">

              <div>
                <label className="form-label">Correo Electrónico</label>
                <input type="email" className="form-input" placeholder="tucorreo@email.com" required />
              </div>

              <div>
                <label className="form-label">Contraseña</label>
                <input type="password" className="form-input" placeholder="Tu contraseña" required />
              </div>

              <div className="login-actions">
                <button type="submit" className="btn-submit">
                  ENTRAR →
                </button>
              </div>

              <p className="login-footer-text">
                ¿Eres nuevo?{' '}
                <Link href="/registro">Regístrate</Link>
              </p>
            </form>
          </>
        ) : (
          <div className="reg-success">
            <div className="reg-success-icon">🏁</div>
            <h2 className="reg-success-title">
              ¡LISTO,<br/><span className="accent">PILOTO!</span>
            </h2>
            <p className="reg-success-text">Sesión iniciada correctamente. Prepárate para rodar.</p>
            <Link href="/" className="btn-primary">
              <span>IR AL INICIO →</span>
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
