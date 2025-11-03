// src/app/servicios/page.tsx
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Waves, Martini, Dumbbell, Star } from 'lucide-react';

// Un componente reutilizable para las características destacadas de cada servicio
const Feature = ({ children }) => (
  <li className="flex items-center gap-3">
    <Star className="w-5 h-5 text-cyan-400" fill="currentColor" />
    <span className="text-gray-300">{children}</span>
  </li>
);

export default function ServiciosPage() {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-black-600 text-white min-h-screen">
      {/* Sección Hero */}
      <section className="text-center py-16 md:py-24 px-4 bg-black/20">
        <h1 
          className="text-5xl md:text-6xl font-extrabold tracking-tighter"
          style={{ textShadow: '0 0 10px #f9a8d4, 0 0 20px #f472b6' }}
        >
          Servicios Exclusivos
        </h1>
        <p className="text-lg md:text-xl mt-4 text-cyan-300 font-light max-w-2xl mx-auto"
           style={{ textShadow: '0 0 5px #67e8f9' }}
        >
          En el Hotel Colón, cada servicio está diseñado para superar tus expectativas y sumergirte en un mundo de lujo y exceso.
        </p>
      </section>

      {/* Contenedor principal para los servicios */}
      <main className="container mx-auto px-4 py-16 space-y-16">

        {/* Servicio 1: Piscina */}
        <Card className="bg-black/30 backdrop-blur-sm border-pink-500/30 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative w-full h-64 md:h-full">
              <Image
                src="https://images.unsplash.com/photo-1440558953273-969c107f78a4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=724"
                alt="Fiesta en la piscina del hotel de noche"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Waves className="w-10 h-10 text-cyan-400" />
                  <CardTitle className="text-4xl font-bold">Fiestas en la Piscina</CardTitle>
                </div>
                <CardDescription className="text-lg text-gray-300">
                  El epicentro de la acción. Un oasis de neón donde la música nunca para y la noche nunca termina.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <Feature>DJ en vivo todas las noches</Feature>
                  <Feature>Bar de cócteles junto a la piscina</Feature>
                  <Feature>Zonas VIP y camas balinesas</Feature>
                </ul>
              </CardContent>
            </div>
          </div>
        </Card>

        {/* Servicio 2: Bar */}
        <Card className="bg-black/30 backdrop-blur-sm border-cyan-500/30 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative w-full h-64 md:h-full md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1689037772787-1847524c5e56?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=872"
                alt="Bar de cócteles con luces de neón"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center md:order-1">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Martini className="w-10 h-10 text-pink-400" />
                  <CardTitle className="text-4xl font-bold">Bar Abierto 24/7</CardTitle>
                </div>
                <CardDescription className="text-lg text-gray-300">
                  Donde las leyendas nacen y las historias se cuentan. Nuestra barra es tu santuario a cualquier hora.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <Feature>Mixólogos expertos en cócteles clásicos</Feature>
                  <Feature>Selección premium de licores</Feature>
                  <Feature>Ambiente exclusivo y música selecta</Feature>
                </ul>
              </CardContent>
            </div>
          </div>
        </Card>

        {/* Servicio 3: Gimnasio */}
        <Card className="bg-black/30 backdrop-blur-sm border-pink-500/30 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative w-full h-64 md:h-full">
              <Image
                src="https://images.unsplash.com/photo-1689877020200-403d8542d95d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
                alt="Gimnasio oscuro y exclusivo"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Dumbbell className="w-10 h-10 text-cyan-400" />
                  <CardTitle className="text-4xl font-bold">Gimnasio Exclusivo</CardTitle>
                </div>
                <CardDescription className="text-lg text-gray-300">
                  Forja tu cuerpo, domina tu mente. Equipamiento de última generación para los que no aceptan límites.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <Feature>Equipamiento de fuerza y cardio de alta gama</Feature>
                  <Feature>Entrenadores personales disponibles</Feature>
                  <Feature>Abierto 24 horas para tu conveniencia</Feature>
                </ul>
              </CardContent>
            </div>
          </div>
        </Card>

      </main>
    </div>
  );
}