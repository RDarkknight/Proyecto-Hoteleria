-- CreateTable
CREATE TABLE "HabitacionImagen" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "altText" TEXT,
    "habitacionId" INTEGER NOT NULL,

    CONSTRAINT "HabitacionImagen_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "HabitacionImagen_habitacionId_idx" ON "HabitacionImagen"("habitacionId");

-- AddForeignKey
ALTER TABLE "HabitacionImagen" ADD CONSTRAINT "HabitacionImagen_habitacionId_fkey" FOREIGN KEY ("habitacionId") REFERENCES "Habitacion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
