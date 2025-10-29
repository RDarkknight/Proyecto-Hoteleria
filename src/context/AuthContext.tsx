// src/context/AuthContext.tsx
'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

// Tipos que ya teníamos, los mantenemos consistentes
export type Role = 'USUARIO' | 'OPERADOR' | 'ADMINISTRADOR';
export type Session = { nombre: string; role: Role; email: string };

// 1. Definimos la "forma" de nuestro contexto
interface AuthContextType {
  session: Session | null;
  loading: boolean;
  login: (sessionData: Session) => void;
  logout: () => void;
  refresh: () => void;
  isRecepcionista: boolean;
  isMedico: boolean;
  isGerente: boolean;
}

// 2. Creamos el Contexto con un valor por defecto (que no se usará directamente)
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 3. Creamos el Proveedor del Contexto (el componente que "envuelve" la app)
export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  // Función para obtener los datos del usuario desde la API
  const fetchMe = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/yo', { method: 'POST' });
      if (res.ok) {
        const data = await res.json();
        if (data && !data.error) {
          setSession({
            nombre: String(data.nombre),
            role: data.role as Role,
            email: String(data.email),
          });
        } else {
          setSession(null);
        }
      } else {
        setSession(null);
      }
    } catch {
      setSession(null);
    } finally {
      setLoading(false);
    }
  }, []);

  // La primera vez que se carga la app, intentamos obtener la sesión
  useEffect(() => {
    fetchMe();
  }, [fetchMe]);

  // Función para que la página de Login actualice el estado
  const login = (sessionData: Session) => {
    setSession(sessionData);
  };

  // Función para cerrar sesión y limpiar el estado
  const logout = useCallback(async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
    } catch {
      // Ignoramos errores, el resultado final es el mismo
    } finally {
      setSession(null);
    }
  }, []);

  // Helpers de rol para la UI
  const isRecepcionista = session?.role === 'OPERADOR';
  const isMedico = session?.role === 'USUARIO'; // Ajustado a los roles del schema
  const isGerente = session?.role === 'ADMINISTRADOR';

  // El "valor" que todos los componentes hijos podrán consumir
  const value = {
    session,
    loading,
    login,
    logout,
    refresh: fetchMe,
    isRecepcionista,
    isMedico,
    isGerente,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 4. Modificamos el hook `useAuth` para que consuma nuestro nuevo Contexto
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
}
