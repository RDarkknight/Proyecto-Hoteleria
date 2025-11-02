// En: src/app/api/contacto/route.ts

import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, email, mensaje } = body;

    // --- SIMULACIÓN DE ENVÍO DE EMAIL ---
    // En un proyecto real, aquí llamarías a un servicio como SendGrid o Resend.
    // Para este proyecto, registraremos la consulta en la consola del servidor.

    console.log('--- NUEVA CONSULTA DE CONTACTO ---');
    console.log(`De: ${nombre} (${email})`);
    console.log(`Mensaje: ${mensaje}`);
    console.log('----------------------------------');
    // --- FIN DE LA SIMULACIÓN ---

    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: 'Faltan datos' }, { status: 400 });
    }

const nuevaConsulta = await prisma.consulta.create({
      data: {
        nombre: nombre,
        email: email,
        mensaje: mensaje,
      },
    });
    return NextResponse.json({ message: 'Consulta creada con éxito' }, { status: 200 });
    
  } catch (error) {
    console.error('Error al procesar la consulta:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}