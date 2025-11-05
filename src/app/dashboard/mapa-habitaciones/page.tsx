// En: src/app/dashboard/mapa-habitaciones/page.tsx

import React from 'react';
import { prisma } from '@/lib/prisma';
// Importamos el tipo 'EstadoHabitacion' para TypeScript
import { type Habitacion, type EstadoHabitacion } from '@prisma/client';
// Importaremos el layout del cliente que crearemos en el siguiente paso
import MapaHabitacionesLayout from '@/components/dashboard/MapaHabitacionesLayout';

// Definimos un tipo para los datos que pasaremos al cliente
export type HabitacionConEstado = Habitacion & {
  estado: EstadoHabitacion;
};

// Esta función se ejecuta en el servidor para obtener los datos
async function getHabitacionesConEstado() {
  try {
    const habitaciones: HabitacionConEstado[] = await prisma.habitacion.findMany({
      // La parte clave: incluimos la tabla 'estado' relacionada
      include: {
        estado: true, 
      },
      // Ordenamos por piso y luego por número para un mapa lógico
      orderBy: [
        { piso: 'asc' },
        { numero: 'asc' },
      ],
    });
    return habitaciones;
  } catch (error) {
    console.error("Error al obtener los datos del mapa de habitaciones:", error);
    return []; // Devolvemos un array vacío si hay un error
  }
}

// Este es el componente de la página
export default async function MapaHabitacionesPage() {
  const habitaciones = await getHabitacionesConEstado();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold font-display text-gray-900">
          Mapa de Estado de Habitaciones
        </h1>
        <p className="mt-2 text-lg text-gray-800">
          Un vistazo rápido del estado actual del hotel.
        </p>
      </div>

      {/* Pasamos los datos al componente cliente que manejará la cuadrícula */}
      <MapaHabitacionesLayout habitaciones={habitaciones} />
    </div>
  );
}