// En: src/app/operador/pagos/page.tsx

import { prisma } from '@/lib/prisma';
import { EstadoPago } from '@prisma/client';
import { PagosClientLayout } from '@/components/dashboard/PagosClientLayout'; // Crearemos este componente a continuación

// 1. Esta función se ejecuta en el servidor para obtener los datos
async function getPagosPendientes() {
  try {
    const pagos = await prisma.pago.findMany({
      where: {
        estado: EstadoPago.PENDIENTE, // Solo traemos los pendientes
      },
      include: {
        // Incluimos la reserva y el método para mostrar más detalles
        reserva: {
          include: {
            usuario: {
              select: { nombre: true, apellido: true, email: true },
            },
            habitacion: {
              select: { tipo: true, numero: true },
            },
          },
        },
        metodoDePago: true,
      },
      orderBy: {
        createdAt: 'asc', // Mostramos los más antiguos primero
      },
    });
    return pagos;
  } catch (error) {
    console.error("Error al obtener pagos pendientes:", error);
    return []; // Devolvemos un array vacío si hay un error
  }
}

// 2. Este es el componente de la página
export default async function PagosPendientesPage() {
  const pagos = await getPagosPendientes();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold font-display">Procesar Pagos Pendientes</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Aquí puedes aprobar los pagos y confirmar las reservas de los clientes.
        </p>
      </div>

      {/* 3. Pasamos los datos al componente cliente que manejará la interacción */}
      <PagosClientLayout pagosIniciales={pagos} />
    </div>
  );
}