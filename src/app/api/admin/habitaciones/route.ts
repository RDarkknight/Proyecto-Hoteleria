// En: src/app/api/admin/habitaciones/route.ts

import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { verifyJwt } from '@/lib/usuarios/auth'; // Importamos el verificador de JWT
import { RolUsuario } from '@prisma/client';
import { cookies } from 'next/headers';

// 1. Definimos un esquema de validación para el backend.
const FormSchema = z.object({
  numero: z.coerce.number().int().positive(),
  piso: z.coerce.number().int().optional(),
  tipo: z.string().min(3),
  descripcion: z.string().optional(),
  capacidad: z.coerce.number().int().min(1),
  precioPorNoche: z.coerce.number().positive(),
  estadoId: z.coerce.number().int(),
  // Aceptamos los links de imágenes como un solo string
  imagenes: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    // 2. Verificación de Seguridad: ¿Es un Administrador?
    const token = cookies().get('auth_token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const userPayload = verifyJwt<{ role: RolUsuario }>(token);
    if (!userPayload || userPayload.role !== RolUsuario.ADMINISTRADOR) {
      return NextResponse.json({ error: 'Acceso denegado' }, { status: 403 }); // 403 Prohibido
    }

    // 3. Validación de Datos
    const body = await request.json();
    const validation = FormSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ error: 'Datos de formulario inválidos' }, { status: 400 });
    }

    const { imagenes, ...roomData } = validation.data;

    // 4. Procesamiento de Imágenes (como pediste)
    // Convertimos el string de links separados por coma en un array
    const imageLinks = imagenes
      ? imagenes.split(',') // Separa por comas
          .map(url => url.trim()) // Quita espacios en blanco
          .filter(url => url.length > 0 && (url.startsWith('http://') || url.startsWith('https://'))) // Filtra links vacíos o inválidos
      : [];

    // Preparamos el formato para la creación anidada de Prisma
    const imageCreateData = imageLinks.map(url => ({
      url: url,
      altText: `Imagen de ${roomData.tipo}`
    }));

    // 5. Creación en la Base de Datos
    // Usamos una creación anidada para crear la habitación Y sus imágenes
    // en una sola transacción.
    const newHabitacion = await prisma.habitacion.create({
      data: {
        ...roomData, // Todos los datos de la habitación (numero, tipo, etc.)
        imagenes: {
          create: imageCreateData, // El array de imágenes a crear
        }
      }
    });

    return NextResponse.json(newHabitacion, { status: 201 }); // 201 Created

  } catch (error) {
    // Manejo de errores (ej: número de habitación duplicado)
    if (error instanceof Error && (error as any).code === 'P2002' && (error as any).meta?.target?.includes('numero')) {
      return NextResponse.json({ error: 'El número de habitación ya existe.' }, { status: 409 });
    }

    console.error('Error al crear la habitación:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}