// En: src/app/dashboard/admin/habitaciones/editar/[id]/page.tsx
import React from 'react';
import { prisma } from '@/lib/prisma';
import { HabitacionForm } from '@/components/dashboard/HabitacionForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { notFound } from 'next/navigation';
import { type Habitacion, type HabitacionImagen, type EstadoHabitacion } from '@prisma/client';

// Definimos el tipo de datos que esperamos de la API
type HabitacionConImagenes = Habitacion & {
  imagenes: HabitacionImagen[];
};

// 1. Obtenemos los datos de la habitación específica
async function getHabitacion(id: string): Promise<HabitacionConImagenes | null> {
  const habitacionId = parseInt(id, 10);
  if (isNaN(habitacionId)) return null;

  try {
    // Usamos la API GET que ya creamos
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/admin/habitaciones/${id}`, {
      cache: 'no-store',
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

// 2. Obtenemos la lista de todos los estados
async function getEstados(): Promise<EstadoHabitacion[]> {
  return await prisma.estadoHabitacion.findMany();
}

// 3. Esta es la página
export default async function EditarHabitacionPage({ params }: { params: { id: string } }) {
  // Obtenemos los datos en paralelo
  const [habitacion, estados] = await Promise.all([
    getHabitacion(params.id),
    getEstados(),
  ]);

  // Si la habitación no existe, mostramos un 404
  if (!habitacion) {
    return notFound();
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <Card className="bg-black/20 backdrop-blur-sm border-white/10 text-white">
        <CardHeader>
          <CardTitle className="font-display text-3xl">
            Modificar Habitación: {habitacion.tipo} (N° {habitacion.numero})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* 4. Renderizamos el MISMO formulario que usamos para "Crear", 
            pero esta vez le pasamos los datos iniciales.
          */}
          <HabitacionForm estados={estados} initialData={habitacion} />
        </CardContent>
      </Card>
    </div>
  );
}