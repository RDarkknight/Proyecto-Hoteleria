// En: src/app/dashboard/admin/operadores/page.tsx
import React from 'react';
import { prisma } from '@/lib/prisma';
import OperadoresClientLayout from '@/components/dashboard/OperadoresClientLayout';
import { RolUsuario } from '@prisma/client';

// Función que se ejecuta en el servidor
async function getOperadores() {
  try {
    const operadores = await prisma.usuario.findMany({
      where: {
        rol: RolUsuario.OPERADOR, // Solo traemos operadores
      },
      select: { // Seleccionamos solo los datos que necesitamos
        id: true,
        nombre: true,
        apellido: true,
        email: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return operadores;
  } catch (error) {
    console.error("Error al obtener operadores:", error);
    return [];
  }
}

export default async function OperadoresPage() {
  const operadores = await getOperadores();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold font-display text-center mb-8 text-gray-900">
        Gestión de Operadores
      </h1>
      {/* Pasamos los datos al componente cliente */}
      <OperadoresClientLayout operadores={operadores} />
    </div>
  );
}