// En: src/components/dashboard/MapaHabitacionesLayout.tsx
'use client';

import React, { useState } from 'react';
import { type HabitacionConEstado } from '@/app/dashboard/mapa-habitaciones/page';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlusCircle, Edit, Trash2, Loader2, AlertCircle } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { RolUsuario } from '@prisma/client';
import { useRouter } from 'next/navigation'; // <-- 1. Importamos useRouter

// 2. Importamos los componentes de Pop-up que instalamos
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface MapaHabitacionesLayoutProps {
  habitaciones: HabitacionConEstado[];
}

const MapaHabitacionesLayout: React.FC<MapaHabitacionesLayoutProps> = ({ habitaciones: initialHabitaciones }) => {
  const { session } = useAuth();
  const router = useRouter(); // Para refrescar la página
  
  // 3. Estados para manejar la UI
  const [habitaciones, setHabitaciones] = useState(initialHabitaciones);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const esAdmin = session?.role === RolUsuario.ADMINISTRADOR;

  const getStateClasses = (estadoNombre: string): string => {
    // ... (tu función getStateClasses no cambia)
    switch (estadoNombre.toLowerCase()) {
      case 'disponible': return 'bg-green-100 border-green-500 text-green-800 hover:bg-green-200';
      case 'ocupada': return 'bg-red-100 border-red-500 text-red-800 hover:bg-red-200';
      case 'mantenimiento': return 'bg-yellow-100 border-yellow-500 text-yellow-800 hover:bg-yellow-200';
      default: return 'bg-gray-100 border-gray-400 text-gray-800 hover:bg-gray-200';
    }
  };

  // 4. Nueva función para manejar el "Eliminar"
  const handleDelete = async (habitacionId: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/admin/habitaciones/${habitacionId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'No se pudo eliminar la habitación.');
      }

      // Éxito: Filtramos la habitación eliminada de la lista
      setHabitaciones(prev => prev.filter(h => h.id !== habitacionId));
      router.refresh(); // Refresca los datos del servidor

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocurrió un error inesperado');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {esAdmin && (
        <div className="mb-6 flex justify-center">
          <Button className="bg-red-600 hover:bg-red-700/60" asChild>
            <Link href="/dashboard/admin/habitaciones/crear">
              <PlusCircle className="mr-2 h-4 w-4" />
              Crear Nueva Habitación
            </Link>
          </Button>
        </div>
      )}

      {/* Alerta de error global */}
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-4">
        {habitaciones.map((habitacion) => (
          // 5. Envolvemos la "cajita" en el DialogTrigger
          <Dialog key={habitacion.id}>
            <DialogTrigger asChild>
              <div
                // Hacemos que la cajita sea clickeable
                className={`
                  p-4 rounded-lg border-2 shadow-sm
                  flex flex-col justify-center items-center 
                  transition-all cursor-pointer ${esAdmin ? 'hover:scale-105 hover:shadow-md' : 'cursor-default'}
                  ${getStateClasses(habitacion.estado.nombre)}
                `}
              >
                <span className="text-xl font-bold">{habitacion.numero}</span>
                <span className="text-xs text-center">{habitacion.tipo}</span>
              </div>
            </DialogTrigger>

            {/* 6. Contenido del Pop-up (solo se renderiza si es Admin) */}
            {esAdmin && (
              <DialogContent className="bg-black/20 backdrop-blur-sm border-white/10 text-white">
                <DialogHeader>
                  <DialogTitle>Acciones para Habitación {habitacion.numero}</DialogTitle>
                  <DialogDescription>
                    ¿Qué deseas hacer con la habitación "{habitacion.tipo}"?
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col space-y-4 py-4">
                  {/* Botón 1: Modificar (enlaza a la página de edición) */}
                  <Button asChild>
                    <Link href={`/dashboard/admin/habitaciones/editar/${habitacion.id}`}>
                      <Edit className="mr-2 h-4 w-4" /> Modificar
                    </Link>
                  </Button>
                  
                  {/* Botón 2: Eliminar (abre el 2do pop-up de confirmación) */}
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" disabled={loading}>
                        <Trash2 className="mr-2 h-4 w-4" />
                        Eliminar Habitación
                      </Button>
                    </AlertDialogTrigger>
                    {/* Contenido del Pop-up de Confirmación */}
                    <AlertDialogContent className="bg-black/20 backdrop-blur-sm border-white/10 text-white">
                      <AlertDialogHeader>
                        <AlertDialogTitle>¿Estás absolutamente seguro?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Esta acción no se puede deshacer. Se eliminará permanentemente
                          la habitación {habitacion.numero} de la base de datos.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="bg-gray-600 hover:bg-red-700">Cancelar</AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-red-600 hover:bg-red-700"
                          onClick={() => handleDelete(habitacion.id)}
                          disabled={loading}
                        >
                          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Sí, eliminar'}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </DialogContent>
            )}
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default MapaHabitacionesLayout;