// En: src/app/layout.tsx

import type { Metadata } from 'next';
import { Inter, Righteous } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import 'react-day-picker/dist/style.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans', // La usaremos para el texto normal
});

const righteous = Righteous({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
});

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
      <body className={`${inter.variable} ${righteous.variable} bg-gradient-to-b from-indigo-200 via-rose-300 to-yellow-200 text-gray-900`}>
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