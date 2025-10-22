// En: src/components/Footer.tsx

import Link from 'next/link';

export function Footer() {
  // Obtenemos el año actual para que se actualice solo
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-muted/70 to-secondary/70 sticky top-0 z-50 w-full border-b border-white/20 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        {/* Información de Copyright */}
        <p className="text-base font-medium text-white/80 transition-colors hover:text-white">
          &copy; {currentYear} Colon Hotel. Todos los derechos reservados.
        </p>

        {/* Enlaces y Contacto */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/terminos" // Futura página de Términos y Condiciones
            className="text-base font-medium text-white/80 transition-colors hover:text-white"
          >
            Términos de Servicio
          </Link>
          <Link
            href="/privacidad" // Futura página de Política de Privacidad
            className="text-base font-medium text-white/80 transition-colors hover:text-white"
          >
            Política de Privacidad
          </Link>
          <p className="text-base font-medium text-white/80 transition-colors hover:text-white">
            contacto@hotelcolon.com
          </p>
        </div>
      </div>
    </footer>
  );
}