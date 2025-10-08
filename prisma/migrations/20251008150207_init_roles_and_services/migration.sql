/*
  Warnings:

  - You are about to drop the column `precio` on the `Habitacion` table. All the data in the column will be lost.
  - The `rol` column on the `Usuario` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `precioPorNoche` to the `Habitacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `apellido` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."RolUsuario" AS ENUM ('USUARIO', 'OPERADOR', 'ADMINISTRADOR');

-- AlterTable
ALTER TABLE "public"."Habitacion" DROP COLUMN "precio",
ADD COLUMN     "capacidad" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "descripcion" TEXT,
ADD COLUMN     "piso" INTEGER,
ADD COLUMN     "precioPorNoche" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "public"."Pago" ALTER COLUMN "metodo" DROP NOT NULL,
ALTER COLUMN "estado" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Reserva" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "numeroHuespedes" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "public"."Usuario" ADD COLUMN     "apellido" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "rol",
ADD COLUMN     "rol" "public"."RolUsuario" NOT NULL DEFAULT 'USUARIO';

-- CreateTable
CREATE TABLE "public"."Servicio" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,

    CONSTRAINT "Servicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ServicioEnHabitacion" (
    "habitacionId" INTEGER NOT NULL,
    "servicioId" INTEGER NOT NULL,

    CONSTRAINT "ServicioEnHabitacion_pkey" PRIMARY KEY ("habitacionId","servicioId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Servicio_nombre_key" ON "public"."Servicio"("nombre");

-- CreateIndex
CREATE INDEX "Reserva_usuarioId_idx" ON "public"."Reserva"("usuarioId");

-- CreateIndex
CREATE INDEX "Reserva_habitacionId_idx" ON "public"."Reserva"("habitacionId");

-- AddForeignKey
ALTER TABLE "public"."ServicioEnHabitacion" ADD CONSTRAINT "ServicioEnHabitacion_habitacionId_fkey" FOREIGN KEY ("habitacionId") REFERENCES "public"."Habitacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ServicioEnHabitacion" ADD CONSTRAINT "ServicioEnHabitacion_servicioId_fkey" FOREIGN KEY ("servicioId") REFERENCES "public"."Servicio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
