import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const habitacionId = parseInt(params.id, 10);
    if (isNaN(habitacionId)) {
      return NextResponse.json({ error: 'ID de habitación inválido' }, { status: 400 });
    }

    const { estadoId } = await request.json();
    if (typeof estadoId !== 'number') {
      return NextResponse.json({ error: 'estadoId es requerido y debe ser un número' }, { status: 400 });
    }

    const habitacionActualizada = await prisma.habitacion.update({
      where: { id: habitacionId },
      data: { estadoId },
      include: {
        estado: true,
      },
    });

    return NextResponse.json(habitacionActualizada);
  } catch (error) {
    console.error('Error al actualizar el estado de la habitación:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}