// En: src/app/api/metodos-pago/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const metodos = await prisma.metodoDePago.findMany({
      orderBy: { id: 'asc' },
    });
    return NextResponse.json(metodos);
  } catch (error) {
    console.error('Error al obtener métodos de pago:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}