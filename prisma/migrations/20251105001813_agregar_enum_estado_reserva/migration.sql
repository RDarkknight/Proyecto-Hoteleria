/*
  Warnings:

  - The `estado` column on the `Reserva` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "EstadoReserva" AS ENUM ('PENDIENTE', 'CONFIRMADA', 'CANCELADA', 'COMPLETADA');

-- AlterTable
ALTER TABLE "Reserva" DROP COLUMN "estado",
ADD COLUMN     "estado" "EstadoReserva" NOT NULL DEFAULT 'PENDIENTE';
