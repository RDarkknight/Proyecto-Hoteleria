// src/components/dashboard/GestionReservasClientLayout.tsx
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Reserva, Usuario, Habitacion } from '@prisma/client';
import { Table } from "@/components/ui/table"; // Corregida la importación
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, CheckCircle, XCircle } from 'lucide-react';
import { format } from 'date-fns';

// El tipo extendido sigue siendo válido
type ReservaCompleta = Reserva & {
  usuario: Pick<Usuario, 'nombre' | 'apellido' | 'email'>;
  habitacion: Pick<Habitacion, 'numero' | 'tipo'>;
};

interface GestionReservasClientLayoutProps {
  reservas: ReservaCompleta[];
}

const GestionReservasClientLayout: React.FC<GestionReservasClientLayoutProps> = ({ reservas: initialReservas }) => {
  const router = useRouter();
  const [reservas, setReservas] = useState(initialReservas);
  const [loading, setLoading] = useState<Record<number, boolean>>({});
  const [error, setError] = useState<string | null>(null);

  // La lógica para actualizar el estado no cambia
  const handleUpdateEstado = async (reservaId: number, nuevoEstado: 'Confirmada' | 'Rechazada') => {
    setLoading(prev => ({ ...prev, [reservaId]: true }));
    setError(null);

    try {
      const response = await fetch(`/api/reservas/${reservaId}/estado`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estado: nuevoEstado }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al actualizar la reserva');
      }
      
      // Actualizamos el estado local para reflejar el cambio en la UI inmediatamente
      setReservas(prev => prev.map(r => r.id === reservaId ? { ...r, estado: nuevoEstado } : r));
      router.refresh();

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocurrió un error inesperado');
    } finally {
      setLoading(prev => ({ ...prev, [reservaId]: false }));
    }
  };

  // La lógica para los badges de estado tampoco cambia
  const getStateBadge = (estado: string) => {
    switch (estado) {
      case 'Confirmada':
        return <Badge className="bg-green-600 text-white">Confirmada</Badge>;
      case 'Rechazada':
        return <Badge className="bg-red-600 text-white">Rechazada</Badge>;
      case 'Pendiente':
        return <Badge className="bg-yellow-500 text-black">Pendiente</Badge>;
      default:
        return <Badge variant="secondary">{estado}</Badge>;
    }
  };

  // --- REFACTORIZACIÓN A HEADERS Y ROWS ---

  // 1. Definimos los encabezados como un array de strings
  const tableHeaders = ["Cliente", "Habitación", "Fechas", "Estado", "Acciones"];

  // 2. Mapeamos las reservas a un array de arrays de React Nodes
  const tableRows = reservas.map((reserva) => [
    // Columna Cliente
    <div key={`cliente-${reserva.id}`}>
      <div>{reserva.usuario.nombre} {reserva.usuario.apellido}</div>
      <div className="text-xs text-gray-400">{reserva.usuario.email}</div>
    </div>,
    // Columna Habitación
    `Hab. N°${reserva.habitacion.numero} (${reserva.habitacion.tipo})`,
    // Columna Fechas
    `${format(new Date(reserva.fechaInicio), 'dd/MM/yyyy')} - ${format(new Date(reserva.fechaFin), 'dd/MM/yyyy')}`,
    // Columna Estado
    getStateBadge(reserva.estado),
    // Columna Acciones
    <div key={`acciones-${reserva.id}`} className="flex gap-2 justify-end">
      {reserva.estado === 'Pendiente' && (
        <>
          <Button
            size="sm"
            variant="outline"
            className="bg-green-500 hover:bg-green-600 text-white border-green-700"
            onClick={() => handleUpdateEstado(reserva.id, 'Confirmada')}
            disabled={loading[reserva.id]}
          >
            <CheckCircle className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="bg-red-500 hover:bg-red-600 text-white border-red-700"
            onClick={() => handleUpdateEstado(reserva.id, 'Rechazada')}
            disabled={loading[reserva.id]}
          >
            <XCircle className="w-4 h-4" />
          </Button>
        </>
      )}
    </div>
  ]);

  return (
    <Card className="bg-black/60 backdrop-blur-sm border-white/20 text-white">
      <CardHeader>
        <CardTitle>Gestión de Reservas</CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {/* 3. Renderizamos la tabla simple con las props correctas */}
        <Table headers={tableHeaders} rows={tableRows} />
      </CardContent>
    </Card>
  );
};

export default GestionReservasClientLayout;