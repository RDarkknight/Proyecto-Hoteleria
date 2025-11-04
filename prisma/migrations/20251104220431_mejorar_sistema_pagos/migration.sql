/*
  Warnings:

  - You are about to drop the column `metodo` on the `Pago` table. All the data in the column will be lost.
  - The `estado` column on the `Pago` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `metodoId` to the `Pago` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EstadoPago" AS ENUM ('PENDIENTE', 'COMPLETADO', 'FALLIDO', 'REEMBOLSADO');

-- AlterTable
ALTER TABLE "Pago" DROP COLUMN "metodo",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "metodoId" INTEGER NOT NULL,
DROP COLUMN "estado",
ADD COLUMN     "estado" "EstadoPago" NOT NULL DEFAULT 'PENDIENTE';

-- CreateTable
CREATE TABLE "MetodoDePago" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "MetodoDePago_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MetodoDePago_nombre_key" ON "MetodoDePago"("nombre");

-- CreateIndex
CREATE INDEX "Pago_reservaId_idx" ON "Pago"("reservaId");

-- CreateIndex
CREATE INDEX "Pago_metodoId_idx" ON "Pago"("metodoId");

-- AddForeignKey
ALTER TABLE "Pago" ADD CONSTRAINT "Pago_metodoId_fkey" FOREIGN KEY ("metodoId") REFERENCES "MetodoDePago"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
