// En: src/app/api/consultas/[id]/responder/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Resend } from 'resend'; // <-- Importamos Resend

// Inicializamos Resend con nuestra clave API
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const consultaId = parseInt(params.id, 10);
    const body = await request.json();
    const { respuesta } = body; // El texto de la respuesta del operador

    if (!respuesta) {
      return NextResponse.json({ error: 'La respuesta no puede estar vacía' }, { status: 400 });
    }

    // 1. Buscamos la consulta original en la BD
    const consulta = await prisma.consulta.findUnique({
      where: { id: consultaId },
    });

    if (!consulta) {
      return NextResponse.json({ error: 'Consulta no encontrada' }, { status: 404 });
    }

    // 2. Usamos Resend para ENVIAR EL EMAIL
    await resend.emails.send({
      from: 'onboarding@resend.dev', // <-- Email de prueba de Resend (luego lo configuras)
      to: consulta.email, // <-- El email del cliente que hizo la consulta
      subject: `Respuesta a tu consulta: "${consulta.mensaje.substring(0, 20)}..."`,
      html: `
        <div>
          <p>Hola ${consulta.nombre},</p>
          <p>Gracias por tu consulta sobre el Colon Hotel.</p>
          <br>
          <p><strong>Tu consulta original:</strong></p>
          <p><em>"${consulta.mensaje}"</em></p>
          <br>
          <p><strong>Nuestra respuesta:</strong></p>
          <p>${respuesta}</p>
          <br>
          <p>¡Esperamos verte pronto!</p>
          <p>El equipo del Colon Hotel</p>
        </div>
      `,
    });

    // 3. Marcamos la consulta como leída en la BD
    await prisma.consulta.update({
      where: { id: consultaId },
      data: { leido: true },
    });

    return NextResponse.json({ message: 'Respuesta enviada con éxito' });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al enviar la respuesta' }, { status: 500 });
  }
}