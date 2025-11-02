import React from 'react';
import { prisma } from '@/lib/prisma';
import HabitacionesClientLayout from '@/components/dashboard/HabitacionesClientLayout';

const GestionHabitacionesPage = async () => {
  const habitaciones = await prisma.habitacion.findMany({
    include: {
      estado: true,
    },
    orderBy: {
      numero: 'asc',
    }
  });

  const estados = await prisma.estadoHabitacion.findMany();

  return (
    <HabitacionesClientLayout habitaciones={habitaciones} estados={estados} />
  );
};

export default GestionHabitacionesPage;