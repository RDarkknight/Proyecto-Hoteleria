// En: src/lib/usuarios/auth.ts

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import type { Secret, SignOptions, JwtPayload } from 'jsonwebtoken';
// CAMBIO: Importamos nuestro Enum de roles para mantener todo consistente
import { RolUsuario } from '@/generated/prisma/client';

// Aseguramos que el secreto se cargue correctamente. Si no existe, lanzará un error.
const SECRET: Secret = process.env.JWT_SECRET as Secret;
if (!SECRET) {
  throw new Error('La variable de entorno JWT_SECRET no está definida.');
}

const EXPIRES_IN: SignOptions['expiresIn'] = '1d';

export async function verifyPassword(plain: string, hash: string) {
  // Usamos bcrypt en lugar de bcryptjs para ser consistentes con el seed script
  return bcrypt.compare(plain, hash);
}

export function signJwt(payload: object) {
  const options: SignOptions = { expiresIn: EXPIRES_IN };
  return jwt.sign(payload, SECRET, options);
}

export function verifyJwt<T extends JwtPayload = JwtPayload>(token: string): T | null {
  try {
    return jwt.verify(token, SECRET) as T;
  } catch (error) {
    console.error('Error al verificar el JWT:', error);
    return null;
  }
}

// CAMBIO: El tipo de usuario en el JWT ahora usa nuestro Enum RolUsuario
export type JwtUser = {
  sub: string;
  email: string;
  role: RolUsuario;
};