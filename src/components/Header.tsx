// En: src/components/Header.tsx

import Link from 'next/link';
import { cookies } from 'next/headers';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { verifyJwt } from '@/lib/usuarios/auth';
import type { JwtUser } from '@/lib/usuarios/types'; // Asegúrate de que este tipo exista
import { LogoutButton } from './LogoutButton';

export async function Header() {
  const token = cookies().get('auth_token')?.value;
  let user: JwtUser | null = null;

  // Verificamos el token para obtener los datos del usuario
  if (token) {
    user = verifyJwt<JwtUser>(token);
  }

  return (
    <header className="bg-black/40 sticky top-0 z-50 w-full border-b border-white/30 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo o Nombre del Hotel */}
        <Link href="/home" className="text-xl font-bold text-primary font-display">
          Colon Hotel
        </Link>

        {/* ESTA ES LA SECCIÓN DE NAVEGACIÓN QUE FALTABA 
        */}
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <Link
            href="/home"
            className="text-base font-medium text-white/80 transition-colors hover:text-white"
          >
            Inicio
          </Link>
          <Link
            href="/habitaciones" // Apunta a la página de detalles de las habitaciones
            className="text-base font-medium text-white/80 transition-colors hover:text-white"
          >
            Habitaciones
          </Link>
          <Link
            href="/servicios" // Futura página de servicios
            className="text-base font-medium text-white/80 transition-colors hover:text-white"
          >
            Servicios
          </Link>
          <Link
            href="/contacto" // La página de contacto que estamos por crear
            className="text-base font-medium text-white/80 transition-colors hover:text-white"
          >
            Contacto
          </Link>
        </nav>

        {/* ESTA ES LA LÓGICA DE INICIO/CIERRE DE SESIÓN 
        */}
        <div className="flex items-center space-x-4">
          {user ? (
            // --- Si el usuario HA INICIADO SESIÓN ---
            <>
              <div className="flex flex-col items-end">
                <span className="text-sm font-medium">
                  Hola, {user.nombre}
                </span>
                <Badge variant="secondary">{user.role}</Badge>
              </div>
              <LogoutButton />
            </>
          ) : (
            // --- Si el usuario NO HA INICIADO SESIÓN ---
            <Button asChild>
              <Link href="/login">Iniciar Sesión</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}