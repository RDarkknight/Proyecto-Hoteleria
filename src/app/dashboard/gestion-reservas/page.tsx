// src/app/dashboard/gestion-reservas/page.tsx
import React from 'react';
import { prisma } from '@/lib/prisma';
import GestionReservasClientLayout from '@/components/dashboard/GestionReservasClientLayout';

export default async function GestionReservasPage() {
  const reservas = await prisma.reserva.findMany({
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
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="p-4 md:p-6">
      <GestionReservasClientLayout reservas={reservas} />
    </div>
  );
}