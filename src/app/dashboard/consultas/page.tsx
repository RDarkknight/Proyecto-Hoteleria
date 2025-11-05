// En: src/app/dashboard/consultas/page.tsx
import  React  from 'react';
import { prisma } from '@/lib/prisma';
import  ConsultasClientLayout  from '@/components/dashboard/ConsultasClientLayout';

async function getConsultas() {
  const consultas = await prisma.consulta.findMany({
    orderBy: {
      createdAt: 'desc', // Las más nuevas primero
    },
  });
  return consultas;
}

export default async function ConsultasPage() {
  const consultas = await getConsultas();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold font-display text-center mb-8">
        Gestión de Consultas
      </h1>
      <ConsultasClientLayout consultas={consultas} />
    </div>
  );
}