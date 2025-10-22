// En: src/components/Header.tsx

import Link from 'next/link';
import { cookies } from 'next/headers';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { verifyJwt } from '@/lib/usuarios/auth';
import type { JwtUser } from '@/lib/usuarios/types'; // Asegúrate de que este tipo exista y use RolUsuario
import { LogoutButton } from './LogoutButton'; // Crearemos este componente a continuación

export async function Header() {
  const token = cookies().get('auth_token')?.value;
  const user = token ? verifyJwt<JwtUser>(token) : null;

  return (
    <header className="bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/home" className="text-xl font-bold text-primary">
          Colon Hotel
        </Link>

        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {/* ...tus enlaces de navegación... */}
        </nav>

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