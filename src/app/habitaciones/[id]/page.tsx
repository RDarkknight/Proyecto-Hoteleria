// En: src/app/habitaciones/[id]/page.tsx

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ReservationForm } from '@/components/ReservationForm';

// Función para obtener los datos de UNA habitación desde nuestra API
async function getHabitacion(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/habitaciones/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      return null; // La habitación no fue encontrada o hubo un error
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function HabitacionDetailPage({ params }: { params: { id: string } }) {
  const habitacion = await getHabitacion(params.id);

  // Si la habitación no se encuentra, mostramos la página de error 404
  if (!habitacion) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Columna de la Imagen */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945" // Imagen de prueba
            alt={`Foto de la habitación ${habitacion.tipo}`}
            fill
            className="object-cover"
          />
        </div>

        {/* Columna de Información y Reserva */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">{habitacion.tipo}</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Capacidad para {habitacion.capacidad} persona(s)
          </p>
          <p className="mt-4 text-2xl font-semibold">
            ${habitacion.precioPorNoche}
            <span className="text-base font-normal text-muted-foreground">/noche</span>
          </p>

          <div className="mt-6 border-t pt-6">
            <h2 className="text-xl font-semibold">Descripción</h2>
            <p className="mt-2 text-foreground/80">
              {habitacion.descripcion || 'No hay descripción disponible.'}
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Servicios Incluidos</h2>
            <ul className="mt-2 list-disc list-inside space-y-1 text-foreground/80">
              {habitacion.servicios.map((s: any) => (
                <li key={s.servicio.id}>{s.servicio.nombre}</li>
              ))}
            </ul>
          </div>

          {/* Aquí irá el formulario de reserva en el siguiente paso */}
          <div className="mt-8 flex-grow rounded-md border bg-slate-50 p-6">
            <div className="mt-auto pt-8">
                <ReservationForm habitacionId={habitacion.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}