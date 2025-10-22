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