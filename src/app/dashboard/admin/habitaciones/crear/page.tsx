// En: src/app/dashboard/admin/habitaciones/crear/page.tsx
import React from 'react';
import { prisma } from '@/lib/prisma';
import { HabitacionForm } from '@/components/dashboard/HabitacionForm'; // Importamos el formulario
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// 1. Obtenemos los estados en el servidor
async function getEstados() {
  return await prisma.estadoHabitacion.findMany();
}

export default async function CrearHabitacionPage() {
  const estados = await getEstados();

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      {/* Usamos el mismo estilo "glass" para la tarjeta contenedora */}
      <Card className="bg-black/20 backdrop-blur-sm border-white/10 text-white">
        <CardHeader>
          <CardTitle className="font-display text-3xl">
            Crear Nueva Habitación
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* 2. Renderizamos el formulario y le pasamos los estados */}
          <HabitacionForm estados={estados} />
        </CardContent>
      </Card>
    </div>
  );
}