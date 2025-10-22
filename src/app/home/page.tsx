// En: src/app/home/page.tsx

import { HabitacionCard } from '@/components/HabitacionCard';
import type { Habitacion } from '@prisma/client'; // Importamos el tipo desde Prisma

// Definimos un tipo más completo para incluir los servicios que vienen con la habitación
type HabitacionConServicios = Habitacion & {
  servicios: {
    servicio: {
      id: number;
      nombre: string;
    };
  }[];
};

// Función para obtener los datos de las habitaciones desde nuestra API
async function getHabitaciones(): Promise<HabitacionConServicios[]> {
  try {
    // Hacemos la llamada a la API que creamos.
    // Es importante usar la URL completa en el servidor.
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/habitaciones`, {
      cache: 'no-store', // Para que los datos siempre estén actualizados
    });

    if (!res.ok) {
      throw new Error('Error al obtener los datos de las habitaciones');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return []; // Devolvemos un array vacío si hay un error
  }
}

export default async function HomePage() {
  // Llamamos a la función para obtener los datos al cargar la página
  const habitaciones = await getHabitaciones();

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Sección Hero (la dejamos como la planeamos) */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">
          Tu descanso ideal te está esperando
        </h1>
        <p className="text-lg text-muted-foreground mt-4">
          Explora nuestras habitaciones y encuentra el espacio perfecto para ti.
        </p>
      </section>

      {/* Sección de Habitaciones */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Nuestras Habitaciones</h2>

        {/* Si no hay habitaciones, mostramos un mensaje */}
        {habitaciones.length === 0 ? (
          <p>No hay habitaciones disponibles en este momento.</p>
        ) : (
          // Creamos una cuadrícula para mostrar las tarjetas
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hacemos un bucle sobre los datos y creamos una tarjeta por cada habitación */}
            {habitaciones.map((habitacion) => (
              <HabitacionCard key={habitacion.id} habitacion={habitacion} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}