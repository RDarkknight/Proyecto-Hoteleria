// src/components/layout/AuthShell.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Header } from '@/components/Header'; // 1. Importar el Header correcto
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar'; // 2. Importar el Sidebar desde su nueva ruta

export default function AuthShell({ children }: { children: React.ReactNode }) {
  const { session, loading } = useAuth();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (!loading && !session) {
      router.replace('/login');
    }
  }, [loading, session, router]);

  if (loading || !session) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        Cargando...
      </div>
    );
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* 3. Pasamos la función al Header principal */}
      <Header onToggleSidebar={toggleSidebar} /> 
      <div className="flex">
        <DashboardSidebar isOpen={isSidebarOpen} />
        <main className="flex-1 p-6 transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  );
}