// En: src/components/HabitacionCard.tsx
import Link from 'next/link'; // Asegúrate de que Link esté importado al principio del archivo

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// 1. Actualizamos la definición de tipos para incluir las imágenes
export type HabitacionProps = {
  habitacion: {
    id: number;
    tipo: string;
    descripcion: string | null;
    precioPorNoche: number;
    // El campo 'imagenes' es un array que puede contener cero o un objeto de imagen
    imagenes: {
      id: number;
      url: string;
      altText: string | null;
    }[];
  };
};

export function HabitacionCard({ habitacion }: HabitacionProps) {
  // 2. Extraemos la primera imagen o usamos null si no hay ninguna
  const primeraImagen = habitacion.imagenes && habitacion.imagenes.length > 0
    ? habitacion.imagenes[0]
    : null;

  // 3. Definimos la URL final de la imagen, con un fallback
  const imageUrl = primeraImagen?.url || "https://images.unsplash.com/photo-1611892440504-42a792e24d32";
  const imageAlt = primeraImagen?.altText || `Foto de la habitación ${habitacion.tipo}`;

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{habitacion.tipo}</CardTitle>
        <CardDescription>
          {habitacion.descripcion || 'Una habitación confortable y elegante.'}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="relative aspect-video w-full overflow-hidden rounded-md">
          {/* 4. Usamos las variables dinámicas en el componente Image */}
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
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