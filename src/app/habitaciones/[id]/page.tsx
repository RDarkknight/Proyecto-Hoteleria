// En: src/app/habitaciones/[id]/page.tsx

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ReservationForm } from '@/components/ReservationForm';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { type HabitacionImagen } from '@prisma/client';

type HabitacionConDetalles = Awaited<ReturnType<typeof getHabitacion>>;

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
        <div>
          <Carousel className="w-full rounded-lg overflow-hidden shadow-lg">
            <CarouselContent>
              {/* --- CAMBIO AQUÍ ---
                  Añadimos una comprobación: Si 'habitacion.imagenes' existe Y es un array Y tiene elementos... */}
              {habitacion.imagenes && Array.isArray(habitacion.imagenes) && habitacion.imagenes.length > 0 ? (
                // ... entonces hacemos el map
                habitacion.imagenes.map((imagen: HabitacionImagen, index: number) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-video w-full">
                      <Image
                        src={imagen.url}
                        alt={imagen.altText || `Imagen ${index + 1} de la habitación ${habitacion.tipo}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </CarouselItem>
                ))
              ) : (
                // ... si no, mostramos una imagen por defecto o un mensaje
                <CarouselItem>
                  <div className="relative aspect-video w-full">
                    <Image
                      src="https://images.unsplash.com/photo-1760889274812-1ff168f0d1ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1370" // Imagen por defecto
                      alt={`Imagen no disponible para la habitación ${habitacion.tipo}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              )}
            </CarouselContent>
            {/* Solo mostramos flechas si hay MÁS de una imagen */}
            {habitacion.imagenes && habitacion.imagenes.length > 1 && (
              <>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
              </>
            )}
          </Carousel>
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