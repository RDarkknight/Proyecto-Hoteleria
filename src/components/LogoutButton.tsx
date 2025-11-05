// En: src/components/LogoutButton.tsx
'use client';

import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
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
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function LogoutButton() {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    // Llama a tu API de logout
    await fetch('/api/logout', {
      method: 'POST',
    });

    setShowLogoutConfirm(false);
    router.push('/login');
    router.refresh();
  };

  return (
    <AlertDialog open={showLogoutConfirm} onOpenChange={setShowLogoutConfirm}>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white/80 hover:bg-red-500/20 hover:text-red-400">
          <LogOut className="h-5 w-5" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción cerrará tu sesión actual.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleLogout} className="bg-red-600 hover:bg-red-700">
            Cerrar Sesión
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}