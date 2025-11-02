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
} from '@/components/ui/carousel'; // Componentes del carrusel
import { type Habitacion, type HabitacionImagen, type ServicioEnHabitacion, type Servicio } from '@prisma/client'; // Importamos tipos

// 1. Definimos un tipo más completo para los datos
type HabitacionConDetalles = Habitacion & {
  servicios: (ServicioEnHabitacion & {
    servicio: Servicio;
  })[];
  imagenes: HabitacionImagen[];
};

// 2. La función getHabitacion ahora usa el tipo
async function getHabitacion(id: string): Promise<HabitacionConDetalles | null> {
  try {
    const roomId = parseInt(id, 10);
    if (isNaN(roomId)) return null;

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/habitaciones/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      return null;
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function HabitacionDetailPage({ params }: { params: { id: string } }) {
  const habitacion = await getHabitacion(params.id);

  if (!habitacion) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

        {/* 3. Columna del Carrusel de Imágenes */}
        <div>
          <Carousel className="w-full rounded-lg overflow-hidden shadow-lg">
            <CarouselContent>
              {/* 4. Hacemos un bucle sobre las imágenes */}
              {habitacion.imagenes && habitacion.imagenes.length > 0 ? (
                habitacion.imagenes.map((imagen, index) => (
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
                // Imagen por defecto si no hay ninguna
                <CarouselItem>
                  <div className="relative aspect-video w-full">
                    <Image
                      src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                      alt={`Imagen no disponible`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              )}
            </CarouselContent>
            {/* 5. Flechas de navegación */}
            {habitacion.imagenes && habitacion.imagenes.length > 1 && (
              <>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
              </>
            )}
          </Carousel>
        </div>

        {/* Columna de Información y Reserva (sin cambios) */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold font-display">{habitacion.tipo}</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Capacidad para {habitacion.capacidad} persona(s)
          </p>
          <p className="mt-4 text-2xl font-semibold">
            ${habitacion.precioPorNoche}
            <span className="text-base font-normal text-muted-foreground">/noche</span>
          </p>

          <div className="mt-6 border-t pt-6">
            <h2 className="text-xl font-semibold font-display">Descripción</h2>
            <p className="mt-2 text-foreground/80">
              {habitacion.descripcion || 'No hay descripción disponible.'}
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold font-display">Servicios Incluidos</h2>
            <ul className="mt-2 list-disc list-inside space-y-1 text-foreground/80">
              {habitacion.servicios.map((s) => (
                <li key={s.servicio.id}>{s.servicio.nombre}</li>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-8">
            <ReservationForm 
              habitacionId={habitacion.id} 
              capacidadMaxima={habitacion.capacidad} // <-- AÑADIMOS ESTA LÍNEA
            />
          </div>
        </div>
      </div>
    </div>
  );
}