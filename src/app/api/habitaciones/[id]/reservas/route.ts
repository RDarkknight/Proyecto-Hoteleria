// En: src/app/api/habitaciones/[id]/reservas/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const habitacionId = parseInt(params.id, 10);
    if (isNaN(habitacionId)) {
      return NextResponse.json({ error: 'ID de habitación inválido' }, { status: 400 });
    }

    // Buscamos todas las reservas FUTURAS para esta habitación
    const reservas = await prisma.reserva.findMany({
      where: {
        habitacionId: habitacionId,
        // Solo nos importan las reservas que aún no han terminado
        fechaFin: {
          gte: new Date(),
        },
        // (Podrías añadir más filtros, ej. estado: 'Confirmada')
      },
      // Solo necesitamos las fechas
      select: {
        fechaInicio: true,
        fechaFin: true,
      },
    });

    // Devolvemos la lista de rangos de fechas
    return NextResponse.json(reservas);

  } catch (error) {
    console.error('Error al obtener las reservas:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}