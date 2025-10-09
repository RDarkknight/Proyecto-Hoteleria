import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyPassword, signJwt } from "@/lib/usuarios/auth";
import { RolUsuario } from "@/generated/prisma/client";
import { LoginBodySchema, LoginSuccessSchema, type Role } from "@/lib/usuarios/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // CAMBIO: El schema de validación ahora debe esperar 'email' en lugar de 'username'
    const { email, password } = LoginBodySchema.parse(body);

    // CAMBIO: Buscamos al usuario por 'email' porque ahora es el campo único
    const user = await prisma.usuario.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 });
    }

    // CAMBIO: Verificamos contra el campo 'password' de nuestro nuevo schema
    const ok = await verifyPassword(password, user.password);
    if (!ok) {
      return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 });
    }

    // El token ahora contendrá el rol del nuevo Enum
    const token = signJwt({
      sub: String(user.id),
      email: user.email,
      role: user.rol, // user.rol ya es del tipo RolUsuario
      nombre: user.nombre,
    });

    const res = NextResponse.json(
      LoginSuccessSchema.parse({
        message: "Login OK",
        role: user.rol,
        user: {
          id: String(user.id),
          nombre: user.nombre,
          email: user.email,
          role: user.rol,
        },
        token,
      })
    );

    res.cookies.set({
      name: "auth_token",
      value: token,
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24, // 24 horas para comodidad en el desarrollo
    });

    return res;
  } catch (err) {
    console.error("[LOGIN]", err);
    return NextResponse.json({ error: "Error en el servidor" }, { status: 500 });
  }
}