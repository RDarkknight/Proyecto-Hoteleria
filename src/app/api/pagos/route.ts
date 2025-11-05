// En: src/app/api/pagos/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { EstadoReserva, EstadoPago } from '@prisma/client'; // Importamos los enums

const pagoSchema = z.object({
  reservaId: z.number().int().positive('El ID de la reserva es inválido'),
  monto: z.number().positive('El monto debe ser un número positivo'),
  metodoId: z.number().int().positive('El método de pago es requerido'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = pagoSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: 'Datos de entrada inválidos', details: validation.error.flatten() }, { status: 400 });
    }

    const { reservaId, monto, metodoId } = validation.data;

    const reserva = await prisma.reserva.findUnique({
      where: { id: reservaId },
    });

    if (!reserva) {
      return NextResponse.json({ error: 'La reserva no existe' }, { status: 404 });
    }

    if (reserva.estado !== EstadoReserva.PENDIENTE) {
      return NextResponse.json({ error: 'Esta reserva ya fue procesada o cancelada' }, { status: 409 });
    }

    // --- CAMBIO CLAVE AQUÍ ---
    // En lugar de una transacción que lo aprueba todo, ahora solo creamos el pago.
    // La reserva ya está PENDIENTE, así que no la tocamos.
    
    const pago = await prisma.pago.create({
      data: {
        reservaId: reservaId,
        monto: monto,
        metodoId: metodoId,
        // CAMBIO: El pago también se crea como PENDIENTE
        estado: EstadoPago.PENDIENTE, 
      },
    });
    // --- FIN DEL CAMBIO ---

    // Devolvemos solo el pago. La reserva sigue PENDIENTE.
    return NextResponse.json({ pago }, { status: 201 });

  } catch (error) {
    console.error('Error al procesar el pago:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}