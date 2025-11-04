// src/components/layout/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { useAuth } from '@/context/AuthContext';
import { RolUsuario } from '@prisma/client';
import {
  LayoutDashboard,
  BedDouble,
  CalendarCheck,
  Users,
  LogOut,
  X,
} from 'lucide-react';
import clsx from 'clsx';
import { Button } from '@/components/ui/button';

const NAV_LINKS = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    icon: LayoutDashboard,
    roles: [RolUsuario.ADMINISTRADOR, RolUsuario.OPERADOR],
  },
  {
    href: '/dashboard/gestion-habitaciones',
    label: 'Habitaciones',
    icon: BedDouble,
    roles: [RolUsuario.ADMINISTRADOR, RolUsuario.OPERADOR],
  },
  {
    href: '/dashboard/gestion-reservas',
    label: 'Reservas',
    icon: CalendarCheck,
    roles: [RolUsuario.ADMINISTRADOR, RolUsuario.OPERADOR],
  },
  {
    href: '/dashboard/gestion-usuarios',
    label: 'Usuarios',
    icon: Users,
    roles: [RolUsuario.ADMINISTRADOR],
  },
];

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { session } = useAuth();
  const userRole = session?.role;

  const filteredLinks = useMemo(() => {
    if (!userRole) return [];
    return NAV_LINKS.filter(link => link.roles.includes(userRole));
  }, [userRole]);

  if (!userRole) return null;

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={clsx(
          'fixed inset-0 z-30 bg-black/60 transition-opacity md:hidden',
          {
            'opacity-100 pointer-events-auto': open,
            'opacity-0 pointer-events-none': !open,
          }
        )}
        onClick={onClose}
      />

      <aside
        className={clsx(
          'fixed top-0 left-0 z-40 h-full w-64 bg-gray-900 text-white transition-transform duration-300 ease-in-out md:relative md:translate-x-0',
          {
            'translate-x-0': open,
            '-translate-x-full': !open,
          }
        )}
        aria-label="Sidebar"
      >
        <div className="flex h-full flex-col p-4">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Admin Panel</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white/80 hover:bg-white/10 hover:text-white md:hidden"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex-1 space-y-2">
            {filteredLinks.map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={clsx(
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-base font-medium transition-colors',
                    {
                      'bg-gray-800 text-white': isActive,
                      'text-gray-400 hover:bg-gray-800 hover:text-white': !isActive,
                    }
                  )}
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}