// En: src/app/dashboard/gestion-reservas/page.tsx
import React from 'react';
import { prisma } from '@/lib/prisma';
import GestionReservasClientLayout from '@/components/dashboard/GestionReservasClientLayout';
// CAMBIO: Importamos todos los tipos que vamos a anidar
import { type Reserva, type Usuario, type Habitacion, type Pago, type EstadoPago, type EstadoReserva } from '@prisma/client';

// CAMBIO: Definimos un tipo mucho más completo para los datos
export type ReservaCompleta = Reserva & {
  usuario: Pick<Usuario, 'nombre' | 'apellido' | 'email'>;
  habitacion: Pick<Habitacion, 'numero' | 'tipo'>;
  // AÑADIMOS LA INCLUSIÓN DE LOS PAGOS
  pagos: Pick<Pago, 'id' | 'estado'>[];
};

export default async function GestionReservasPage() {
  // CAMBIO: La consulta ahora incluye los pagos
  const reservas: ReservaCompleta[] = await prisma.reserva.findMany({
    include: {
      usuario: {
        select: {
          nombre: true,
          apellido: true,
          email: true,
        },
      },
      habitacion: {
        select: {
          numero: true,
          tipo: true,
        },
      },
      // --- AÑADIMOS ESTE BLOQUE ---
      pagos: {
        select: {
          id: true,       // Necesitamos el ID del pago para poder procesarlo
          estado: true,   // Necesitamos el estado para mostrarlo
        },
        orderBy: {
          createdAt: 'desc', // Obtenemos el pago más reciente primero
        },
      },
      // --- FIN DEL BLOQUE ---
    },
    orderBy: {
      createdAt: 'desc', // Mostramos las reservas más recientes primero
    },
  });

  return (
    <div className="p-4 md:p-6">
      <GestionReservasClientLayout reservas={reservas} />
    </div>
  );
}