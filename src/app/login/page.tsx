'use client'
import { type FormEvent, useEffect, useState } from 'react'
import { Button} from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { type LoginResponse, LoginResponseSchema } from '@/lib/usuarios/types'
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/context/AuthContext'

export default function LoginPage() {
  const { login } = useAuth()
  const router = useRouter()
  const search = useSearchParams()
  const nextPath = search.get('next')

  // usamos username + password (≤ 11, sin espacios)
  const [form, setForm] = useState<{ email: string; password: string }>({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [banner, setBanner] = useState<string | null>(null) // mensajes (bienvenida / flash)
  const [showPassword, setShowPassword] = useState(false);

  // mostrar mensajes “flash” (logout ok / inactividad)
  useEffect(() => {
    const ok = sessionStorage.getItem('flash')
    const danger = sessionStorage.getItem('flash-danger')
    if (ok) {
      sessionStorage.removeItem('flash')
      setBanner(ok)
      setTimeout(() => setBanner(null), 5000)
    } else if (danger) {
      sessionStorage.removeItem('flash-danger')
      setBanner(danger)
      setTimeout(() => setBanner(null), 5000)
    }
  }, [])

  // validaciones HU: no espacios y máx 11
  const mailOk =
    form.email.length > 0 && 
    form.email.includes('@') &&
    !/\s/.test(form.email)

  const passwordOk =
    form.password.length > 0 &&
    !/\s/.test(form.password)

  const canSubmit = mailOk && passwordOk && !loading

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!canSubmit) return
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form), // { username, password }
      })
      const json = await res.json()
      const parsed = LoginResponseSchema.safeParse(json)
      if (!parsed.success) {
        setError('Respuesta inesperada del servidor')
        return
      }
      const data: LoginResponse = parsed.data
      if ('error' in data) {
        setError(data.error)
        return
      }
      
      // 1. Actualizamos el estado global de la sesión
      login({
        nombre: data.user.nombre,
        email: data.user.email,
        role: data.role,
      });

      // 2. Bienvenida y redirección (como antes)
      setBanner(`Bienvenido, ${data.user.nombre}`);
      setTimeout(() => {
        if (nextPath) return router.replace(nextPath);
        
        if (data.role === 'ADMINISTRADOR') {
          router.replace('/admin/dashboard');
        } else if (data.role === 'OPERADOR') {
          router.replace('/operator/dashboard');
        } else {
          router.replace('/home'); 
        }

      }, 3000);
    } catch {
      setError('No se pudo conectar con el servidor')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Izquierda (hero) — diseño intacto */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-300/10 rounded-full blur-lg" />
        <div className="absolute top-1/2 left-5 w-16 h-16 bg-indigo-300/10 rounded-full blur-md" />

        <div className="text-center max-w-lg relative z-10 hero-content">
          <div className="mb-12 relative">
            <div className="absolute inset-0 w-32 h-32 mx-auto">
              <div className="w-full h-full bg-white/20 rounded-full pulse-ring" />
            </div>
            <div className="absolute inset-0 w-32 h-32 mx-auto">
              <div
                className="w-full h-full bg-purple-300/20 rounded-full pulse-ring"
                style={{ animationDelay: '.5s' }}
              />
            </div>
            <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-white to-purple-100 rounded-full flex items-center justify-center mb-6 logo-float glow-effect">
              <Image
                src="/imagen/Logo_Colon.jpg"
                alt="Logo Colon"
                width={100}
                height={100}
                className="w-220 h-220 object-contain"
                priority
              />
            </div>
              <div className="space-y-2 text-center">
                {/* Usamos 'text-primary' para darle nuestro color rosa/coral 
                  y lo hacemos mucho más grande.
                */}
                <h1 className="text-6xl font-extrabold text-primary drop-shadow-md">
                  Colon
                </h1>

                {/* Usamos 'text-foreground' para el color de texto normal (oscuro)
                  y 'tracking-widest' para darle un estilo "Miami" más espaciado.
                */}
                <h2 className="text-2xl font-medium text-foreground uppercase tracking-widest">
                  Hotel • Spa
                </h2>
              </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                Bienvenido a la página del mejor Hotel en Vice City
              </p>
              <div className="mt-4 flex justify-center gap-2">
                <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse" />
                <div
                  className="w-2 h-2 bg-indigo-300 rounded-full animate-pulse"
                  style={{ animationDelay: '.2s' }}
                />
                <div
                  className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"
                  style={{ animationDelay: '.4s' }}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { icon: '🌴', label: '' },
                { icon: '🥥', label: '' },
                { icon: '🌊', label: '' },
              ].map((f, index) => ( // <-- Añade 'index' aquí
                <div key={index} className="text-center"> {/* <-- Usa 'index' como key */}
                  <div className="w-12 h-12 mx-auto bg-white/20 rounded-xl flex items-center justify-center mb-2">
                    <span className="text-2xl">{f.icon}</span>
                  </div>
                  <p className="text-sm text-purple-200">{f.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Derecha (form) — diseño intacto, cambia a username */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md form-slide-in">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-rose-400" />
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-rose-400 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
                Iniciar Sesión
              </h3>
              <p className="text-gray-500">Accede a tu cuenta del sistema</p>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              {/* Usuario */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Correo Electónico</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <Input
                    value={form.email}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        email: e.target.value.replace(/\s/g, '').slice(0, 30),
                      }))
                    }
                    placeholder="Ingrese su correo electrónico"
                    className="pl-12 py-4"
                    maxLength={30}
                    autoComplete="username"
                  />
                </div>
                {form.email.length > 0 && (
                  <div className="mt-2 text-sm">
                    {mailOk ? (
                      <span className="text-green-600 font-medium">Usuario válido</span>
                    ) : (
                      <span className="text-red-600 font-medium">Usuario inválido</span>
                    )}
                  </div>
                )}
              </div>

              {/* Contraseña */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Contraseña</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1S15.1 4.29 15.1 6v2z" />
                    </svg>
                  </div>
                  <Input
                    id="password" // Añadimos id para conectar con el label
                    // CAMBIO: El tipo ahora depende del estado showPassword
                    type={showPassword ? 'text' : 'password'}
                    value={form.password}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        password: e.target.value.replace(/\s/g, '').slice(0, 30), // Ajustamos longitud
                      }))
                    }
                    placeholder="Ingrese su contraseña"
                    className="pl-12 py-4"
                    maxLength={40}
                    autoComplete="current-password"
                  />
                  <button
                    type="button" // Importante para que no envíe el formulario
                    onClick={() => setShowPassword(!showPassword)} // Cambia el estado
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                    aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {error && <p className="text-red-600 text-sm -mt-2">{error}</p>}
              {banner && (
                <p
                  className={`text-sm -mt-2 rounded px-3 py-2 ${
                    banner.includes('inactividad') ? 'bg-red-600 text-white' : 'bg-green-600 text-white'
                  }`}
                >
                  {banner}
                </p>
              )}

              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={!canSubmit}
                  className={
                    canSubmit
                      ? 'bg-red-600 text-white'
                      : ''
                  }
                >
                  <span className="flex items-center justify-center">
                    {loading ? (
                      <svg className="w-5 h-5 mr-2 animate-spin" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path d="M4 12a8 8 0 018-8" fill="currentColor" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 17l5-5-5-5v3H3v4h7v3zm11-14h-9l3.59 3.59L9 13.17V15h2v-1.17l6.59-6.59L21 11V3z" />
                      </svg>
                    )}
                    Acceder
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}