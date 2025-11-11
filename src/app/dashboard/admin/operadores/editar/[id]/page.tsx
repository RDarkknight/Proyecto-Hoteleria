// En: src/app/dashboard/admin/operadores/editar/[id]/page.tsx
import React from 'react';
import { prisma } from '@/lib/prisma';
import { OperadorForm } from '@/components/dashboard/OperadorForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { notFound } from 'next/navigation';
import { type Usuario } from '@prisma/client';

// 1. Obtenemos los datos del operador específico (podríamos usar la API,
//    pero para un Componente de Servidor es más rápido consultar Prisma)
async function getOperador(id: string): Promise<Partial<Usuario> | null> {
  const operadorId = parseInt(id, 10);
  if (isNaN(operadorId)) return null;

  try {
    const operador = await prisma.usuario.findUnique({
      where: { id: operadorId },
      select: {
        id: true,
        nombre: true,
        apellido: true,
        email: true,
      }
    });
    return operador;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function EditarOperadorPage({ params }: { params: { id: string } }) {
  const operador = await getOperador(params.id);

  if (!operador) {
    return notFound(); // 404
  }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-12">
      <Card className="bg-black/20 backdrop-blur-sm border-white/10 text-white">
        <CardHeader>
          <CardTitle className="font-display text-3xl">
            Editar Operador: {operador.nombre} {operador.apellido}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* 2. Renderizamos el formulario pasándole los datos iniciales */}
          <OperadorForm initialData={operador} />
        </CardContent>
      </Card>
    </div>
  );
}