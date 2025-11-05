// En: src/components/Header.tsx

import Link from 'next/link';
import { cookies } from 'next/headers'; // <-- De vuelta a Componente de Servidor
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { verifyJwt } from '@/lib/usuarios/auth';
import type { JwtUser } from '@/lib/usuarios/types';
import { RolUsuario } from '@prisma/client';
import { DashboardSidebar } from './dashboard/DashboardSidebar';
import { LogoutButton } from './LogoutButton'; // <-- Usamos el nuevo componente

export async function Header() {
  const token = cookies().get('auth_token')?.value;
  let user: JwtUser | null = null;

  if (token) {
    user = verifyJwt<JwtUser>(token);
  }

  // Lógica de roles que ya tenías
  const isManagementRole = user?.role === RolUsuario.OPERADOR || user?.role === RolUsuario.ADMINISTRADOR;

  return (
    <header className="bg-black/20 sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        <div className="flex items-center gap-3">
          {/* Lógica condicional del sidebar (como la tenías) */}
          {isManagementRole && (
            <DashboardSidebar />
          )}
          
          {/* Tu logo de neón (como lo tenías) */}
          <Link
            href="/home"
            className="text-xl font-extrabold font-display tracking-tighter text-white"
            style={{ textShadow: '0 0 10px #f9a8d4, 0 0 20px #f472b6, 0 0 30px #ec4899' }}
          >
            Colon Hotel
          </Link>
        </div>

        {/* Navegación (como la teníamos) */}
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <Link href="/home" className="text-base font-medium text-white/80 transition-colors hover:text-white">Inicio</Link>
          <Link href="/habitaciones" className="text-base font-medium text-white/80 transition-colors hover:text-white">Habitaciones</Link>
          <Link href="/servicios" className="text-base font-medium text-white/80 transition-colors hover:text-white">Servicios</Link>
          <Link href="/contacto" className="text-base font-medium text-white/80 transition-colors hover:text-white">Contacto</Link>
        </nav>

        {/* Lógica de Sesión (actualizada) */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <div className="flex flex-col items-end">
                <span className="text-sm font-medium text-white">Hola, {user.nombre}</span>
                <Badge variant="secondary">{user.role}</Badge>
              </div>
              {/* Usamos el nuevo botón de cliente con el pop-up */}
              <LogoutButton />
            </>
          ) : (
            <Button asChild>
              <Link href="/login">Iniciar Sesión</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}