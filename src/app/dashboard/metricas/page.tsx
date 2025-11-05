// En: src/app/dashboard/metricas/page.tsx
import React from 'react';
import { prisma } from '@/lib/prisma';
import MetricasClientLayout from '@/components/dashboard/MetricasClientLayout';

// Función que se ejecuta en el servidor para obtener los datos
async function getDatosMetricas() {
  // 1. Métricas de Reservas
  const totalReservas = await prisma.reserva.count();
  const reservasPorEstado = await prisma.reserva.groupBy({
    by: ['estado'],
    _count: { estado: true },
  });
  const datosGraficoReservas = reservasPorEstado.map(item => ({
    name: item.estado,
    value: item._count.estado,
  }));

  // 2. Métricas de Consultas (con datos para el nuevo gráfico)
  const totalConsultas = await prisma.consulta.count();
  const consultasPendientes = await prisma.consulta.count({
    where: { leido: false },
  });
  const consultasPorEstado = await prisma.consulta.groupBy({
    by: ['leido'],
    _count: { _all: true },
  });
  const datosGraficoConsultas = consultasPorEstado.map(item => ({
    name: item.leido ? 'Leídas' : 'Pendientes',
    value: item._count._all,
  }));

  // 3. Métricas de Habitaciones (con datos para el nuevo gráfico)
  const totalHabitaciones = await prisma.habitacion.count();
  // Esta consulta es más eficiente: trae los estados y cuenta las habitaciones relacionadas
  const habitacionesPorEstadoRaw = await prisma.estadoHabitacion.findMany({
    include: {
      _count: {
        select: { habitaciones: true },
      },
    },
  });
  const datosGraficoHabitaciones = habitacionesPorEstadoRaw.map(item => ({
    name: item.nombre,
    value: item._count.habitaciones,
  }));

  // Devolvemos todos los datos
  return { 
    totalReservas, 
    totalConsultas, 
    consultasPendientes, 
    totalHabitaciones, 
    datosGraficoReservas,
    datosGraficoConsultas,
    datosGraficoHabitaciones,
  };
}

export default async function MetricasPage() {
  const metricas = await getDatosMetricas();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold font-display text-center mb-8 text-gray-900">
        Métricas del Hotel
      </h1>
      {/* Pasamos todas las métricas al componente cliente */}
      <MetricasClientLayout {...metricas} />
    </div>
  );
}