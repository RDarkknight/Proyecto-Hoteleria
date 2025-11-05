// En: src/app/api/reservas/[id]/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const reservaId = parseInt(params.id, 10);
    if (isNaN(reservaId)) {
      return NextResponse.json({ error: 'ID de reserva inválido' }, { status: 400 });
    }

    const reserva = await prisma.reserva.findUnique({
      where: { id: reservaId },
      include: {
        // Incluimos los detalles de la habitación para mostrarlos
        habitacion: {
          select: {
            tipo: true,
            precioPorNoche: true,
          },
        },
      },
    });

    if (!reserva) {
      return NextResponse.json({ error: 'Reserva no encontrada' }, { status: 404 });
    }

    return NextResponse.json(reserva);

  } catch (error) {
    console.error('Error al obtener la reserva:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}