// En: src/app/api/admin/metricas/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // 1. Validamos las fechas que llegan por la URL
    const dateSchema = z.coerce.date().optional();
    const from = dateSchema.parse(searchParams.get('from'));
    const to = dateSchema.parse(searchParams.get('to'));

    // 2. Creamos la "cláusula where" para las fechas
    // Si no hay fechas, se aplicará un filtro vacío (traerá todo)
    const dateFilter = (from && to) ? {
      createdAt: {
        gte: from, // gte = "mayor o igual que"
        lte: to,   // lte = "menor o igual que"
      }
    } : {};

    // 3. Ejecutamos todas las consultas de la base de datos EN PARALELO
    const [
      totalReservas,
      reservasPorEstado,
      totalConsultas,
      consultasPendientes,
      consultasPorEstado,
      totalHabitaciones,
      habitacionesPorEstadoRaw
    ] = await prisma.$transaction([
      // Métricas de Reservas
      prisma.reserva.count({ where: dateFilter }),
      prisma.reserva.groupBy({
        by: ['estado'],
        _count: { estado: true },
        where: dateFilter,
      }),

      // Métricas de Consultas
      prisma.consulta.count({ where: dateFilter }),
      prisma.consulta.count({
        where: { leido: false, ...dateFilter },
      }),
      prisma.consulta.groupBy({
        by: ['leido'],
        _count: { _all: true },
        where: dateFilter,
      }),

      // Métricas de Habitaciones (estas no suelen depender de la fecha,
      // pero las mantenemos consistentes. Podríamos quitar el dateFilter aquí si prefieres)
      prisma.habitacion.count(), 
      prisma.estadoHabitacion.findMany({
        include: {
          _count: {
            select: { habitaciones: true },
          },
        },
      }),
    ]);

    // 4. Formateamos los datos para los gráficos
    const datosGraficoReservas = reservasPorEstado.map(item => ({
      name: item.estado,
      value: item._count.estado,
    }));

    const datosGraficoConsultas = consultasPorEstado.map(item => ({
      name: item.leido ? 'Leídas' : 'Pendientes',
      value: item._count._all,
    }));

    const datosGraficoHabitaciones = habitacionesPorEstadoRaw.map(item => ({
      name: item.nombre,
      value: item._count.habitaciones,
    }));

    // 5. Devolvemos todo
    return NextResponse.json({
      totalReservas,
      totalConsultas,
      consultasPendientes,
      totalHabitaciones,
      datosGraficoReservas,
      datosGraficoConsultas,
      datosGraficoHabitaciones,
    });

  } catch (error) {
    console.error('Error al obtener métricas:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}