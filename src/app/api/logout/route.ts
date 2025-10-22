// En: src/app/api/logout/route.ts

import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const response = NextResponse.json({ message: 'Sesión cerrada con éxito' });

    // La forma correcta de eliminar una cookie es establecer su 'maxAge' a un valor negativo
    response.cookies.set('auth_token', '', {
      httpOnly: true,
      path: '/',
      maxAge: -1, 
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al cerrar la sesión' },
      { status: 500 }
    );
  }
}