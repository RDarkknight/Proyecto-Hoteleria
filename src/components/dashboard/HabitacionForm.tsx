// En: src/components/dashboard/HabitacionForm.tsx
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState, useMemo } from 'react'; // Importamos useMemo
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { EstadoHabitacion, type Habitacion, type HabitacionImagen } from '@prisma/client';
import { Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';

// Esquema Zod
const FormSchema = z.object({
  numero: z.coerce.number().int().positive(),
  piso: z.coerce.number().int().optional(),
  tipo: z.string().min(3),
  descripcion: z.string().optional(),
  capacidad: z.coerce.number().int().min(1),
  precioPorNoche: z.coerce.number().positive(),
  estadoId: z.coerce.number().int(),
  imagenes: z.string().optional(),
});

// Tipo para los datos iniciales
type HabitacionConImagenes = Habitacion & {
  imagenes: HabitacionImagen[];
};

type DialogState = { open: boolean; title: string; description: string; };

interface HabitacionFormProps {
  estados: EstadoHabitacion[]; 
  initialData?: HabitacionConImagenes; // Opcional
}

export function HabitacionForm({ estados, initialData }: HabitacionFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialogState, setDialogState] = useState<DialogState>({
    open: false,
    title: '',
    description: '',
  });

  const isEditMode = !!initialData;

  const defaultImagesString = initialData?.imagenes.map(img => img.url).join(', ') || '';

  // Usamos useMemo para el schema, como en el formulario de reserva
  const memoizedSchema = useMemo(() => FormSchema, []);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(memoizedSchema),
    defaultValues: {
      numero: initialData?.numero || 100,
      piso: initialData?.piso || 1,
      tipo: initialData?.tipo || '',
      descripcion: initialData?.descripcion || '',
      capacidad: initialData?.capacidad || 1,
      precioPorNoche: initialData?.precioPorNoche || 0,
      estadoId: initialData?.estadoId || estados.find(e => e.nombre === 'Disponible')?.id || 1,
      imagenes: defaultImagesString,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true);
    
    const url = isEditMode
      ? `/api/admin/habitaciones/${initialData.id}`
      : '/api/admin/habitaciones';
    
    const method = isEditMode ? 'PATCH' : 'POST';

    try {
      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const successTitle = isEditMode ? '¡Habitación Actualizada!' : '¡Habitación Creada!';
        const successDesc = isEditMode ? 'Los cambios se han guardado.' : 'La nueva habitación se ha guardado.';
        
        setDialogState({ open: true, title: successTitle, description: successDesc });
        
        setTimeout(() => {
          router.push('/dashboard/mapa-habitaciones');
          router.refresh();
        }, 2000);

      } else {
        const errorData = await response.json();
        setDialogState({
          open: true,
          title: isEditMode ? 'Error al Actualizar' : 'Error al Crear',
          description: errorData.error || 'No se pudo guardar la habitación.',
        });
      }
    } catch (error) {
      setDialogState({
        open: true,
        title: 'Error de Conexión',
        description: 'No se pudo conectar con el servidor.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const closeDialog = () => {
    setDialogState({ open: false, title: '', description: '' });
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          
          {/* --- AQUÍ ESTÁ EL CÓDIGO COMPLETO DE LOS CAMPOS --- */}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField control={form.control} name="numero" render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Número de Habitación</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="101" {...field} className="bg-black/30 border-white/20 text-white placeholder:text-gray-400" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="piso" render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Piso (Opcional)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="1" {...field} className="bg-black/30 border-white/20 text-white placeholder:text-gray-400" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="capacidad" render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Capacidad</FormLabel>
                <FormControl>
                  <Input type="number" min="1" {...field} className="bg-black/30 border-white/20 text-white placeholder:text-gray-400" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>

          <FormField control={form.control} name="tipo" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Tipo de Habitación</FormLabel>
              <FormControl>
                <Input placeholder="Suite Deluxe 'Colon'" {...field} className="bg-black/30 border-white/20 text-white placeholder:text-gray-400" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          
          <FormField control={form.control} name="precioPorNoche" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Precio por Noche</FormLabel>
              <FormControl>
                <Input type="number" step="0.01" placeholder="12500" {...field} className="bg-black/30 border-white/20 text-white placeholder:text-gray-400" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          
          <FormField control={form.control} name="estadoId" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Estado Inicial</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
                <FormControl>
                  <SelectTrigger className="bg-black/30 border-white/20 text-white">
                    <SelectValue placeholder="Selecciona un estado" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {estados.map(estado => (
                    <SelectItem key={estado.id} value={estado.id.toString()}>
                      {estado.nombre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="descripcion" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Descripción (Opcional)</FormLabel>
              <FormControl>
                <Textarea placeholder="Vistas al mar, cama king-size..." {...field} className="resize-none bg-black/30 border-white/20 text-white placeholder:text-gray-400" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          
          <FormField control={form.control} name="imagenes" render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Links de Imágenes</FormLabel>
              <FormControl>
                <Textarea placeholder="https://unsplash.com/foto1.jpg, https://unsplash.com/foto2.jpg" {...field} className="resize-none bg-black/30 border-white/20 text-white placeholder:text-gray-400" />
              </FormControl>
              <FormDescription className="text-white/70">
                Pega los links de las imágenes separados por coma.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )} />
          
          <Button type="submit" disabled={isSubmitting} className="w-full !mt-8">
            {isSubmitting 
              ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
              : (isEditMode ? 'Guardar Cambios' : 'Crear Habitación')
            }
          </Button>
        </form>
      </Form>

      {/* Pop-up de Diálogo */}
      <Dialog open={dialogState.open} onOpenChange={closeDialog}>
        <DialogContent className="bg-black/20 backdrop-blur-sm border-white/10 text-white">
          <DialogHeader>
            <DialogTitle className={dialogState.isError ? 'text-destructive' : 'text-primary'}>
              {dialogState.title}
            </DialogTitle>
            <DialogDescription className="text-white/70">
              {dialogState.description}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={closeDialog} className="text-white border-white/20 hover:bg-white/10 hover:text-white">
              Entendido
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}