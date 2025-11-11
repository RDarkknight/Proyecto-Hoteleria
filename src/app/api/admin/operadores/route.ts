// En: src/app/api/admin/operadores/route.ts

import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { verifyJwt } from '@/lib/usuarios/auth';
import { RolUsuario } from '@prisma/client';
import { cookies } from 'next/headers';
import bcrypt from 'bcrypt';

// Esquema de validación para los datos del nuevo operador
const OperadorSchema = z.object({
  nombre: z.string().min(2),
  apellido: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
});

export async function POST(request: Request) {
  try {
    // 1. Verificación de Seguridad: ¿Es un Administrador?
    const token = cookies().get('auth_token')?.value;
    const userPayload = verifyJwt<{ role: RolUsuario }>(token);
    if (!userPayload || userPayload.role !== RolUsuario.ADMINISTRADOR) {
      return NextResponse.json({ error: 'Acceso denegado' }, { status: 403 });
    }

    // 2. Validación de Datos
    const body = await request.json();
    const validation = OperadorSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ error: 'Datos de formulario inválidos' }, { status: 400 });
    }

    const { nombre, apellido, email, password } = validation.data;

    // 3. Verificamos si el email ya existe
    const existingUser = await prisma.usuario.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return NextResponse.json({ error: 'El email ya está registrado.' }, { status: 409 });
    }

    // 4. Hasheamos (encriptamos) la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5. Creamos el nuevo usuario con el ROL DE OPERADOR
    const newOperador = await prisma.usuario.create({
      data: {
        nombre,
        apellido,
        email,
        password: hashedPassword,
        rol: RolUsuario.OPERADOR, // <-- La clave es esta
      },
    });

    // Quitamos la contraseña del objeto antes de devolverlo
    const { password: _, ...userWithoutPassword } = newOperador;

    return NextResponse.json(userWithoutPassword, { status: 201 }); // 201 Created

  } catch (error) {
    console.error('Error al crear el operador:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}