// En: src/app/api/habitaciones/route.ts

import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Asegúrate de que la ruta a tu cliente de Prisma sea correcta

export async function GET() {
  try {
    // Consultamos la base de datos para obtener todas las habitaciones
    const habitaciones = await prisma.habitacion.findMany({
      include: {
          servicios: { include: { servicio: true } },
          imagenes: { take: 1 } // <-- CONFIRMAR ESTO
        },
        orderBy: { numero: 'asc' },
    });

    return NextResponse.json(habitaciones);
  } catch (error) {
    console.error('Error al obtener las habitaciones:', error);
    return NextResponse.json(
      { error: 'No se pudo obtener la información de las habitaciones.' },
      { status: 500 }
    );
  }
}