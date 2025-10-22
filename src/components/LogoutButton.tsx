// En: src/components/LogoutButton.tsx
'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const response = await fetch('/api/logout', {
      method: 'POST',
    });

    if (response.ok) {
      // Redirigir al usuario a la página de inicio o login
      router.push('/login');
      router.refresh(); // Refresca la página para actualizar el estado del Header
    } else {
      alert('Error al cerrar la sesión.');
    }
  };

  return (
    <Button variant="outline" onClick={handleLogout}>
      Cerrar Sesión
    </Button>
  );
}