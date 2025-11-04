'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Header } from '@/components/Header';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { RolUsuario } from '@prisma/client';

export default function AuthShell({ children }: { children: React.ReactNode }) {
  const { session, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!loading && !session) {
      router.replace('/login');
    }
  }, [loading, session, router]);

  if (loading || !session) {
    return null; // O un spinner/esqueleto de carga
  }
  
  const isDashboardPage = pathname.startsWith('/dashboard');
  const isManagementRole = session.role === RolUsuario.OPERADOR || session.role === RolUsuario.ADMINISTRADOR;

  // Renderiza el layout del dashboard solo si es una página de gestión y el rol es el adecuado
  if (isDashboardPage && isManagementRole) {
    return (
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        <DashboardSidebar isOpen={sidebarOpen} />
        <div className="flex flex-1 flex-col overflow-hidden">
          <Header onToggleSidebar={() => setSidebarOpen(v => !v)} />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
        </div>
      </div>
    );
  }

  // Renderiza el layout público para el resto de las páginas
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}