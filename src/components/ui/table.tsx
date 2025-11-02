// En: src/components/ui/table.tsx

export function Table({ headers, rows }: { headers: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-md border border-white/10">
      {/* CAMBIO: Eliminamos el 'divide-y' de aquí */}
      <table className="min-w-full">
        {/* CAMBIO: Eliminamos el 'bg-gray-50' */}
        <thead>
          {/* CAMBIO: Añadimos un borde inferior sutil y cambiamos el color del texto */}
          <tr className="border-b border-white/10">
            {headers.map((h) => (
              <th 
                key={h} 
                className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        {/* CAMBIO: Eliminamos el 'bg-white' y usamos nuestro propio divisor */}
        <tbody className="divide-y divide-white/10">
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((cell, j) => (
                <td key={j} className="px-4 py-3 whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}