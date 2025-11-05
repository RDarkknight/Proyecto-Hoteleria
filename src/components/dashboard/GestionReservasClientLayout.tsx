// En: src/components/dashboard/GestionReservasClientLayout.tsx
"use client";

import React, { useState } from 'react';
import { Reserva, Usuario, Habitacion } from '@prisma/client';
import { Table } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';

// CAMBIO: Importamos el tipo 'ReservaCompleta' que definimos en la página
import { type ReservaCompleta } from '@/app/dashboard/gestion-reservas/page';

interface GestionReservasClientLayoutProps {
  reservas: ReservaCompleta[];
}

const GestionReservasClientLayout: React.FC<GestionReservasClientLayoutProps> = ({ reservas: initialReservas }) => {
  const [reservas, setReservas] = useState(initialReservas);

  // CAMBIO: Eliminamos los 'useState' de loading y error
  // CAMBIO: Eliminamos la función 'handleUpdateEstado'

  // La lógica para los badges de estado (la dejaremos, pero ya no usamos todos)
  const getStateBadge = (estado: string) => {
    switch (estado) {
      case 'CONFIRMADA':
        return <Badge className="bg-green-600 text-white">Confirmada</Badge>;
      case 'CANCELADA':
        return <Badge className="bg-red-600 text-white">Cancelada</Badge>;
      case 'PENDIENTE':
        return <Badge className="bg-yellow-500 text-black">Pendiente</Badge>;
      default:
        return <Badge variant="secondary">{estado}</Badge>;
    }
  };

  // Badge para el ESTADO DE PAGO (copiado de PagosClientLayout)
  const getPagoStateBadge = (estado?: string) => {
    if (!estado) return <Badge variant="outline">Sin Pago</Badge>;
    switch (estado) {
      case 'COMPLETADO':
        return <Badge className="bg-blue-500 text-white">Completado</Badge>;
      case 'FALLIDO':
        return <Badge variant="destructive">Fallido</Badge>;
      case 'PENDIENTE':
        return <Badge className="bg-yellow-500 text-black">Pendiente</Badge>;
      default:
        return <Badge variant="secondary">{estado}</Badge>;
    }
  };

  // CAMBIO: Actualizamos los encabezados
  const tableHeaders = ["Cliente", "Habitación", "Fechas", "Estado Reserva", "Estado Pago"];

  // CAMBIO: Actualizamos las filas
  const tableRows = reservas.map((reserva) => {
    // Obtenemos el pago más reciente (o undefined si no hay)
    const pagoReciente = reserva.pagos[0];

    return [
      // Columna Cliente
      <div key={`cliente-${reserva.id}`}>
        <div>{reserva.usuario.nombre} {reserva.usuario.apellido}</div>
        <div className="text-xs text-gray-400">{reserva.usuario.email}</div>
      </div>,
      // Columna Habitación
      `Hab. N°${reserva.habitacion.numero} (${reserva.habitacion.tipo})`,
      // Columna Fechas
      `${format(new Date(reserva.fechaInicio), 'dd/MM/yyyy')} - ${format(new Date(reserva.fechaFin), 'dd/MM/yyyy')}`,
      // Columna Estado Reserva
      getStateBadge(reserva.estado),
      // Columna Estado Pago (la que ya teníamos)
      getPagoStateBadge(pagoReciente?.estado),
      // CAMBIO: Columna "Acciones" eliminada
    ];
  });


  return (
    <Card className="bg-black/60 backdrop-blur-sm border-white/20 text-white">
      <CardHeader>
        <CardTitle>Gestión de Reservas</CardTitle>
      </CardHeader>
      <CardContent>
        {/* CAMBIO: Eliminada la alerta de error */}
        <Table headers={tableHeaders} rows={tableRows} />
      </CardContent>
    </Card>
  );
};

export default GestionReservasClientLayout;