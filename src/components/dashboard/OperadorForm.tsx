// En: src/components/dashboard/OperadorForm.tsx
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState, useMemo } from 'react';
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
import { type Usuario } from '@prisma/client';

// Tipo para los datos iniciales que pasamos
type OperadorData = Partial<Usuario>; // Partial porque solo pasamos id, nombre, apellido, email

// Esquema para CREAR (contraseña obligatoria)
const CreateSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  apellido: z.string().min(2, 'El apellido debe tener al menos 2 caracteres.'),
  email: z.string().email('Email inválido.'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres.'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden.',
  path: ['confirmPassword'],
});

// Esquema para EDITAR (contraseña opcional)
const EditSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  apellido: z.string().min(2, 'El apellido debe tener al menos 2 caracteres.'),
  email: z.string().email('Email inválido.'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres.').optional().or(z.literal('')), // Opcional o vacía
  confirmPassword: z.string().optional().or(z.literal('')),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden.',
  path: ['confirmPassword'],
});

// Tipo para el estado del Pop-up
type DialogState = { open: boolean; title: string; description: string; isError: boolean; };

// Props que el componente acepta
interface OperadorFormProps {
  initialData?: OperadorData; // Los datos son opcionales
}

export function OperadorForm({ initialData }: OperadorFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [dialogState, setDialogState] = useState<DialogState>({
    open: false,
    title: '',
    description: '',
    isError: false,
  });

  // Determinamos el modo y el esquema
  const isEditMode = !!initialData;
  const FormSchema = useMemo(() => (isEditMode ? EditSchema : CreateSchema), [isEditMode]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nombre: initialData?.nombre || '',
      apellido: initialData?.apellido || '',
      email: initialData?.email || '',
      password: '',
      confirmPassword: '',
    },
  });

  // Función onSubmit que maneja POST y PATCH
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true);
    
    const url = isEditMode
      ? `/api/admin/operadores/${initialData?.id}`
      : '/api/admin/operadores';
    
    const method = isEditMode ? 'PATCH' : 'POST';

    // Si estamos editando y no se puso contraseña, no la enviamos
    const dataToSend: any = { ...data };
    if (isEditMode && !data.password) {
      delete dataToSend.password;
    }
    delete dataToSend.confirmPassword; // Nunca enviamos la confirmación

    try {
      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        setDialogState({
          open: true,
          title: isEditMode ? '¡Operador Actualizado!' : '¡Operador Creado!',
          description: 'Los datos se han guardado correctamente.',
          isError: false,
        });
        form.reset();
        setTimeout(() => {
          router.push('/dashboard/admin/operadores');
          router.refresh();
        }, 2000);
      } else {
        const errorData = await response.json();
        setDialogState({
          open: true,
          title: 'Error',
          description: errorData.error || 'No se pudo completar la operación.',
          isError: true,
        });
      }
    } catch (error) {
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

  const closeDialog = () => {
    setDialogState({ open: false, title: '', description: '', isError: false });
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          
          {/* --- CAMPOS COMPLETOS --- */}
          
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
                <Input type="email" placeholder="operador@hotel.com" {...field} className="bg-black/30 border-white/20 text-white placeholder:text-gray-400" />
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
                    placeholder={isEditMode ? '(Dejar en blanco para no cambiar)' : 'Mínimo 8 caracteres'}
                    {...field}
                    className="bg-black/30 border-white/20 text-white placeholder:text-gray-400 pr-10"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white">
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
                    placeholder="Repite la contraseña"
                    {...field}
                    className="bg-black/30 border-white/20 text-white placeholder:text-gray-400 pr-10"
                  />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white">
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          
          {/* --- FIN CAMPOS --- */}

          <Button type="submit" disabled={isSubmitting} className="w-full !mt-8">
            {isSubmitting 
              ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
              : (isEditMode ? 'Guardar Cambios' : 'Crear Cuenta de Operador')
            }
          </Button>
        </form>
      </Form>

      {/* Pop-up de Diálogo */}
      <Dialog open={dialogState.open} onOpenChange={closeDialog}>
        <DialogContent className="bg-black/20 backdrop-blur-sm border-white/10 text-green">
          <DialogHeader>
            <DialogTitle className={dialogState.isError ? 'text-destructive' : 'text-primary'}>
              {dialogState.title}
            </DialogTitle>
            <DialogDescription className="text-white/70">
              {dialogState.description}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={closeDialog} className="text-green border-white/20 hover:bg-white/10 hover:text-white">
              Entendido
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}