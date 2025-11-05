// En: src/app/contacto/page.tsx

import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-12">
      <div className="text-center">
        {/* CAMBIO: Títulos oscuros para que se lean sobre el atardecer */}
        <h1 className="text-4xl font-bold font-display text-gray-900">Contáctanos</h1>
        <p className="mt-4 text-lg text-gray-800">
          ¿Tienes alguna pregunta? Envíanos un mensaje y te responderemos a la
          brevedad.
        </p>
      </div>

      {/* CAMBIO: Aplicamos el estilo "vidrio polarizado" a la tarjeta */}
      <div className="mt-12 rounded-lg border border-white/10 bg-black/20 p-8 shadow-lg backdrop-blur-sm">
        <ContactForm />
      </div>
    </div>
  );
}