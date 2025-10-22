// En: src/components/Footer.tsx

import Link from 'next/link';

export function Footer() {
  // Obtenemos el año actual para que se actualice solo
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        {/* Información de Copyright */}
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Colon Hotel. Todos los derechos reservados.
        </p>

        {/* Enlaces y Contacto */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/terminos" // Futura página de Términos y Condiciones
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Términos de Servicio
          </Link>
          <Link
            href="/privacidad" // Futura página de Política de Privacidad
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Política de Privacidad
          </Link>
          <p className="text-sm text-muted-foreground">
            contacto@hotelparaiso.com
          </p>
        </div>
      </div>
    </footer>
  );
}