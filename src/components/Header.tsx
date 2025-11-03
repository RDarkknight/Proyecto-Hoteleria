// En: src/components/Header.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/context/AuthContext';
import { LogoutButton } from './LogoutButton';

export function Header() {
  // Usamos el hook useAuth que funciona en el lado del cliente
  const { session } = useAuth();
  const user = session;

  return (
    <header className="bg-black/40 sticky top-0 z-50 w-full border-b border-white/5 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo o Nombre del Hotel */}
        <Link
          href="/home"
          className="text-xl font-extrabold  font-display tracking-tighter text-white"
          style={{
            textShadow: '0 0 10px #f9a8d4, 0 0 20px #f472b6, 0 0 30px #ec4899'
          }}
        >
          Colon Hotel
        </Link>

        {/* Sección de Navegación */}
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <Link
            href="/home"
            className="text-base font-medium text-white/80 transition-colors hover:text-white"
          >
            Inicio
          </Link>
          <Link
            href="/habitaciones"
            className="text-base font-medium text-white/80 transition-colors hover:text-white"
          >
            Habitaciones
          </Link>
          <Link
            href="/servicios"
            className="text-base font-medium text-white/80 transition-colors hover:text-white"
          >
            Servicios
          </Link>
          <Link
            href="/contacto"
            className="text-base font-medium text-white/80 transition-colors hover:text-white"
          >
            Contacto
          </Link>
        </nav>

        {/* Lógica de Inicio/Cierre de Sesión */}
        <div className="flex items-center space-x-4">
          {user ? (
            // Si el usuario HA INICIADO SESIÓN
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
            // Si el usuario NO HA INICIADO SESIÓN
            <Button asChild>
              <Link href="/login">Iniciar Sesión</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}