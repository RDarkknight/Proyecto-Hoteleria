// src/app/api/reservas/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyJwt } from '@/lib/usuarios/auth';
import {cookies} from 'next/headers';
import { EstadoReserva } from '@prisma/client';

// --- FUNCIÓN GET (para el dashboard de gestión) ---
export async function GET() {
  try {
    const reservas = await prisma.reserva.findMany({
      include: {
        usuario: {
          select: { nombre: true, apellido: true, email: true },
        },
        habitacion: {
          select: { numero: true, tipo: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(reservas);
  } catch (error) {
    console.error('Error al obtener las reservas:', error);
    return NextResponse.json({ error: 'No se pudieron obtener las reservas.' }, { status: 500 });
  }
}

// En: src/app/api/reservas/route.ts

export async function POST(request: Request) {
  try {
    const token = cookies().get('auth_token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const userPayload = verifyJwt<{ sub: string }>(token);
    if (!userPayload) {
      return NextResponse.json({ error: 'Token inválido' }, { status: 401 });
    }
    const userId = parseInt(userPayload.sub, 10);

    const body = await request.json();
    const { habitacionId, fechaInicio, fechaFin, numeroHuespedes } = body;

    if (!habitacionId || !fechaInicio || !fechaFin || !numeroHuespedes) {
      return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
    }

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
        estado: EstadoReserva.PENDIENTE, // <-- 2. USA EL ENUM AQUÍ
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