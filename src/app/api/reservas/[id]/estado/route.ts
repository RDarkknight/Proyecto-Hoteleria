// src/app/api/reservas/[id]/estado/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

interface PatchParams {
  params: {
    id: string;
  };
}

// Definimos los estados permitidos para evitar valores arbitrarios.
const ESTADOS_PERMITIDOS = ['Pendiente', 'Confirmada', 'Rechazada', 'Cancelada'];

export async function PATCH(request: Request, { params }: PatchParams) {
  try {
    const reservaId = parseInt(params.id, 10);
    if (isNaN(reservaId)) {
      return NextResponse.json({ error: 'ID de reserva inválido.' }, { status: 400 });
    }

    const body = await request.json();
    const { estado } = body;

    // Validación del nuevo estado
    if (!estado || typeof estado !== 'string') {
      return NextResponse.json({ error: 'El campo "estado" es requerido.' }, { status: 400 });
    }
    if (!ESTADOS_PERMITIDOS.includes(estado)) {
      return NextResponse.json(
        { error: `El estado "${estado}" no es válido. Valores permitidos: ${ESTADOS_PERMITIDOS.join(', ')}` },
        { status: 400 }
      );
    }

    const reservaActualizada = await prisma.reserva.update({
      where: {
        id: reservaId,
      },
      data: {
        estado: estado,
      },
    });

    return NextResponse.json(reservaActualizada);
  } catch (error) {
    console.error(`Error al actualizar la reserva ${params.id}:`, error);
    
    // Manejar el caso de que la reserva no se encuentre
    if (error instanceof Error && 'code' in error && error.code === 'P2025') {
        return NextResponse.json({ error: 'La reserva no fue encontrada.' }, { status: 404 });
    }

    return NextResponse.json(
      { error: 'No se pudo actualizar la reserva.' },
      { status: 500 }
    );
  }
}
