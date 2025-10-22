// En: src/app/contacto/page.tsx

import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Contáctanos</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          ¿Tienes alguna pregunta? Envíanos un mensaje y te responderemos a la
          brevedad.
        </p>
      </div>

      <div className="mt-12 rounded-lg border bg-card p-8 shadow-sm">
        <ContactForm />
      </div>
    </div>
  );
}