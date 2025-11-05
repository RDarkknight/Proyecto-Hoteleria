// En: src/components/dashboard/RespuestaConsultaForm.tsx
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// CAMBIO: Importamos los componentes del Dialog
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
  respuesta: z.string().min(10, {
    message: 'La respuesta debe tener al menos 10 caracteres.',
  }),
});

// CAMBIO: Definimos un tipo para el estado del pop-up
type DialogState = {
  open: boolean;
  title: string;
  description: string;
  isError: boolean;
};

interface RespuestaFormProps {
  consultaId: number;
}

export function RespuestaConsultaForm({ consultaId }: RespuestaFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null); // Mantenemos el error inline por si acaso

  // CAMBIO: Estado para manejar el pop-up
  const [dialogState, setDialogState] = useState<DialogState>({
    open: false,
    title: '',
    description: '',
    isError: false,
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { respuesta: '' },
  });

  // CAMBIO: Actualizamos onSubmit para usar el pop-up
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch(`/api/consultas/${consultaId}/responder`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al enviar la respuesta');
      }

      // Éxito: Mostramos el pop-up de éxito
      setDialogState({
        open: true,
        title: '¡Respuesta Enviada!',
        description: 'El email ha sido enviado al cliente y la consulta se marcó como leída.',
        isError: false,
      });

    } catch (err) {
      // Error: Mostramos el pop-up de error
      setDialogState({
        open: true,
        title: 'Error al Enviar',
        description: err instanceof Error ? err.message : 'Ocurrió un error inesperado',
        isError: true,
      });
      setError(err instanceof Error ? err.message : 'Ocurrió un error inesperado');
    } finally {
      setIsSubmitting(false);
    }
  }

  // CAMBIO: Función para cerrar el pop-up y redirigir
  const closeDialogAndRedirect = () => {
    setDialogState({ open: false, title: '', description: '', isError: false });
    // Si no fue un error, redirigimos a la bandeja de entrada
    if (!dialogState.isError) {
      router.push('/dashboard/consultas');
      router.refresh();
    }
  };

  return (
    // CAMBIO: Envolvemos todo en un Fragment
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="respuesta"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white text-lg">Tu Respuesta</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Escribe tu respuesta al cliente aquí..."
                    className="resize-none bg-black/30 border-white/20 text-white placeholder:text-gray-400"
                    rows={8}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              'Enviar Respuesta'
            )}
          </Button>
        </form>
      </Form>

      {/* --- CAMBIO: AÑADIMOS EL POP-UP (DIALOG) --- */}
      <Dialog open={dialogState.open} onOpenChange={closeDialogAndRedirect}>
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
              onClick={closeDialogAndRedirect}
            >
              {dialogState.isError ? 'Cerrar' : 'Volver a la Bandeja de Entrada'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}