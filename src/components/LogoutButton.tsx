// En: src/components/LogoutButton.tsx
'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext'; // 1. Importamos useAuth

export function LogoutButton() {
  const router = useRouter();
  const { logout } = useAuth(); // 2. Obtenemos la función logout del contexto

  const handleLogout = async () => {
    // 3. Llamamos a la función del contexto.
    // Esta se encarga de la API y de limpiar el estado local.
    await logout(); 
    
    // 4. Redirigimos al usuario
    router.push('/login');
    // Ya no necesitamos router.refresh()
  };

  return (
    <Button variant="outline" onClick={handleLogout}>
      Cerrar Sesión
    </Button>
  );
}