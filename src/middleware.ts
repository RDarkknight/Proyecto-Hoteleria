// En: src/middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyJwt } from '@/lib/usuarios/auth'; // Asegúrate de que esta función exista y funcione
import { RolUsuario } from '@/generated/prisma/client'; // Importamos nuestros roles
import { runtime } from './app/api/profesionales/route';

// 1. Definimos las rutas y los roles que pueden acceder a ellas
const accessControlList: Record<string, RolUsuario[]> = {
  '/admin': [RolUsuario.ADMINISTRADOR],
  '/operator': [RolUsuario.OPERADOR, RolUsuario.ADMINISTRADOR],
  '/home': [RolUsuario.USUARIO, RolUsuario.OPERADOR, RolUsuario.ADMINISTRADOR],
  '/dashboard/gestion-habitaciones': [RolUsuario.OPERADOR],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authToken = request.cookies.get('auth_token')?.value;

  // Si el usuario intenta acceder a la página de login
  if (pathname.startsWith('/login')) {
    // y ya tiene un token válido, lo redirigimos a su home para evitar bucles.
    if (authToken) {
      const payload = verifyJwt<{ role: RolUsuario }>(authToken);
      if (payload) {
        return NextResponse.redirect(new URL('/home', request.url));
      }
    }
    // Si no tiene token, lo dejamos pasar al login.
    return NextResponse.next();
  }

  // Si el usuario intenta acceder a cualquier otra ruta sin un token, lo mandamos a login.
  if (!authToken) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('next', pathname); // Guardamos la página que quería visitar
    return NextResponse.redirect(loginUrl);
  }

  // Si tiene un token, lo verificamos.
  const payload = verifyJwt<{ role: RolUsuario }>(authToken);

  // Si el token es inválido o expiró, lo mandamos a login y limpiamos la cookie.
  if (!payload) {
    const loginUrl = new URL('/login', request.url);
    const response = NextResponse.redirect(loginUrl);
    response.cookies.delete('auth_token');
    return response;
  }

  // Finalmente, verificamos si el rol del usuario tiene permiso para acceder a la ruta.
  const requiredRoles = Object.entries(accessControlList).find(([path]) =>
    pathname.startsWith(path)
  );

  if (requiredRoles) {
    const [_path, allowedRoles] = requiredRoles;
    if (!allowedRoles.includes(payload.role)) {
      // Si no tiene permiso, lo redirigimos a una página por defecto (ej. su dashboard).
      return NextResponse.redirect(new URL('/home', request.url));
    }
  }

  // Si todo está en orden (token válido y rol permitido), dejamos que continúe.
  return NextResponse.next();
}

// 2. Actualizamos el 'matcher' para proteger las nuevas rutas del proyecto
export const config = {
  matcher: [
/*
    * Lista de todas las rutas que quieres PROTEGER.
    * Cualquier ruta que NO esté aquí, será PÚBLICA.
    */

    // Paneles de roles que requieren login:
    '/admin/:path*',
    '/operator/:path*',
    '/dashboard/gestion-habitaciones/:path*',

    // Futuras páginas de cliente que requieran login (ej: "Mis Reservas"):
    // '/mis-reservas/:path*',

    // Incluimos /login para poder redirigir a los usuarios que ya están logueados
    '/login',
  ],
  runtime:'nodejs',
};