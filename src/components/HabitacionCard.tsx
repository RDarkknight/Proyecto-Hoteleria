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
import type { Habitacion, HabitacionImagen } from '@prisma/client'; // Importamos tipos

// 1. Definimos un tipo que espera la lista de imágenes
export type HabitacionConImagen = Habitacion & {
  imagenes: HabitacionImagen[];
};

export function HabitacionCard({ habitacion }: { habitacion: HabitacionConImagen }) {

  // 2. Obtenemos la URL de la primera imagen de forma segura
  const imageUrl = habitacion.imagenes[0]?.url
    ? habitacion.imagenes[0].url
    : 'https://images.unsplash.com/photo-1566073771259-6a8506099945'; // Imagen de reserva

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{habitacion.tipo}</CardTitle>
        <CardDescription>
          {habitacion.descripcion || 'Una habitación confortable y elegante.'}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* 3. Usamos la variable imageUrl en el componente Image */}
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
        <p className="text-lg font-bold">
          ${habitacion.precioPorNoche}
          <span className="text-sm font-normal text-muted-foreground">/noche</span>
        </p>
        <Button asChild>
          <Link href={`/habitaciones/${habitacion.id}`}>Ver Detalles</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}