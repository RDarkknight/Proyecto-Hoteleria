// En: src/components/ContactForm.tsx
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // NUEVO: Para redirigir

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
// NUEVO: Importamos los componentes del Dialog
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';

// El esquema de validación no cambia
const FormSchema = z.object({
  nombre: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  mensaje: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

// NUEVO: Definimos un tipo para el estado del pop-up
type DialogState = {
  open: boolean;
  title: string;
  description: string;
  isError: boolean;
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter(); // NUEVO: Hook para la navegación

  // NUEVO: Estado para manejar el pop-up
  const [dialogState, setDialogState] = useState<DialogState>({
    open: false,
    title: '',
    description: '',
    isError: false,
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { nombre: '', email: '', mensaje: '' },
  });

  // CAMBIO: Actualizamos la función onSubmit para usar el pop-up
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Éxito: Mostramos el pop-up de éxito
        setDialogState({
          open: true,
          title: '¡Consulta Enviada!',
          description: 'Gracias por contactarnos. Te responderemos a la brevedad.',
          isError: false,
        });
        form.reset(); // Limpia el formulario
      } else {
        // Error del servidor: Mostramos el pop-up de error
        setDialogState({
          open: true,
          title: 'Error al Enviar',
          description: 'Hubo un problema al procesar tu consulta. Por favor, inténtalo de nuevo más tarde.',
          isError: true,
        });
      }
    } catch (error) {
      // Error de red: Mostramos el pop-up de error
      setDialogState({
        open: true,
        title: 'Error de Conexión',
        description: 'No se pudo conectar con el servidor. Revisa tu conexión a internet.',
        isError: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // NUEVO: Función para cerrar el pop-up
  const closeDialog = () => {
    setDialogState({ open: false, title: '', description: '', isError: false });
  };

  return (
    // Usamos un Fragment (<>) para devolver dos elementos hermanos: el Formulario y el Dialog
    <>
      {/* --- EL FORMULARIO (sin cambios en el JSX) --- */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Juan Perez" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="juan@ejemplo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mensaje"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensaje</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Escribe tu consulta aquí..."
                    className="resize-none"
                    rows={5}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
          </Button>
        </form>
      </Form>

      {/* --- NUEVO: EL POP-UP (DIALOG) --- */}
      <Dialog open={dialogState.open} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle
              // Cambia el color del título si es un error
              className={dialogState.isError ? 'text-destructive' : 'text-primary'}
            >
              {dialogState.title}
            </DialogTitle>
            <DialogDescription>
              {dialogState.description}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            {dialogState.isError ? (
              // Si es un error, solo mostramos un botón de "Cerrar"
              <Button variant="outline" onClick={closeDialog}>
                Cerrar
              </Button>
            ) : (
              // Si es éxito, mostramos el botón a la página principal
              <Button onClick={() => router.push('/home')}>
                Ir a la página principal
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}