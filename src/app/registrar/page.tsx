// En: src/app/registrar/page.tsx
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
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
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';

// 1. Definimos el esquema de validación (incluyendo confirmación de contraseña)
const FormSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  apellido: z.string().min(2, 'El apellido debe tener al menos 2 caracteres.'),
  email: z.string().email('Email inválido.'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres.'),
  confirmPassword: z.string(),
})
// 2. Comparamos que las contraseñas coincidan
.refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden.',
  path: ['confirmPassword'], // Error se mostrará en el campo de confirmación
});

// Definimos un tipo para el estado del pop-up
type DialogState = {
  open: boolean;
  title: string;
  description: string;
  isError: boolean;
};

export default function RegistrarPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Estado para manejar el pop-up
  const [dialogState, setDialogState] = useState<DialogState>({
    open: false,
    title: '',
    description: '',
    isError: false,
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { nombre: '', apellido: '', email: '', password: '', confirmPassword: '' },
  });

  // 3. Función de envío (por ahora solo muestra un error)
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true);

    try {
      // No necesitamos enviar 'confirmPassword' a la API, solo los datos del usuario
      const { confirmPassword, ...userData } = data;

      const response = await fetch('/api/registrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData), // Enviamos los datos limpios
      });

      if (response.ok) {
        // Éxito: Mostramos el pop-up de éxito
        setDialogState({
          open: true,
          title: '¡Registro Exitoso!',
          description: 'Tu cuenta ha sido creada. Ahora serás redirigido para iniciar sesión.',
          isError: false,
        });
        form.reset();
        // Redirigimos al login después de 3 segundos
        setTimeout(() => {
          router.push('/login');
        }, 3000);

      } else {
        // Error del servidor (ej: email duplicado)
        const errorData = await response.json();
        setDialogState({
          open: true,
          title: 'Error en el Registro',
          description: errorData.error || 'No se pudo completar el registro.',
          isError: true,
        });
      }
    } catch (error) {
      // Error de red
      setDialogState({
        open: true,
        title: 'Error de Conexión',
        description: 'No se pudo conectar con el servidor.',
        isError: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // Función para cerrar el pop-up
  const closeDialog = () => {
    setDialogState({ open: false, title: '', description: '', isError: false });
  };

  return (
    <>
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-12">
        {/* Usamos el mismo estilo "glass" del formulario de contacto */}
        <div className="w-full max-w-lg rounded-lg border border-white/10 bg-black/20 p-8 shadow-lg backdrop-blur-sm">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold font-display text-primary">Crear Cuenta</h1>
            <p className="mt-2 text-white/70">
              Únete al Colon Hotel.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField control={form.control} name="nombre" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Juan" {...field} className="bg-black/30 border-white/20 text-white placeholder:text-gray-400" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="apellido" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Apellido</FormLabel>
                    <FormControl>
                      <Input placeholder="Perez" {...field} className="bg-black/30 border-white/20 text-white placeholder:text-gray-400" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="juan@ejemplo.com" {...field} className="bg-black/30 border-white/20 text-white placeholder:text-gray-400" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="password" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Contraseña</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Mínimo 8 caracteres"
                        {...field}
                        className="bg-black/30 border-white/20 text-white placeholder:text-gray-400 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="confirmPassword" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Confirmar Contraseña</FormLabel>
                  <FormControl>
                     <div className="relative">
                      <Input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Repite tu contraseña"
                        {...field}
                        className="bg-black/30 border-white/20 text-white placeholder:text-gray-400 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <Button type="submit" disabled={isSubmitting} className="w-full !mt-8">
                {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Registrarme'}
              </Button>
            </form>
          </Form>

          <div className="text-center mt-6">
            <p className="text-sm text-white/70">
              ¿Ya tienes una cuenta?{' '}
              <Link href="/login" className="font-medium text-primary hover:underline">
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Pop-up de Diálogo */}
      <Dialog open={dialogState.open} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className={dialogState.isError ? 'text-destructive' : 'text-primary'}>
              {dialogState.title}
            </DialogTitle>
            <DialogDescription>
              {dialogState.description}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={closeDialog}>
              Cerrar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}