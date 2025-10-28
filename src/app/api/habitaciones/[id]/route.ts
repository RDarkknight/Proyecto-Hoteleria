import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
  
    export async function GET(
      request: Request,
      { params }: { params: { id: string } }
    ) {
      try {
        const roomId = parseInt(params.id, 10);

        if (isNaN(roomId)) {
          return NextResponse.json(
            { error: 'El ID de la habitación debe ser un número.' },
            { status: 400 }
          );
        }

        const habitacion = await prisma.habitacion.findUnique({
          where: {
            id: roomId,
          },
          include: {
            servicios: {
              include: {
                servicio: true,
              },
            },
          
          },
        });

        if (!habitacion) {
          return NextResponse.json(
            { error: 'Habitación no encontrada.' },
            { status: 404 }
          );
        }

        return NextResponse.json(habitacion);
      } catch (error) {
        console.error('Error al obtener la habitación:', error);
        return NextResponse.json(
          { error: 'No se pudo obtener la información de la habitación.' },
          { status: 500 }
        );
      }
    }