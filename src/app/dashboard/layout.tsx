// En: src/app/dashboard/layout.tsx

import React from 'react';

// Este layout simplemente renderiza sus hijos.
// El layout raíz (src/app/layout.tsx) se encargará del header, footer y fondo.
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // No añadimos <div>, <header> ni nada. Solo pasamos los hijos.
  return <>{children}</>;
}