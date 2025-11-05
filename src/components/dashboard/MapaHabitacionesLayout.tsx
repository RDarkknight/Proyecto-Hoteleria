// En: src/components/dashboard/MapaHabitacionesLayout.tsx
'use client';

import React from 'react';
// Importamos el tipo que definimos en la página del servidor
import { type HabitacionConEstado } from '@/app/dashboard/mapa-habitaciones/page';

// Definimos las props que espera este componente
interface MapaHabitacionesLayoutProps {
  habitaciones: HabitacionConEstado[];
}

const MapaHabitacionesLayout: React.FC<MapaHabitacionesLayoutProps> = ({ habitaciones }) => {

  // Esta es la función clave. Devuelve las clases de Tailwind
  // según el nombre del estado de la habitación.
  const getStateClasses = (estadoNombre: string): string => {
    switch (estadoNombre.toLowerCase()) {
      case 'disponible':
        // Verde (como el badge que ya teníamos)
        return 'bg-green-100 border-green-500 text-green-800 hover:bg-green-200';
      case 'ocupada':
        // Rojo (como el badge)
        return 'bg-red-100 border-red-500 text-red-800 hover:bg-red-200';
      case 'mantenimiento':
        // Amarillo (como el badge)
        return 'bg-yellow-100 border-yellow-500 text-yellow-800 hover:bg-yellow-200';
      default:
        // Un gris por defecto
        return 'bg-gray-100 border-gray-400 text-gray-800 hover:bg-gray-200';
    }
  };

  return (
    <div className="w-full">
      {/* Aquí puedes añadir una leyenda de colores si quieres */}
      {/* <LeyendaDeColores /> */}

      {/* Esta es la cuadrícula del mapa. 
        - En móviles (pantallas pequeñas), muestra 4 columnas.
        - En tablets (md), muestra 8 columnas.
        - En pantallas grandes (lg), muestra 10 columnas.
        ¡Puedes ajustar estos números como prefieras!
      */}
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-4">
        {/* Hacemos un bucle sobre cada habitación para crear su "caja" */}
        {habitaciones.map((habitacion) => (
          <div
            key={habitacion.id}
            // Aplicamos las clases de color dinámicas aquí
            className={`
              p-4 rounded-lg border-2 shadow-sm
              flex flex-col justify-center items-center 
              transition-colors cursor-pointer
              ${getStateClasses(habitacion.estado.nombre)}
            `}
            // Podríamos hacer que al hacer clic lleve a la gestión de esa habitación
            // onClick={() => router.push(`/dashboard/gestion-habitaciones/${habitacion.id}`)}
          >
            {/* Número de la habitación (grande y en negrita) */}
            <span className="text-xl font-bold">
              {habitacion.numero}
            </span>
            {/* Tipo de habitación (más pequeño) */}
            <span className="text-xs text-center">
              {habitacion.tipo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapaHabitacionesLayout;