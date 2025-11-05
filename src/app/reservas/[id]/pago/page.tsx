// En: src/app/reservas/[id]/pago/page.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Landmark, CircleDollarSign } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { type MetodoDePago, type Reserva, type Habitacion } from '@prisma/client';
import { format, differenceInCalendarDays } from 'date-fns';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';

// Tipo para el pop-up (igual que en los otros formularios)
type DialogState = {
  open: boolean;
  title: string;
  description: string;
  isError: boolean;
};

// Tipo para los datos de la reserva que fetcheamos
type ReservaConHabitacion = Reserva & {
  habitacion: {
    tipo: string;
    precioPorNoche: number;
  };
};

export default function PaymentPage() {
  const { id: reservaId } = useParams();
  const router = useRouter();

  // Estados para guardar los datos de la API
  const [reserva, setReserva] = useState<ReservaConHabitacion | null>(null);
  const [metodos, setMetodos] = useState<MetodoDePago[]>([]);
  const [selectedMetodoId, setSelectedMetodoId] = useState<string>('');
  
  // Estados para la UI
  const [loading, setLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [dialogState, setDialogState] = useState<DialogState>({
    open: false,
    title: '',
    description: '',
    isError: false,
  });

  // --- 1. FETCH DE DATOS (NUEVO) ---
  useEffect(() => {
    if (!reservaId) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        // Hacemos ambas llamadas a la API al mismo tiempo
        const [reservaRes, metodosRes] = await Promise.all([
          fetch(`/api/reservas/${reservaId}`),
          fetch('/api/metodos-pago'),
        ]);

        if (!reservaRes.ok || !metodosRes.ok) {
          throw new Error('No se pudieron cargar los datos de la reserva.');
        }

        const reservaData = await reservaRes.json();
        const metodosData = await metodosRes.json();

        setReserva(reservaData);
        setMetodos(metodosData);
      } catch (error) {
        setDialogState({
          open: true,
          title: 'Error al Cargar',
          description: error instanceof Error ? error.message : 'Error desconocido.',
          isError: true,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [reservaId]);

  // --- 2. LÓGICA DE CÁLCULO (NUEVO) ---
  const calcularDetalles = () => {
    if (!reserva) return { noches: 0, montoTotal: 0, fechaInicio: '', fechaFin: '' };

    const fechaInicio = new Date(reserva.fechaInicio);
    const fechaFin = new Date(reserva.fechaFin);
    const noches = differenceInCalendarDays(fechaFin, fechaInicio);
    const montoTotal = noches * reserva.habitacion.precioPorNoche;

    return {
      noches,
      montoTotal,
      fechaInicio: format(fechaInicio, 'dd/MM/yyyy'),
      fechaFin: format(fechaFin, 'dd/MM/yyyy'),
    };
  };

  const { noches, montoTotal, fechaInicio, fechaFin } = calcularDetalles();

  // --- 3. LÓGICA DE ENVÍO (ACTUALIZADA) ---
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!reserva || !selectedMetodoId) {
      setDialogState({
        open: true,
        title: 'Acción Requerida',
        description: 'Por favor, selecciona un método de pago.',
        isError: true,
      });
      return;
    }

    setIsProcessing(true);

    try {
      const response = await fetch('/api/pagos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reservaId: reserva.id,
          monto: montoTotal,
          metodoId: parseInt(selectedMetodoId, 10), // La API espera un número
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al procesar el pago.');
      }

      // Éxito
      setDialogState({
        open: true,
        title: '¡Pago Confirmado!',
        description: 'Tu reserva ha sido confirmada con éxito. ¡Gracias!',
        isError: false,
      });

    } catch (error) {
      setDialogState({
        open: true,
        title: 'Error en el Pago',
        description: error instanceof Error ? error.message : 'Error desconocido.',
        isError: true,
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const closeDialog = () => {
    setDialogState({ ...dialogState, open: false });
    // Si no fue un error, redirige al inicio
    if (!dialogState.isError) {
      router.push('/home');
    }
  };

  if (loading) {
    return <div className="container mx-auto max-w-4xl py-12 text-center">Cargando detalles de la reserva...</div>;
  }

  if (!reserva) {
    // Este estado se alcanza si la reserva no se encontró (manejado por el dialog)
    return null;
  }

  // --- 4. RENDERIZADO DINÁMICO (ACTUALIZADO) ---
  return (
    <>
      <div className="container mx-auto max-w-4xl py-12">
        <h1 className="text-3xl font-bold mb-8 text-center font-display">Confirmar y Pagar</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Columna de Resumen de Reserva */}
          <div>
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Resumen de tu Reserva</CardTitle>
                <CardDescription>Habitación: {reserva.habitacion.tipo}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Check-in</span>
                  <span>{fechaInicio}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Check-out</span>
                  <span>{fechaFin}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total ({noches} {noches === 1 ? 'noche' : 'noches'})</span>
                  <span>${montoTotal}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Columna de Formulario de Pago */}
          <div>
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Método de Pago</CardTitle>
                <CardDescription>Selecciona cómo te gustaría pagar.</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent>
                  <RadioGroup
                    defaultValue={selectedMetodoId}
                    onValueChange={setSelectedMetodoId}
                    className="space-y-4"
                  >
                    {/* Renderizamos los métodos desde la API */}
                    {metodos.map((metodo) => (
                      <Label
                        key={metodo.id}
                        htmlFor={metodo.nombre}
                        className="flex items-center gap-4 rounded-lg border p-4 cursor-pointer hover:bg-accent has-[input:checked]:border-primary"
                      >
                        {/* Pequeña lógica para mostrar el ícono correcto */}
                        {metodo.nombre.toLowerCase().includes('tarjeta') && <CreditCard className="h-6 w-6" />}
                        {metodo.nombre.toLowerCase().includes('transferencia') && <Landmark className="h-6 w-6" />}
                        {metodo.nombre.toLowerCase().includes('efectivo') && <CircleDollarSign className="h-6 w-6" />}
                        
                        <div className="flex-1">
                          <p className="font-semibold">{metodo.nombre}</p>
                        </div>
                        <RadioGroupItem value={metodo.id.toString()} id={metodo.nombre} />
                      </Label>
                    ))}
                  </RadioGroup>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full text-lg" disabled={isProcessing}>
                    {isProcessing ? 'Procesando...' : 'Pagar y Confirmar Reserva'}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* --- 5. POP-UP (NUEVO) --- */}
      <Dialog open={dialogState.open} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle
              className={dialogState.isError ? 'text-destructive' : 'text-primary'}
            >
              {dialogState.title}
            </DialogTitle>
            <DialogDescription>
              {dialogState.description}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button 
              variant={dialogState.isError ? 'outline' : 'default'}
              onClick={closeDialog}
            >
              {dialogState.isError ? 'Cerrar' : 'Volver al Inicio'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}