// En: src/components/ReservationForm.tsx
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useMemo, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // <-- 2. IMPORTAMOS useRouter
import { type DateRange } from 'react-day-picker';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';

// 3. IMPORTAMOS LOS COMPONENTES DEL DIALOG (POP-UP)
export function ReservationForm({
  habitacionId,
  capacidadMaxima,
}: {
  habitacionId: number;
  capacidadMaxima: number;
}) {
  const router = useRouter(); // Hook para la navegación
  const [isSubmitting, setIsSubmitting] = useState(false); // NUEVO: Estado para el botón de carga
  const [bookedDates, setBookedDates] = useState<DateRange[]>([]);

  
  // El esquema de validación con useMemo (esto ya estaba bien)
  const FormSchema = useMemo(
    () =>
      z.object({
        dateRange: z.object({
          from: z.date({ required_error: 'La fecha de inicio es requerida.' }),
          to: z.date({ required_error: 'La fecha de fin es requerida.' }),
        }),
        numberOfGuests: z.coerce
          .number()
          .min(1, 'Debe haber al menos un huésped.')
          .max(
            capacidadMaxima,
            `La capacidad máxima de esta habitación es ${capacidadMaxima}.`
          ),
      }),
    [capacidadMaxima]
  );

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      numberOfGuests: 1,
    },
  });

  useEffect(() => {
    async function fetchBookedDates() {
      try {
        const response = await fetch(`/api/habitaciones/${habitacionId}/reservas`);
        if (!response.ok) return;

        const data: { fechaInicio: string; fechaFin: string }[] = await response.json();
        
        // Convertimos las fechas de texto (JSON) a objetos Date
        const dateRanges = data.map((reserva) => ({
          from: new Date(reserva.fechaInicio),
          to: new Date(reserva.fechaFin),
        }));
        
        setBookedDates(dateRanges);
      } catch (error) {
        console.error("Error al buscar fechas reservadas:", error);
      }
    }

    fetchBookedDates();
  }, [habitacionId]); // Se ejecuta cada vez que el ID de la habitación cambie

  // 6. ACTUALIZAMOS onSubmit PARA USAR EL POP-UP (NO MÁS 'alert()')
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/reservas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          habitacionId: habitacionId,
          fechaInicio: data.dateRange.from,
          fechaFin: data.dateRange.to,
          numeroHuespedes: data.numberOfGuests,
        }),
      });

      if (response.ok) {
        const reservaCreada = await response.json();
        // Redireccionar a la página de pago con el ID de la reserva
        router.push(`/reservas/${reservaCreada.id}/pago`);
      } else {
        const errorData = await response.json();
        console.error("Error al crear la reserva:", errorData.error);
        // Opcional: Mostrar un toast/notificación de error al usuario
      }
    } catch (error) {
      console.error('Error de red al crear la reserva:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* ... (Campo de Rango de Fechas, sin cambios) ... */}
        <FormField
          control={form.control}
          name="dateRange"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Fechas de Estadía</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full pl-3 text-left font-normal',
                        !field.value?.from && 'text-muted-foreground'
                      )}
                    >
                      {field.value?.from ? (
                        field.value.to ? (
                          <>
                            {format(field.value.from, 'LLL dd, y')} -{' '}
                            {format(field.value.to, 'LLL dd, y')}
                          </>
                        ) : (
                          format(field.value.from, 'LLL dd, y')
                        )
                      ) : (
                        <span>Selecciona un rango de fechas</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={field.value?.from}
                    selected={field.value}
                    onSelect={field.onChange}
                    numberOfMonths={1}
                    disabled={[
                    { before: new Date() }, // Regla 1: Deshabilitar fechas pasadas
                    ...bookedDates          // Regla 2: Deshabilitar los rangos que fetcheamos
                  ]}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ... (Campo de Número de Huéspedes, sin cambios) ... */}
        <FormField
          control={form.control}
          name="numberOfGuests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número de Huéspedes</FormLabel>
              <FormControl>
                <Input type="number" min="1" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? 'Procesando...' : 'Continuar al Pago'}
        </Button>
      </form>
    </Form>
  );
}