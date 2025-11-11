// En: src/app/dashboard/admin/operadores/crear/page.tsx
import React from 'react';
import { OperadorForm } from '@/components/dashboard/OperadorForm'; // Importamos el formulario
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function CrearOperadorPage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-12">
      {/* Usamos el mismo estilo "glass" para la tarjeta contenedora */}
      <Card className="bg-black/20 backdrop-blur-sm border-white/10 text-white">
        <CardHeader>
          <CardTitle className="font-display text-3xl">
            Crear Nuevo Operador
          </CardTitle>
        </CardHeader>
        <CardContent>
          <OperadorForm />
        </CardContent>
      </Card>
    </div>
  );
}