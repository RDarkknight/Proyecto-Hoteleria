// En: src/components/dashboard/DashboardSidebar.tsx
'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, LayoutDashboard, CreditCard, BedDouble, Mail, Map, BarChart, Users } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { RolUsuario } from '@prisma/client';

export function DashboardSidebar() {
  const { session } = useAuth();
  const user = session;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white/80 hover:bg-white/10 hover:text-white"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent 
        side="left" 
        className="bg-black/20 backdrop-blur-lg border-r border-white/30 text-white"
      >
        <SheetHeader>
          <SheetTitle className="text-primary font-display">
            Panel de Gestión
          </SheetTitle>
          <SheetDescription className="text-white/70">
            Gestión del Hotel Colon.
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 flex flex-col space-y-3">
          <SheetClose asChild>
            <Link href="/dashboard/gestion-reservas" className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/70 transition-all hover:text-primary">
              <LayoutDashboard className="h-4 w-4" />
              Gestion de Reservas
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link href="/dashboard/mapa-habitaciones" className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/70 transition-all hover:text-primary">
              <Map className="h-4 w-4" />
              Mapa de Habitaciones
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link href="/dashboard/gestion-habitaciones" className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/70 transition-all hover:text-primary">
              <BedDouble className="h-4 w-4" />
              Gestión de Habitaciones
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link href="/dashboard/pagos" className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/70 transition-all hover:text-primary">
              <CreditCard className="h-4 w-4" />
              Procesar Pagos
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link href="/dashboard/consultas" className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/70 transition-all hover:text-primary">
              <Mail className="h-4 w-4" />
              Responder Consultas
            </Link>
          </SheetClose>

          
          {user?.role === RolUsuario.ADMINISTRADOR && (
            <>
              <div className="my-3 border-t border-white/10"></div>
              <SheetClose asChild>
                <Link href="/dashboard/metricas" className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary/80 transition-all hover:text-primary">
                  <BarChart className="h-4 w-4" />
                  Métricas (Admin)
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/dashboard/admin/operadores" className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary/80 transition-all hover:text-primary">
                  <Users className="h-4 w-4" />
                  Gestión de Operadores
                </Link>
              </SheetClose>
            </>
          )}
          {/* --- FIN DEL BLOQUE --- */}
        </div>
      </SheetContent>
    </Sheet>
  );
}