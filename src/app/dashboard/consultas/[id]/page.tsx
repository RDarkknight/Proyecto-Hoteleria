// En: src/app/dashboard/consultas/[id]/page.tsx

import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RespuestaConsultaForm } from '@/components/dashboard/RespuestaConsultaForm'; // Importamos el formulario
import { Badge } from '@/components/ui/badge';

// 1. Función para obtener la consulta específica
async function getConsulta(id: string) {
  const consultaId = parseInt(id, 10);
  if (isNaN(consultaId)) return null;

  try {
    const consulta = await prisma.consulta.findUnique({
      where: { id: consultaId },
    });
    return consulta;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function ResponderConsultaPage({ params }: { params: { id: string } }) {
  const consulta = await getConsulta(params.id);

  if (!consulta) {
    return notFound(); // Muestra un 404 si la consulta no existe
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      {/* Tarjeta con la consulta original del cliente */}
      <Card className="mb-8 bg-black/20 backdrop-blur-sm border-white/10 text-white">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>Consulta de: {consulta.nombre}</CardTitle>
              <CardDescription className="text-white/70">
                Email: {consulta.email} | Recibido: {format(new Date(consulta.createdAt), 'dd/MM/yyyy')}
              </CardDescription>
            </div>
            {consulta.leido ? (
              <Badge className="bg-green-600">Leído</Badge>
            ) : (
              <Badge className="bg-yellow-500 text-black">Pendiente</Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{consulta.mensaje}</p>
        </CardContent>
      </Card>

      {/* Formulario para la respuesta */}
      <RespuestaConsultaForm consultaId={consulta.id} />
    </div>
  );
}