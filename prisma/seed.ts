// En: prisma/seed.ts

// Usamos la ruta de importación específica que sabemos que funciona en tu entorno
import { PrismaClient, RolUsuario } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando el script de seed...');

  // --- 1. LIMPIEZA DE LA BASE DE DATOS ---
  // Borramos en orden para evitar errores de claves foráneas
  console.log('Limpiando datos antiguos...');
  await prisma.pago.deleteMany({});
  await prisma.reserva.deleteMany({});
  await prisma.consulta.deleteMany({});
  await prisma.habitacionImagen.deleteMany({});
  await prisma.servicioEnHabitacion.deleteMany({});
  
  // Borramos Habitacion (que depende de EstadoHabitacion)
  await prisma.habitacion.deleteMany({});
  
  // Ahora podemos borrar las tablas "padre"
  await prisma.usuario.deleteMany({});
  await prisma.servicio.deleteMany({});
  await prisma.estadoHabitacion.deleteMany({}); // Borramos los estados viejos
  console.log('Base de datos limpia.');

  // --- 2. CREACIÓN DE ENTIDADES INDEPENDIENTES ---
  
  console.log('Creando métodos de pago...');
await prisma.metodoDePago.createMany({
  data: [
    { nombre: 'Efectivo' },
    { nombre: 'Tarjeta de Crédito' },
    { nombre: 'Transferencia Bancaria' },
  ],
  skipDuplicates: true,
});

  // --- A. CREAR ESTADOS DE HABITACIÓN (NUEVO) ---
  console.log('Creando estados de habitación...');
  // Guardamos los estados en variables para usar sus IDs más adelante
  const estadoDisponible = await prisma.estadoHabitacion.create({
    data: { nombre: 'Disponible' },
  });
  const estadoMantenimiento = await prisma.estadoHabitacion.create({
    data: { nombre: 'Mantenimiento' },
  });
  const estadoOcupada = await prisma.estadoHabitacion.create({
    data: { nombre: 'Ocupada' },
  });
  console.log('Estados creados con éxito.');

  // --- B. CREAR USUARIOS ---
  console.log('Creando usuarios...');
  const adminPassword = await bcrypt.hash('admin123', 10);
  const clientePassword = await bcrypt.hash('cliente123', 10);
  const operadorPassword = await bcrypt.hash('operador123', 10);

  const [adminUser, clienteUser, operadorUser] = await Promise.all([
    prisma.usuario.create({
      data: {
        nombre: 'Admin',
        apellido: 'Hotel', // Asumí un apellido, puedes cambiarlo
        email: 'admin@hotel.com',
        password: adminPassword,
        rol: RolUsuario.ADMINISTRADOR,
      },
    }),
    prisma.usuario.create({
      data: {
        nombre: 'Juan',
        apellido: 'Perez',
        email: 'cliente@hotel.com',
        password: clientePassword,
        rol: RolUsuario.USUARIO,
      },
    }),
    prisma.usuario.create({
      data: {
        nombre: 'Operador', // Cambiado para diferenciar
        apellido: 'Hotel', // Asumí un apellido
        email: 'operador@hotel.com',
        password: operadorPassword,
        rol: RolUsuario.OPERADOR,
      },
    }),
  ]);
  console.log('Usuarios creados con éxito.');

  // --- C. CREAR SERVICIOS BÁSICOS ---
  console.log('Creando servicios básicos...');
  await prisma.servicio.createMany({
    data: [
      { nombre: 'Wi-Fi de Alta Velocidad' },
      { nombre: 'Desayuno Buffet' },
      { nombre: 'Acceso a Piscina' },
      { nombre: 'Gimnasio' },
      { nombre: 'Servicio a la Habitación' },
    ],
    skipDuplicates: true,
  });
  console.log('Servicios creados.');

  // --- 3. CREACIÓN DE HABITACIONES CON IMÁGENES (MODIFICADO) ---
  console.log('Creando habitaciones y sus imágenes...');
  
  await prisma.habitacion.create({
    data: {
      numero: 101,
      piso: 1,
      tipo: 'Doble Estándar',
      descripcion: 'Una habitación acogedora con vistas al jardín y dos camas individuales.',
      capacidad: 2,
      precioPorNoche: 5000,
      estadoId: estadoDisponible.id, // <-- CAMBIO CLAVE: Usamos el ID
      imagenes: {
        create: [
          {
            url: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6',
            altText: 'Cama doble con sábanas blancas',
          },
          {
            url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
            altText: 'Baño de lujo con bañera',
          },
        ],
      },
    },
  });

  await prisma.habitacion.create({
    data: {
      numero: 205,
      piso: 2,
      tipo: 'Suite Deluxe "Colon"',
      descripcion: 'Nuestra suite temática de lujo. Vistas al mar, cama king-size y una decoración inspirada en los 80s.',
      capacidad: 3,
      precioPorNoche: 12500,
      estadoId: estadoDisponible.id, // <-- CAMBIO CLAVE: Usamos el ID
      imagenes: {
        create: [
          {
            url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
            altText: 'Vista de la piscina del resort al atardecer',
          },
          {
            url: 'https://images.unsplash.com/photo-1560185009-dddeb820c7b7',
            altText: 'Interior de suite con decoración retro de lujo',
          }
        ],
      },
    },
  });

  await prisma.habitacion.create({
    data: {
      numero: 310,
      piso: 3,
      tipo: 'Habitación Individual',
      descripcion: 'Perfecta para viajeros de negocios, cómoda, funcional y con escritorio.',
      capacidad: 1,
      precioPorNoche: 3500,
      estadoId: estadoDisponible.id, // <-- CAMBIO CLAVE: Usamos el ID
      imagenes: {
        create: [
          {
            url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
            altText: 'Cama individual en una habitación moderna',
          },
        ],
      },
    },
  });

  await prisma.habitacion.create({
    data: {
      numero: 102,
      piso: 1,
      tipo: 'Doble Económica',
      descripcion: 'Una opción más económica sin sacrificar la comodidad. Vistas al patio interior.',
      capacidad: 2,
      precioPorNoche: 4200,
      estadoId: estadoMantenimiento.id, // <-- CAMBIO CLAVE: Usamos el ID (p.ej. 'Mantenimiento')
      imagenes: {
        create: [
          {
            url: 'https://images.unsplash.com/photo-1591088398332-8a7791972843',
            altText: 'Habitación simple y limpia con dos camas',
          },
        ],
      },
    },
  });

  console.log('Habitaciones creadas con éxito.');
  console.log('Seed script finalizado con éxito.');
}

main()
  .catch((e) => {
    console.error('¡Error durante el seed!:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
