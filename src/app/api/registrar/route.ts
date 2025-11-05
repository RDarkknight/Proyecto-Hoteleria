// En: src/app/api/registrar/route.ts

import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { RolUsuario } from '@prisma/client'; // Importamos el enum de Roles
import bcrypt from 'bcrypt';

// 1. Definimos un esquema de validación para el backend.
// (No necesitamos 'confirmPassword' aquí, el frontend ya lo validó)
const RegisterSchema = z.object({
  nombre: z.string().min(2),
  apellido: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 2. Validamos los datos que llegaron
    const validation = RegisterSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ error: 'Datos de registro inválidos' }, { status: 400 });
    }

    const { nombre, apellido, email, password } = validation.data;

    // 3. Verificamos si el email ya existe
    const existingUser = await prisma.usuario.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return NextResponse.json({ error: 'El email ya está registrado.' }, { status: 409 }); // 409 Conflict
    }

    // 4. ¡MUY IMPORTANTE! Hasheamos (encriptamos) la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5. Creamos el nuevo usuario en la base de datos
    const newUser = await prisma.usuario.create({
      data: {
        nombre,
        apellido,
        email,
        password: hashedPassword,
        rol: RolUsuario.USUARIO, // Por defecto, todos los registros son 'USUARIO'
      },
    });

    // 6. Quitamos la contraseña del objeto antes de devolverlo (por seguridad)
    const { password: _, ...userWithoutPassword } = newUser;

    return NextResponse.json(userWithoutPassword, { status: 201 }); // 201 Created

  } catch (error) {
    console.error('Error al registrar usuario:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}