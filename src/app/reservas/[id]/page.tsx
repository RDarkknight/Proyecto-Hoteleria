// En: src/app/reservas/[id]/page.tsx

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import Link from "next/link";
import { notFound } from "next/navigation";

// Definimos los tipos para los datos que esperamos de la API
type ReservaDetallada = {
  id: number;
  fechaInicio: string;
  fechaFin: string;
  numeroHuespedes: number;
  habitacion: {
    tipo: string;
    descripcion: string;
    precioPorNoche: number;
  };
  usuario: {
    nombre: string;
    apellido: string;
    email: string;
  };
};

import { prisma } from "@/lib/prisma"; // 1. Importamos Prisma

// 2. La función ahora es más simple y consulta la DB directamente
async function getReserva(id: string): Promise<ReservaDetallada | null> {
  const reservaId = parseInt(id, 10);
  if (isNaN(reservaId)) {
    return null;
  }

  try {
    const reserva = await prisma.reserva.findUnique({
      where: { id: reservaId },
      include: {
        habitacion: {
          select: {
            tipo: true,
            descripcion: true,
            precioPorNoche: true,
          },
        },
        usuario: {
          select: {
            nombre: true,
            apellido: true,
            email: true,
          },
        },
      },
    });

    // Como Prisma puede devolver null, no necesitamos un try/catch complejo
    return reserva as ReservaDetallada | null;
  } catch (error) {
    console.error(`Error al obtener la reserva ${reservaId}:`, error);
    return null;
  }
}

export default async function ReservaConfirmadaPage({ params }: { params: { id: string } }) {
  const reserva = await getReserva(params.id);

  if (!reserva) {
    notFound(); // Si la reserva no se encuentra, muestra un 404
  }

  // Calculamos el número de noches y el costo total
  const noches = Math.ceil(new Date(reserva.fechaFin).getTime() - new Date(reserva.fechaInicio).getTime()) / (1000 * 60 * 60 * 24);
  const costoTotal = noches * reserva.habitacion.precioPorNoche;

  return (
    <div className="container mx-auto max-w-2xl py-12">
      <Card className="bg-white/80 backdrop-blur-sm border-green-500 shadow-lg shadow-green-500/20">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <CardTitle className="text-3xl font-bold text-green-700">¡Reserva Confirmada!</CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Gracias por elegir Colon Hotel, {reserva.usuario.nombre}.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-gray-800">
          <div>
            <h3 className="font-semibold text-lg mb-2">Detalles de la Habitación</h3>
            <p className="font-bold text-xl text-primary">{reserva.habitacion.tipo}</p>
            <p className="text-sm text-gray-600">{reserva.habitacion.descripcion}</p>
          </div>
          <Separator />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Fecha de Llegada</p>
              <p>{format(new Date(reserva.fechaInicio), "EEEE, d 'de' MMMM 'de' yyyy", { locale: es })}</p>
            </div>
            <div>
              <p className="font-semibold">Fecha de Salida</p>
              <p>{format(new Date(reserva.fechaFin), "EEEE, d 'de' MMMM 'de' yyyy", { locale: es })}</p>
            </div>
            <div>
              <p className="font-semibold">Huéspedes</p>
              <p>{reserva.numeroHuespedes}</p>
            </div>
            <div>
              <p className="font-semibold">Noches</p>
              <p>{noches}</p>
            </div>
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold text-lg mb-2">Costo Total</h3>
            <p className="text-3xl font-bold">${costoTotal.toFixed(2)}</p>
            <p className="text-sm text-gray-500">(${reserva.habitacion.precioPorNoche.toFixed(2)} por noche)</p>
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold text-lg mb-2">Información del Huésped</h3>
            <p>{reserva.usuario.nombre} {reserva.usuario.apellido}</p>
            <p className="text-gray-600">{reserva.usuario.email}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/home">Volver al Inicio</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}