// En: src/components/HabitacionCard.tsx

import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Habitacion, HabitacionImagen } from '@prisma/client';

export type HabitacionConImagen = Habitacion & {
  imagenes: HabitacionImagen[];
};

export function HabitacionCard({ habitacion }: { habitacion: HabitacionConImagen }) {

  const imageUrl = habitacion.imagenes[0]?.url
    ? habitacion.imagenes[0].url
    : 'https://images.unsplash.com/photo-1566073771259-6a8506099945';

  return (
    // --- CAMBIOS DE ESTILO AQUÍ ---
    // 1. Aplicamos el efecto "vidrio polarizado" y hacemos el texto blanco por defecto
    <Card className="flex flex-col bg-black/20 backdrop-blur-sm border-white/10 text-white rounded-lg overflow-hidden">
      <CardHeader>
        {/* 2. El título ya hereda el 'text-white' de la tarjeta */}
        <CardTitle className="font-display">{habitacion.tipo}</CardTitle>
        {/* 3. Damos a la descripción un color más suave */}
        <CardDescription className="text-white/70">
          {habitacion.descripcion || 'Una habitación confortable y elegante.'}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* La imagen no necesita cambios */}
        <div className="relative aspect-video w-full overflow-hidden rounded-md">
          <Image
            src={imageUrl}
            alt={`Foto de la habitación ${habitacion.tipo}`}
            fill
            className="object-cover"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="text-lg font-bold text-white">
          ${habitacion.precioPorNoche}
          {/* 4. Damos al texto '/noche' un color más suave */}
          <span className="text-sm font-normal text-white/70">/noche</span>
        </p>
        {/* 5. El botón 'primary' (rosa/coral) resaltará perfecto
               sobre el fondo oscuro, así que no necesita cambios. */}
        <Button asChild>
          <Link href={`/habitaciones/${habitacion.id}`}>Ver Detalles</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}