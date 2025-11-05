// En: src/app/api/pagos/[id]/procesar/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { EstadoReserva, EstadoPago } from '@prisma/client';
// (Aquí también deberíamos verificar que el que llama es un OPERADOR, pero lo haremos después)

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

    if (pago.estado !== EstadoPago.PENDIENTE || pago.reserva.estado !== EstadoReserva.PENDIENTE) {
      return NextResponse.json({ error: 'Este pago ya fue procesado.' }, { status: 409 });
    }

    // --- AQUÍ OCURRE LA MAGIA ---
    // Usamos una transacción para asegurar que ambas cosas ocurran
    const [pagoActualizado, reservaActualizada] = await prisma.$transaction([
      // 1. Actualizamos el Pago a COMPLETADO
      prisma.pago.update({
        where: { id: pagoId },
        data: { estado: EstadoPago.COMPLETADO },
      }),
      // 2. Actualizamos la Reserva a CONFIRMADA
      prisma.reserva.update({
        where: { id: pago.reservaId },
        data: { estado: EstadoReserva.CONFIRMADA },
      }),
    ]);

    return NextResponse.json({ pagoActualizado, reservaActualizada });

  } catch (error) {
    console.error('Error al procesar el pago:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}