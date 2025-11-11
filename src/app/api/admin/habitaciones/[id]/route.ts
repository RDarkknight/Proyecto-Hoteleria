// En: src/app/api/admin/habitaciones/[id]/route.ts

import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { verifyJwt } from '@/lib/usuarios/auth';
import { RolUsuario } from '@prisma/client';
import { cookies } from 'next/headers';

// --- Esquema de Validación (para PUT) ---
const FormSchema = z.object({
  numero: z.coerce.number().int().positive(),
  piso: z.coerce.number().int().optional(),
  tipo: z.string().min(3),
  descripcion: z.string().optional(),
  capacidad: z.coerce.number().int().min(1),
  precioPorNoche: z.coerce.number().positive(),
  estadoId: z.coerce.number().int(),
  imagenes: z.string().optional(),
});

// --- FUNCIÓN GET (para obtener datos y rellenar el formulario) ---
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // (Podríamos añadir seguridad aquí también, pero GET no es tan riesgoso)
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID de habitación inválido' }, { status: 400 });
    }

    const habitacion = await prisma.habitacion.findUnique({
      where: { id },
      include: {
        imagenes: true, // Incluimos las imágenes
      },
    });

    if (!habitacion) {
      return NextResponse.json({ error: 'Habitación no encontrada' }, { status: 404 });
    }

    return NextResponse.json(habitacion);

  } catch (error) {
    console.error('Error al obtener la habitación:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}


// --- FUNCIÓN PUT (para guardar los cambios) ---
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // 1. Verificación de Seguridad: ¿Es un Administrador?
    const token = cookies().get('auth_token')?.value;
    const userPayload = verifyJwt<{ role: RolUsuario }>(token);
    if (!userPayload || userPayload.role !== RolUsuario.ADMINISTRADOR) {
      return NextResponse.json({ error: 'Acceso denegado' }, { status: 403 });
    }

    // 2. Validar ID
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID de habitación inválido' }, { status: 400 });
    }

    // 3. Validación de Datos del Formulario
    const body = await request.json();
    const validation = FormSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ error: 'Datos de formulario inválidos' }, { status: 400 });
    }
    
    const { imagenes, ...roomData } = validation.data;

    // 4. Procesamiento de Imágenes
    const imageLinks = imagenes
      ? imagenes.split(',')
          .map(url => url.trim())
          .filter(url => url.length > 0 && (url.startsWith('http://') || url.startsWith('https://')))
      : [];
    
    const imageCreateData = imageLinks.map(url => ({
      url: url,
      altText: `Imagen de ${roomData.tipo}`
    }));

    // 5. Actualización en la Base de Datos (Transacción)
    const updatedHabitacion = await prisma.$transaction(async (tx) => {
      // A. Borramos las imágenes antiguas
      await tx.habitacionImagen.deleteMany({
        where: { habitacionId: id },
      });

      // B. Actualizamos la habitación y creamos las nuevas imágenes
      const habitacion = await tx.habitacion.update({
        where: { id },
        data: {
          ...roomData, // Todos los datos (numero, tipo, etc.)
          imagenes: {
            create: imageCreateData, // Creamos las nuevas imágenes
          }
        }
      });
      return habitacion;
    });

    return NextResponse.json(updatedHabitacion, { status: 200 }); // 200 OK

  } catch (error) {
    // ... (Manejo de errores, ej: número duplicado) ...
    if (error instanceof Error && (error as any).code === 'P2002' && (error as any).meta?.target?.includes('numero')) {
      return NextResponse.json({ error: 'El número de habitación ya existe.' }, { status: 409 });
    }
    console.error('Error al actualizar la habitación:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}


// --- FUNCIÓN DELETE (Para Eliminar una Habitación) ---
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // 1. Verificación de Seguridad: ¿Es un Administrador?
    const token = cookies().get('auth_token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const userPayload = verifyJwt<{ role: RolUsuario }>(token);
    if (!userPayload || userPayload.role !== RolUsuario.ADMINISTRADOR) {
      return NextResponse.json({ error: 'Acceso denegado' }, { status: 403 });
    }

    // 2. Obtener y validar el ID
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID de habitación inválido' }, { status: 400 });
    }

    // 3. Eliminar la habitación
    // (Nota: Gracias a 'onDelete: Cascade' en tu schema.prisma,
    // al borrar la habitación, también se borrarán sus 'HabitacionImagen' asociadas.)
    await prisma.habitacion.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Habitación eliminada con éxito' }, { status: 200 });

  } catch (error) {
    // Manejo de errores (ej: la habitación tiene reservas y no se puede borrar)
    if (error instanceof Error && (error as any).code === 'P2003') {
       return NextResponse.json({ error: 'No se puede eliminar la habitación porque tiene reservas activas.' }, { status: 409 });
    }

    console.error('Error al eliminar la habitación:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

