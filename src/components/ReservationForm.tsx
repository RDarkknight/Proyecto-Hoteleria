// En: src/components/ReservationForm.tsx
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

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

const FormSchema = z.object({
  dateRange: z.object({
    from: z.date({ required_error: 'La fecha de inicio es requerida.' }),
    to: z.date({ required_error: 'La fecha de fin es requerida.' }),
  }),
  numberOfGuests: z.coerce.number().min(1, 'Debe haber al menos un huésped.'),
});

export function ReservationForm({ habitacionId }: { habitacionId: number }) {
  const { session } = useAuth();
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      numberOfGuests: 1,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!session) {
      router.push(`/login?next=/habitaciones/${habitacionId}`);
      return;
    }

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
        const nuevaReserva = await response.json();
        // Redirigimos al usuario a la página de confirmación con el ID de la nueva reserva
        router.push(`/reservas/${nuevaReserva.id}`);
      } else {
        const errorData = await response.json();
        alert(`Error al reservar: ${errorData.error || 'Inténtelo de nuevo.'}`);
      }
    } catch (error) {
      console.error('Error de red:', error);
      alert('No se pudo conectar con el servidor.');
    }
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Campo de Rango de Fechas */}
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
                    disabled={{ before: new Date() }}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Campo de Número de Huéspedes */}
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

        <Button type="submit" className="w-full">
          Reservar Ahora
        </Button>
      </form>
    </Form>
  );
}