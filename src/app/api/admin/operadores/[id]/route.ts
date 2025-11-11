// En: src/app/api/admin/operadores/[id]/route.ts

import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { verifyJwt } from '@/lib/usuarios/auth';
import { RolUsuario } from '@prisma/client';
import { cookies } from 'next/headers';
import bcrypt from 'bcrypt';

// --- FUNCIÓN GET (para obtener datos y rellenar el formulario) ---
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // (Verificación de Admin para seguridad de datos)
    const token = cookies().get('auth_token')?.value;
    const userPayload = verifyJwt<{ role: RolUsuario }>(token);
    if (!userPayload || userPayload.role !== RolUsuario.ADMINISTRADOR) {
      return NextResponse.json({ error: 'Acceso denegado' }, { status: 403 });
    }

    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID de operador inválido' }, { status: 400 });
    }

    const operador = await prisma.usuario.findUnique({
      where: { id, rol: RolUsuario.OPERADOR },
      select: { // Solo devolvemos los datos necesarios
        id: true,
        nombre: true,
        apellido: true,
        email: true,
      }
    });

    if (!operador) {
      return NextResponse.json({ error: 'Operador no encontrado' }, { status: 404 });
    }
    return NextResponse.json(operador);

  } catch (error) {
    console.error('Error al obtener el operador:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

// --- Esquema de Validación para PATCH (Contraseña es opcional) ---
const OperadorUpdateSchema = z.object({
  nombre: z.string().min(2).optional(),
  apellido: z.string().min(2).optional(),
  email: z.string().email().optional(),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres").optional(),
});

// --- FUNCIÓN PATCH (para guardar los cambios) ---
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // 1. Verificación de Seguridad
    const token = cookies().get('auth_token')?.value;
    const userPayload = verifyJwt<{ role: RolUsuario }>(token);
    if (!userPayload || userPayload.role !== RolUsuario.ADMINISTRADOR) {
      return NextResponse.json({ error: 'Acceso denegado' }, { status: 403 });
    }

    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: 'ID de operador inválido' }, { status: 400 });
    }

    // 2. Validación de Datos
    const body = await request.json();
    const validation = OperadorUpdateSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json({ error: 'Datos de formulario inválidos' }, { status: 400 });
    }

    const { nombre, apellido, email, password } = validation.data;
    const updateData: any = { nombre, apellido, email };

    // 3. Verificamos si el email (si se cambió) ya existe
    if (email) {
      const existingUser = await prisma.usuario.findFirst({
        where: { email: email, NOT: { id: id } }, // Buscamos si otro usuario tiene este email
      });
      if (existingUser) {
        return NextResponse.json({ error: 'El email ya está en uso por otra cuenta.' }, { status: 409 });
      }
    }

    // 4. Si el admin incluyó una nueva contraseña, la hasheamos
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    // 5. Actualizamos al usuario
    const updatedOperador = await prisma.usuario.update({
      where: { id: id },
      data: updateData,
    });

    const { password: _, ...userWithoutPassword } = updatedOperador;
    return NextResponse.json(userWithoutPassword, { status: 200 });

  } catch (error) {
    console.error('Error al actualizar el operador:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

export async function DELETE(
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
      return NextResponse.json({ error: 'ID de operador inválido' }, { status: 400 });
    }

    // 3. No permitas que un admin se elimine a sí mismo
    if (userPayload.sub === params.id) {
      return NextResponse.json({ error: 'No puedes eliminar tu propia cuenta.' }, { status: 403 });
    }

    // 4. Eliminar el usuario
    // (Nota: Si este operador tiene reservas, Prisma puede fallar.
    // Necesitaríamos una lógica más compleja para reasignar reservas,
    // pero para este proyecto, asumimos que se puede eliminar.)
    await prisma.usuario.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Operador eliminado con éxito' }, { status: 200 });

  } catch (error) {
    console.error('Error al eliminar el operador:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}