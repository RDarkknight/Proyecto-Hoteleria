// En: src/components/dashboard/OperadoresClientLayout.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { type Usuario } from '@prisma/client';
import { Table } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';
import { PlusCircle, Edit, Trash2, Loader2, AlertCircle } from 'lucide-react';
// CAMBIO: Importamos los componentes de AlertDialog
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
import Link from 'next/link';

type OperadorData = Pick<Usuario, 'id' | 'nombre' | 'apellido' | 'email' | 'createdAt'>;

interface OperadoresClientLayoutProps {
  operadores: OperadorData[];
}

const OperadoresClientLayout: React.FC<OperadoresClientLayoutProps> = ({ operadores: initialOperadores }) => {
  const router = useRouter();
  // CAMBIO: Usamos 'useState' para la lista de operadores para poder eliminarla
  const [operadores, setOperadores] = useState(initialOperadores);
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const [error, setError] = useState<string | null>(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false); // Para cerrar los popups

  // CAMBIO: Nueva función para manejar el "Eliminar"
  const handleDelete = async (operadorId: number) => {
    setLoading(prev => ({ ...prev, [`delete-${operadorId}`]: true }));
    setError(null);
    try {
      const response = await fetch(`/api/admin/operadores/${operadorId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'No se pudo eliminar el operador.');
      }

      // Éxito: Filtramos el operador eliminado de la lista
      setOperadores(prev => prev.filter(op => op.id !== operadorId));
      setIsAlertOpen(false); // Cierra el pop-up
      router.refresh(); 

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocurrió un error inesperado');
    } finally {
      setLoading(prev => ({ ...prev, [`delete-${operadorId}`]: false }));
    }
  };


  const tableHeaders = ["Nombre", "Email", "Fecha de Creación", "Acciones"];

  const tableRows = operadores.map((op) => {
    const isDeleting = loading[`delete-${op.id}`];

    return [
      // ... (Columna Nombre, Email, Fecha - sin cambios)
      <span key={`nombre-${op.id}`} className="font-medium text-white">{op.nombre} {op.apellido}</span>,
      <span key={`email-${op.id}`} className="text-gray-300">{op.email}</span>,
      <span key={`fecha-${op.id}`} className="text-gray-300">{format(new Date(op.createdAt), 'dd/MM/yyyy')}</span>,
      
      // CAMBIO: Columna Acciones (botones activados)
      <div key={`acciones-${op.id}`} className="flex gap-2 justify-center">
        {/* Botón Editar (como lo teníamos) */}
        <Button asChild size="sm" variant="outline" className="text-gray-700 border-white/20 hover:bg-white/10 hover:text-gray-200 ">
          <Link href={`/dashboard/admin/operadores/editar/${op.id}`}>
            <Edit className="w-4 h-4" />
          </Link>
        </Button>
        
        {/* Botón Eliminar (ahora con AlertDialog) */}
        <AlertDialog open={isAlertOpen && loading[`delete-${op.id}`] ? true : undefined} onOpenChange={isAlertOpen ? () => setIsAlertOpen(false) : undefined}>
          <AlertDialogTrigger asChild>
            <Button size="sm" variant="destructive" disabled={isDeleting} className=" hover:bg-red-700/60 ">
              {isDeleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-black/60 backdrop-blur-sm border-white/20 text-white">
            <AlertDialogHeader>
              <AlertDialogTitle>¿Estás absolutamente seguro?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta acción no se puede deshacer. Se eliminará permanentemente
                la cuenta del operador **{op.nombre} {op.apellido}**.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel 
                className="text-gray-700 border-white/20 hover:bg-gray-400 hover:text-gray-200 ">
                  Cancelar
              </AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-600 hover:bg-red-700/60"
                onClick={() => handleDelete(op.id)}
                disabled={isDeleting}
              >
                {isDeleting ? 'Eliminando...' : 'Sí, eliminar'}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    ];
  });

  return (
    <Card className="bg-black/60 backdrop-blur-sm border-white/20 text-white">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Operadores Registrados</CardTitle>
        <Button className="bg-red-600 hover:bg-red-700/60" onClick={() => router.push('/dashboard/admin/operadores/crear')}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Crear Operador
        </Button>
      </CardHeader>
      <CardContent>
        {/* Alerta de error global */}
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <Table headers={tableHeaders} rows={tableRows} />
        {operadores.length === 0 && (
          <p className="text-center text-muted-foreground py-4">
            No hay operadores registrados.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default OperadoresClientLayout;