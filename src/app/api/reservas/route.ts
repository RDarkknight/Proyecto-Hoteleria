// En: src/app/api/reservas/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyJwt } from '@/lib/usuarios/auth';
import { cookies } from 'next/headers'; // <-- CAMBIO: Importamos cookies

export async function POST(request: Request) {
  // 1. Proteger la ruta: Leer el token directamente de las cookies
  const token = cookies().get('auth_token')?.value; // <-- CAMBIO: Leemos la cookie

  if (!token) {
    return NextResponse.json({ error: 'No autorizado. Por favor, inicie sesión.' }, { status: 401 });
  }

  const userPayload = verifyJwt<{ sub: string }>(token);
  if (!userPayload) {
    return NextResponse.json({ error: 'Token inválido o expirado.' }, { status: 401 });
  }
  const userId = parseInt(userPayload.sub, 10);

  // El resto de la lógica (validación, creación de la reserva) sigue igual...
  const body = await request.json();
  const { habitacionId, fechaInicio, fechaFin, numeroHuespedes } = body;

  if (!habitacionId || !fechaInicio || !fechaFin || !numeroHuespedes) {
    return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
  }

  // ... (el resto del archivo no cambia)
  try {
    const startDate = new Date(fechaInicio);
    const endDate = new Date(fechaFin);

    const existingReservation = await prisma.reserva.findFirst({
      where: {
        habitacionId: habitacionId,
        AND: [
          { fechaInicio: { lt: endDate } },
          { fechaFin: { gt: startDate } },
        ],
      },
    });

    if (existingReservation) {
      return NextResponse.json(
        { error: 'La habitación ya está reservada para las fechas seleccionadas.' },
        { status: 409 }
      );
    }

    const nuevaReserva = await prisma.reserva.create({
      data: {
        usuarioId: userId,
        habitacionId: habitacionId,
        fechaInicio: startDate,
        fechaFin: endDate,
        numeroHuespedes: numeroHuespedes,
        estado: 'Pendiente',
      },
    });

    return NextResponse.json(nuevaReserva, { status: 201 });
  } catch (error) {
    console.error('Error al crear la reserva:', error);
    return NextResponse.json(
      { error: 'No se pudo procesar la reserva.' },
      { status: 500 }
    );
  }
}