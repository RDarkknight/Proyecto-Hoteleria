//en src/components/layout/DashboardSidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { useAuth } from '@/context/AuthContext';
import { RolUsuario } from '@prisma/client';
import { Hotel, Calendar, BedDouble, LucideIcon } from 'lucide-react';

// Definimos un tipo explícito para nuestros items de navegación
type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  roles: RolUsuario[];
};

// 1. Definimos los enlaces, etiquetas e iconos para nuestro dashboard
const NAV_ITEMS: NavItem[] = [
  { href: '/dashboard', label: 'Resumen', icon: Hotel, roles: [RolUsuario.OPERADOR, RolUsuario.ADMINISTRADOR] },
  { href: '/dashboard/gestion-reservas', label: 'Reservas', icon: Calendar, roles: [RolUsuario.OPERADOR, RolUsuario.ADMINISTRADOR] },
  { href: '/dashboard/gestion-habitaciones', label: 'Habitaciones', icon: BedDouble, roles: [RolUsuario.OPERADOR, RolUsuario.ADMINISTRADOR] },
  // Agrega aquí futuros enlaces para el rol de ADMINISTRADOR
];

// 2. Actualizamos las props para recibir el estado isOpen
export function DashboardSidebar({ isOpen }: { isOpen: boolean }) {
  const pathname = usePathname();
  const { session } = useAuth();
  const userRole = session?.role;

  const accessibleItems = useMemo(() => {
    if (!userRole) return [];
    return NAV_ITEMS.filter(item => item.roles.includes(userRole));
  }, [userRole]);

  if (!userRole) {
    return null;
  }

  // 3. Aplicamos clases condicionales para mostrar/ocultar el sidebar
  return (
    <aside 
      className={`sticky top-16 h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto border-r border-pink-500/20 bg-black/30 backdrop-blur-lg p-4 transition-transform duration-300 ease-in-out 
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
      md:translate-x-0 ${!isOpen && 'md:-ml-64'}`} // En escritorio, lo movemos con margen negativo
    >
      <div className="p-2 h-full flex flex-col">
        <div className="mb-4">
          <h2 className="text-lg font-extrabold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent tracking-tight">
            Panel de Gestión
          </h2>
          <div className="mt-3 h-1 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 opacity-90" />
        </div>
        <nav className="space-y-2">
          {accessibleItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 ${
                  isActive
                    ? 'text-white shadow-md bg-gradient-to-r from-pink-600 to-cyan-500'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto pt-6 text-xs text-gray-500">
          Hotel Colón v1.0.0
        </div>
      </div>
    </aside>
  );
}