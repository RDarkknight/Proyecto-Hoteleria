// En: src/app/dashboard/metricas/page.tsx
import React from 'react';
import { prisma } from '@/lib/prisma';
import MetricasClientLayout, { type MetricasData } from '@/components/dashboard/MetricasClientLayout';

// Función que se ejecuta en el servidor para obtener los datos


export default function MetricasPage() {
  // Esta página ya no calcula datos, solo renderiza el layout.
  // El layout (cliente) se encargará de llamar a la API.
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold font-display text-center mb-8 text-gray-900">
        Métricas del Hotel
      </h1>
      <MetricasClientLayout/>
    </div>
  );
}