// En: src/components/dashboard/ConsultasClientLayout.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { type Consulta } from '@prisma/client';
import { Table } from "@/components/ui/table"; // Importamos nuestra tabla personalizada
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';
import { Mail, MailOpen } from 'lucide-react'; // Iconos para el estado

interface ConsultasClientLayoutProps {
  consultas: Consulta[];
}

const ConsultasClientLayout: React.FC<ConsultasClientLayoutProps> = ({ consultas }) => {
  const router = useRouter();

  // Función para mostrar un badge de estado (Pendiente/Leído)
  const getStatusBadge = (leido: boolean) => {
    if (leido) {
      return (
        <Badge className="bg-green-600 text-white">
          <MailOpen className="mr-2 h-4 w-4" />
          Leído
        </Badge>
      );
    }
    return (
      <Badge className="bg-yellow-500 text-black">
        <Mail className="mr-2 h-4 w-4" />
        Pendiente
      </Badge>
    );
  };

  // Definimos los encabezados de nuestra tabla
  const tableHeaders = ["Estado", "Fecha", "Cliente", "Consulta", "Acciones"];

  // Mapeamos los datos de las consultas a las filas de la tabla
  const tableRows = consultas.map((consulta) => [
    // Columna Estado (Centrada)
    <div key={`estado-${consulta.id}`} className="flex justify-center">
      {getStatusBadge(consulta.leido)}
    </div>,

    // Columna Fecha (Centrada)
    <span key={`fecha-${consulta.id}`} className="block text-center text-gray-300">
      {format(new Date(consulta.createdAt), 'dd/MM/yyyy')}
    </span>,

    // Columna Cliente (Alineada a la izquierda)
    <div key={`cliente-${consulta.id}`}>
      <div className="font-medium text-white">{consulta.nombre}</div>
      <div className="text-xs text-gray-400">{consulta.email}</div>
    </div>,

    // Columna Consulta (Alineada a la izquierda, truncada)
    <p key={`msg-${consulta.id}`} className="text-gray-300 truncate max-w-xs">
      {consulta.mensaje}
    </p>,

    // Columna Acciones (Centrada)
    <div key={`acciones-${consulta.id}`} className="flex justify-center">
      <Button
        size="sm"
        // Navega a la página de respuesta individual
        onClick={() => router.push(`/dashboard/consultas/${consulta.id}`)}
      >
        {consulta.leido ? 'Ver / Responder' : 'Responder'}
      </Button>
    </div>
  ]);

  return (
    <Card className="bg-black/60 backdrop-blur-sm border-white/20 text-white">
      <CardHeader>
        <CardTitle>Bandeja de Entrada de Consultas</CardTitle>
      </CardHeader>
      <CardContent>
        <Table headers={tableHeaders} rows={tableRows} />
        {consultas.length === 0 && (
          <p className="text-center text-muted-foreground py-4">
            No hay consultas para mostrar.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default ConsultasClientLayout;