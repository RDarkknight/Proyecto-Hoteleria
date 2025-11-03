// src/app/api/reservas/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyJwt } from '@/lib/usuarios/auth';

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

// --- FUNCIÓN POST (para crear nuevas reservas desde el cliente) ---
export async function POST(request: Request) {
  try {
    // 1. Verificar el token del usuario para obtener su ID
    const token = request.headers.get('cookie')?.split('; ').find(c => c.startsWith('auth_token='))?.split('=')[1];
    if (!token) {
      return NextResponse.json({ error: 'No autorizado. Debes iniciar sesión para reservar.' }, { status: 401 });
    }
    const decodedToken = verifyJwt<{ id: number }>(token);
    if (!decodedToken) {
      return NextResponse.json({ error: 'Token inválido o expirado.' }, { status: 401 });
    }
    const usuarioId = decodedToken.id;

    // 2. Obtener y validar los datos del cuerpo de la solicitud
    const body = await request.json();
    const { habitacionId, fechaInicio, fechaFin, numeroHuespedes } = body;

    if (!habitacionId || !fechaInicio || !fechaFin || !numeroHuespedes) {
      return NextResponse.json({ error: 'Todos los campos son requeridos.' }, { status: 400 });
    }

    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);

    // 3. Verificar si las fechas ya están ocupadas para esta habitación
    const reservaExistente = await prisma.reserva.findFirst({
      where: {
        habitacionId: habitacionId,
        fechaInicio: { lt: fin },
        fechaFin: { gt: inicio },
        estado: { in: ['Pendiente', 'Confirmada'] }
      },
    });

    if (reservaExistente) {
      return NextResponse.json({ error: 'Las fechas seleccionadas ya no están disponibles para esta habitación.' }, { status: 409 });
    }

    // 4. Crear la nueva reserva
    const nuevaReserva = await prisma.reserva.create({
      data: {
        usuarioId: usuarioId,
        habitacionId: habitacionId,
        fechaInicio: inicio,
        fechaFin: fin,
        numeroHuespedes: numeroHuespedes,
        estado: 'Pendiente',
      },
    });

    return NextResponse.json(nuevaReserva, { status: 201 });
  } catch (error) {
    console.error('Error al crear la reserva:', error);
    return NextResponse.json({ error: 'No se pudo crear la reserva.' }, { status: 500 });
  }
}