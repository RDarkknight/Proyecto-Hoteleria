// En: prisma/seed.ts

import { PrismaClient, RolUsuario } from '../src/generated/prisma/index.js';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando el script de seed...');

  // --- Usuario Administrador ---
  const adminPassword = await bcrypt.hash('admin123', 10);
  const adminUser = await prisma.usuario.upsert({
    where: { email: 'admin@hotel.com' },
    update: {},
    create: {
      nombre: 'Admin',
      apellido: 'Hotel',
      email: 'admin@hotel.com',
      password: adminPassword,
      rol: RolUsuario.ADMINISTRADOR,
    },
  });

  // ---  Usuario Cliente ---
  const clientePassword = await bcrypt.hash('cliente123', 10);
  const clienteUser = await prisma.usuario.upsert({
    where: { email: 'cliente@hotel.com' },
    update: {},
    create: {
      nombre: 'Juan',
      apellido: 'Perez',
      email: 'cliente@hotel.com',
      password: clientePassword,
      rol: RolUsuario.USUARIO, // Le asignamos el rol de cliente
    },
  });
   //  --- Usuario Operador ---
  const operadorPassword = await bcrypt.hash('operador123', 10);
  const operadorUser = await prisma.usuario.upsert({
    where: { email: 'operador@hotel.com' },
    update: {},
    create: {
      nombre: 'Juan',
      apellido: 'Perez',
      email: 'operador@hotel.com',
      password: operadorPassword,
      rol: RolUsuario.OPERADOR, // Le asignamos el rol de operador
    },
  });

  console.log(`Usuario Administrador creado/confirmado: ${adminUser.email}`);
  console.log(`Usuario Cliente creado/confirmado: ${clienteUser.email}`);
  console.log(`Usuario Operador creado/confirmado: ${operadorUser.email}`);
  console.log('Seed script finalizado.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

  // --- Añadir Imágenes de Habitación ---
console.log('Limpiando imágenes antiguas...');
await prisma.habitacionImagen.deleteMany({});

console.log('Añadiendo nuevas imágenes...');
await prisma.habitacionImagen.createMany({
  data: [
    // Imágenes para la Habitación 1
    {
      habitacionId: 1, // Asegúrate de que este ID exista en tu BD
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      altText: 'Vista de la piscina del resort',
    },
    {
      habitacionId: 1,
      url: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6',
      altText: 'Cama doble con sábanas blancas',
    },
    {
      habitacionId: 1,
      url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
      altText: 'Baño de lujo con bañera',
    },
  ],
});
console.log('Imágenes añadidas con éxito.');

console.log('Seed script finalizado.');
// ... (el resto de tu función main)