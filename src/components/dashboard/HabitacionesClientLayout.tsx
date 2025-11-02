"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Habitacion, EstadoHabitacion } from '@prisma/client';
import { Table } from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

type HabitacionConEstado = Habitacion & {
  estado: EstadoHabitacion;
};

interface HabitacionesClientLayoutProps {
  habitaciones: HabitacionConEstado[];
  estados: EstadoHabitacion[];
}

const HabitacionesClientLayout: React.FC<HabitacionesClientLayoutProps> = ({ habitaciones, estados }) => {
  const router = useRouter();
  const [selectedStates, setSelectedStates] = useState<Record<number, number>>({});
  const [loading, setLoading] = useState<Record<number, boolean>>({});
  const [error, setError] = useState<string | null>(null);

  const handleStateChange = (habitacionId: number, estadoId: string) => {
    setSelectedStates(prevState => ({
      ...prevState,
      [habitacionId]: parseInt(estadoId, 10),
    }));
  };

  const handleSaveChanges = async (habitacionId: number) => {
    const estadoId = selectedStates[habitacionId];
    if (!estadoId) return;

    setLoading(prev => ({ ...prev, [habitacionId]: true }));
    setError(null);

    try {
      const response = await fetch(`/api/habitaciones/${habitacionId}/estado`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ estadoId }),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el estado');
      }

      setSelectedStates(prev => {
        const newState = { ...prev };
        delete newState[habitacionId];
        return newState;
      });

      router.refresh();

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocurrió un error inesperado');
    } finally {
      setLoading(prev => ({ ...prev, [habitacionId]: false }));
    }
  };

const getStateBadge = (estadoNombre: string) => {
    switch (estadoNombre.toLowerCase()) {
      case 'disponible':
        return (
          // CAMBIO: Añadido gradiente y borde
          <Badge className="bg-gradient-to-r from-green-600 to-green-400 text-white border-green-700">
            Disponible
          </Badge>
        );
      case 'ocupada':
        return (
          // CAMBIO: Añadido gradiente y borde
          <Badge className="bg-gradient-to-r from-red-600 to-red-500 text-white border-red-700">
            Ocupada
          </Badge>
        );
      case 'mantenimiento':
        return (
          // CAMBIO: Añadido gradiente y borde
          <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-black border-yellow-500">
            Mantenimiento
          </Badge>
        );
      default:
        return <Badge variant="outline">{estadoNombre}</Badge>;
    }
  };

  const tableHeaders = ["Número", "Tipo", "Estado Actual", "Cambiar Estado", "Acciones"];

  const tableRows = habitaciones.map((habitacion) => [
    <span key={`num-${habitacion.id}`} className="font-medium text-white">{habitacion.numero}</span>,
    <span key={`tipo-${habitacion.id}`} className="text-gray-300">{habitacion.tipo}</span>,
    getStateBadge(habitacion.estado.nombre),
    <Select
      key={`select-${habitacion.id}`}
      value={selectedStates[habitacion.id]?.toString() || habitacion.estadoId.toString()}
      onValueChange={(value) => handleStateChange(habitacion.id, value)}
    >
      <SelectTrigger className="bg-gray-700 text-white border-gray-600">
        <SelectValue placeholder="Seleccionar estado" />
      </SelectTrigger>
      <SelectContent className="bg-gray-800 text-white border-gray-700">
        {estados.map((estado) => (
          <SelectItem key={estado.id} value={estado.id.toString()} className="hover:bg-gray-700">
            {estado.nombre}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>,
    <div key={`btn-div-${habitacion.id}`} className="text-right">
      <Button
        onClick={() => handleSaveChanges(habitacion.id)}
        disabled={loading[habitacion.id] || !selectedStates[habitacion.id] || selectedStates[habitacion.id] === habitacion.estadoId}
        size="sm"
      >
        {loading[habitacion.id] ? 'Guardando...' : 'Guardar'}
      </Button>
    </div>
  ]);

  return (
    <Card className="bg-black/50 backdrop-blur-sm border-white/20">
      <CardHeader>
        <CardTitle className="text-white">Gestión de Estados de Habitaciones</CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <Table headers={tableHeaders} rows={tableRows} />
      </CardContent>
    </Card>
  );
};

export default HabitacionesClientLayout;
