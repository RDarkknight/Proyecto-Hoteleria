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

// Definimos qué información necesita nuestra tarjeta para mostrar una habitación
// Usaremos esto más adelante para pasarle los datos desde la API
export type HabitacionProps = {
  habitacion: {
    id: number;
    tipo: string;
    descripcion: string | null;
    precioPorNoche: number;
    // Agregaremos más campos como la imagen aquí
  };
};

export function HabitacionCard({ habitacion }: HabitacionProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{habitacion.tipo}</CardTitle>
        <CardDescription>
          {habitacion.descripcion || 'Una habitación confortable y elegante.'}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* Aquí iría la imagen de la habitación */}
        <div className="relative aspect-video w-full overflow-hidden rounded-md">
          <Image
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32" // Imagen de prueba
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