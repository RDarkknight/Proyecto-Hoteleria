-- CreateTable
CREATE TABLE "public"."Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rol" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Habitacion" (
    "id" SERIAL NOT NULL,
    "numero" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Habitacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Reserva" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "habitacionId" INTEGER NOT NULL,
    "fechaInicio" TIMESTAMP(3) NOT NULL,
    "fechaFin" TIMESTAMP(3) NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Reserva_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Pago" (
    "id" SERIAL NOT NULL,
    "reservaId" INTEGER NOT NULL,
    "monto" DOUBLE PRECISION NOT NULL,
    "metodo" TEXT NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Pago_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "public"."Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Habitacion_numero_key" ON "public"."Habitacion"("numero");

-- AddForeignKey
ALTER TABLE "public"."Reserva" ADD CONSTRAINT "Reserva_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Reserva" ADD CONSTRAINT "Reserva_habitacionId_fkey" FOREIGN KEY ("habitacionId") REFERENCES "public"."Habitacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Pago" ADD CONSTRAINT "Pago_reservaId_fkey" FOREIGN KEY ("reservaId") REFERENCES "public"."Reserva"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
