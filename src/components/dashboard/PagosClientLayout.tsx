// En: src/components/dashboard/PagosClientLayout.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { type Pago, type Reserva, type Habitacion, type MetodoDePago, type Usuario } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, AlertCircle, Loader2, XCircle } from 'lucide-react'; // Importamos XCircle

// ... (El tipo PagoPendiente sigue igual)
type PagoPendiente = Pago & {
  metodoDePago: MetodoDePago;
  reserva: Reserva & {
    usuario: Pick<Usuario, 'nombre' | 'apellido' | 'email'>;
    habitacion: Pick<Habitacion, 'tipo' | 'numero'>;
  };
};

interface PagosClientLayoutProps {
  pagosIniciales: PagoPendiente[];
}

export function PagosClientLayout({ pagosIniciales }: PagosClientLayoutProps) {
  const router = useRouter();
  const [pagos, setPagos] = useState(pagosIniciales);
  const [loading, setLoading] = useState<Record<string, boolean>>({}); // 'string' para claves compuestas
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleAction = async (pagoId: number, action: 'aprobar' | 'rechazar') => {
    const loadingKey = `${pagoId}-${action}`;
    setLoading(prev => ({ ...prev, [loadingKey]: true }));
    setError(null);
    setSuccess(null);

    const url = (action === 'aprobar')
      ? `/api/pagos/${pagoId}/procesar`
      : `/api/pagos/${pagoId}/rechazar`;

    try {
      const response = await fetch(url, {
        method: 'PUT',
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || `Error al ${action} el pago`);
      }

      setSuccess(`Pago #${pagoId} ${action === 'aprobar' ? 'procesado' : 'rechazado'} con éxito.`);
      setPagos(prevPagos => prevPagos.filter(p => p.id !== pagoId));
      router.refresh();

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocurrió un error inesperado');
    } finally {
      setLoading(prev => ({ ...prev, [loadingKey]: false }));
    }
  };

  return (
    <div>
      {/* Alertas de Éxito/Error (sin cambios) */}
      {error && ( <Alert variant="destructive" className="mb-4"> ... </Alert> )}
      {success && ( <Alert className="mb-4 border-green-500 text-green-700"> ... </Alert> )}

      {/* Lista de Pagos Pendientes */}
      <div className="space-y-6">
        {pagos.length === 0 ? (
          <p className="text-center text-muted-foreground">No hay pagos pendientes por procesar.</p>
        ) : (
          pagos.map(pago => {
            const isApproving = loading[`${pago.id}-aprobar`];
            const isRejecting = loading[`${pago.id}-rechazar`];
            const isBusy = isApproving || isRejecting;

            return (
              // --- CAMBIO DE ESTILO AQUÍ ---
              // Reemplazamos 'bg-white/80' por el estilo de vidrio polarizado
              <Card key={pago.id} className="bg-black/40 backdrop-blur-sm border-white/10 text-white">
                <CardHeader>
                  <CardTitle>Pago #${pago.id} - ${pago.monto}</CardTitle>
                  <CardDescription className="text-gray-300">
                    Cliente: {pago.reserva.usuario.nombre} {pago.reserva.usuario.apellido} ({pago.reserva.usuario.email})
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold">Reserva</h4>
                    <p className="text-gray-300">Habitación: {pago.reserva.habitacion.numero} ({pago.reserva.habitacion.tipo})</p>
                    <p className="text-gray-300">Fechas: {new Date(pago.reserva.fechaInicio).toLocaleDateString()} - {new Date(pago.reserva.fechaFin).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Detalles del Pago</h4>
                    <p className="text-gray-300">Método: {pago.metodoDePago.nombre}</p>
                    <p className="text-gray-300">Estado: <Badge variant="outline">{pago.estado}</Badge></p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Reserva</h4>
                    <p>Estado: <Badge variant="destructive">{pago.reserva.estado}</Badge></p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  {/* --- NUEVO BOTÓN DE RECHAZAR --- */}
                  <Button
                    variant="destructive"
                    onClick={() => handleAction(pago.id, 'rechazar')}
                    disabled={isBusy}
                  >
                    {isRejecting ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <XCircle className="mr-2 h-4 w-4" />
                    )}
                    Rechazar
                  </Button>
                  
                  {/* Botón de Aprobar modificado */}
                  <Button
                    onClick={() => handleAction(pago.id, 'aprobar')}
                    disabled={isBusy}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    {isApproving ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <CheckCircle className="mr-2 h-4 w-4" />
                    )}
                    Aprobar
                  </Button>
                </CardFooter>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
}