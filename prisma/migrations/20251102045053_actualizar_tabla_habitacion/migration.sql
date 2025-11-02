/*
  Warnings:

  - You are about to drop the column `estado` on the `Habitacion` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Habitacion" DROP COLUMN "estado",
ADD COLUMN     "estadoId" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "EstadoHabitacion" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "EstadoHabitacion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EstadoHabitacion_nombre_key" ON "EstadoHabitacion"("nombre");

-- CreateIndex
CREATE INDEX "Habitacion_estadoId_idx" ON "Habitacion"("estadoId");

-- AddForeignKey
ALTER TABLE "Habitacion" ADD CONSTRAINT "Habitacion_estadoId_fkey" FOREIGN KEY ("estadoId") REFERENCES "EstadoHabitacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
