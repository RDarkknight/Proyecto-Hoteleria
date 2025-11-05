// En: src/app/api/pagos/[id]/rechazar/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { EstadoReserva, EstadoPago } from '@prisma/client';

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const pagoId = parseInt(params.id, 10);
    if (isNaN(pagoId)) {
      return NextResponse.json({ error: 'ID de pago inválido' }, { status: 400 });
    }

    // Buscamos el pago y su reserva asociada
    const pago = await prisma.pago.findUnique({
      where: { id: pagoId },
      include: { reserva: true },
    });

    if (!pago) {
      return NextResponse.json({ error: 'Pago no encontrado' }, { status: 404 });
    }

    // Verificamos que el pago esté pendiente
    if (pago.estado !== EstadoPago.PENDIENTE) {
      return NextResponse.json({ error: 'Este pago ya fue procesado.' }, { status: 409 });
    }

    // --- LÓGICA DE RECHAZO ---
    // Usamos una transacción para actualizar ambos modelos
    const [pagoActualizado, reservaActualizada] = await prisma.$transaction([
      // 1. Actualizamos el Pago a RECHAZADO
      prisma.pago.update({
        where: { id: pagoId },
        data: { estado: EstadoPago.FALLIDO },
      }),
      // 2. Actualizamos la Reserva a CANCELADA
      prisma.reserva.update({
        where: { id: pago.reservaId },
        data: { estado: EstadoReserva.CANCELADA },
      }),
    ]);
    
    // Si la transacción tiene éxito, devolvemos los datos
    return NextResponse.json({ pagoActualizado, reservaActualizada });

  } catch (error) {
    console.error('Error al rechazar el pago:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}