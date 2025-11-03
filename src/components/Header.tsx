// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // 1. Importar usePathname
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/context/AuthContext';
import { LogoutButton } from './LogoutButton';
import { Menu } from 'lucide-react'; // 2. Importar el icono
import { RolUsuario } from '@prisma/client';

// 3. Aceptar la nueva prop
export function Header({ onToggleSidebar }: { onToggleSidebar?: () => void }) {
  const { session } = useAuth();
  const user = session;
  const pathname = usePathname(); // Hook para obtener la ruta actual

  // 4. Lógica de visibilidad del botón
  const isDashboardPage = pathname.startsWith('/dashboard');
  const isManagementRole = user?.role === RolUsuario.OPERADOR || user?.role === RolUsuario.ADMINISTRADOR;

  return (
    <header className="bg-black/40 sticky top-0 z-50 w-full border-b border-white/5 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          {/* Botón Hamburguesa Condicional */}
          {isDashboardPage && isManagementRole && onToggleSidebar && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleSidebar}
              className="text-white/80 hover:bg-white/10 hover:text-white md:hidden" // Oculto en escritorio
            >
              <Menu className="h-6 w-6" />
            </Button>
          )}

          <Link
            href="/home"
            className="text-xl font-extrabold font-display tracking-tighter text-white"
            style={{
              textShadow: '0 0 10px #f9a8d4, 0 0 20px #f472b6, 0 0 30px #ec4899'
            }}
          >
            Colon Hotel
          </Link>
        </div>

        {/* Navegación (sin cambios) */}
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <Link href="/home" className="text-base font-medium text-white/80 transition-colors hover:text-white">Inicio</Link>
          <Link href="/habitaciones" className="text-base font-medium text-white/80 transition-colors hover:text-white">Habitaciones</Link>
          <Link href="/servicios" className="text-base font-medium text-white/80 transition-colors hover:text-white">Servicios</Link>
          <Link href="/contacto" className="text-base font-medium text-white/80 transition-colors hover:text-white">Contacto</Link>
        </nav>

        {/* Lógica de Sesión (sin cambios) */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <div className="flex flex-col items-end">
                <span className="text-sm font-medium text-white">Hola, {user.nombre}</span>
                <Badge variant="secondary">{user.role}</Badge>
              </div>
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
