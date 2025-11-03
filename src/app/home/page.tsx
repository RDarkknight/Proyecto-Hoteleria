// src/app/home/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Waves, Dumbbell, Martini } from 'lucide-react';

// El componente ServiceCard lo mantenemos, pero lo usaremos de forma individual
const ServiceCard = ({ icon: Icon, title, description }) => (
  <Card className="bg-black/20 backdrop-blur-sm border-pink-500/30 text-center shadow-lg h-full flex flex-col justify-center">
    <CardHeader>
      <div className="mx-auto bg-pink-500/20 text-pink-400 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-8 h-8" />
      </div>
      <CardTitle className="text-3xl font-bold text-white tracking-wider">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-300 text-lg">{description}</p>
    </CardContent>
  </Card>
);

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black-600 text-white min-h-screen">
      {/* Sección Hero (sin cambios) */}
      <section 
        className="relative text-center py-20 md:py-32 px-4"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1549294413-26f195200c16)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <h1 
            className="text-5xl md:text-7xl font-extrabold tracking-tighter"
            style={{ textShadow: '0 0 10px #f9a8d4, 0 0 20px #f472b6, 0 0 30px #ec4899' }}
          >
            Colon Hotel
          </h1>
          <p className="text-xl md:text-2xl mt-4 text-cyan-300 font-light tracking-wider"
             style={{ textShadow: '0 0 5px #67e8f9, 0 0 10px #22d3ee' }}
          >
            Tu vicio. Tu paraíso. Tu escapada definitiva.
          </p>
          <Button asChild size="lg" className="mt-8 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Link href="/habitaciones">Descubre las Suites</Link>
          </Button>
        </div>
      </section>

      {/* Nueva Sección de Servicios Refactorizada */}
      <section className="container mx-auto px-4 py-16 space-y-24">
        <h2 className="text-4xl font-bold text-center mb-12"
            style={{ textShadow: '0 0 8px #a5f3fc, 0 0 12px #67e8f9' }}
        >
          Lujo y Exceso sin Límites
        </h2>

        {/* Servicio 1: Fiestas en la Piscina */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1440558953273-969c107f78a4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=724"
              alt="Fiesta en la piscina del hotel de noche"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <ServiceCard 
            icon={Waves}
            title="Fiestas en la Piscina"
            description="Sumérgete en el corazón de la fiesta. Nuestra piscina es el epicentro de la acción, día y noche."
          />
        </div>

        {/* Servicio 2: Bar Abierto 24/7 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2 relative w-full h-80 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1689037772787-1847524c5e56?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=872"
              alt="Bar de cócteles con luces de neón"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="md:order-1">
            <ServiceCard 
              icon={Martini}
              title="Bar Abierto 24/7"
              description="La noche nunca termina en nuestro bar de cócteles. Pide lo que quieras, cuando quieras."
            />
          </div>
        </div>

        {/* Servicio 3: Gimnasio Exclusivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1689877020200-403d8542d95d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
              alt="Gimnasio oscuro y exclusivo"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <ServiceCard 
            icon={Dumbbell}
            title="Gimnasio Exclusivo"
            description="Mantén tu cuerpo al límite. Equipado para los que nunca se rinden."
          />
        </div>

      </section>
    </div>
  );
}
