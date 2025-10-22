// En: /lib/usuarios/types.ts

import { z } from 'zod';
import { RolUsuario } from '@/generated/prisma/client';

// Schema para el cuerpo (body) de la petición de login.
// Debe esperar un 'email' y un 'password'.
export const LoginBodySchema = z.object({
  email: z.string().email('Debe ser un correo válido'),
  password: z.string().min(1, 'La contraseña es requerida'),
});

// Schema para una respuesta de login exitosa
export const LoginSuccessSchema = z.object({
  message: z.string(),
  role: z.nativeEnum(RolUsuario),
  user: z.object({
    id: z.string(),
    nombre: z.string(),
    email: z.string(),
    role: z.nativeEnum(RolUsuario),
  }),
  token: z.string(),
});

// Schema para una respuesta de error
export const LoginErrorSchema = z.object({
  error: z.string(),
});

// Unión de los dos tipos de respuesta para el frontend
export const LoginResponseSchema = z.union([LoginSuccessSchema, LoginErrorSchema]);

// Tipos inferidos de los schemas para usar en el código
export type LoginBody = z.infer<typeof LoginBodySchema>;
export type LoginSuccess = z.infer<typeof LoginSuccessSchema>;
export type LoginError = z.infer<typeof LoginErrorSchema>;
export type LoginResponse = z.infer<typeof LoginResponseSchema>;

// Exportamos el Enum para poder usarlo en otras partes si es necesario
export const Role = RolUsuario;
export type Role = z.infer<typeof z.nativeEnum<typeof Role>>;