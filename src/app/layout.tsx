// En: src/app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import 'react-day-picker/dist/style.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Colon Hotel',
  description: 'Tu lugar de descanso ideal.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        {/* Este div es la clave. Organiza todo en una columna vertical
            que ocupa al menos toda la altura de la pantalla. */}
        <div className="relative flex min-h-screen flex-col">
          <Header />
          {/* Este main crece para ocupar el espacio disponible, empujando el footer hacia abajo */}
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}