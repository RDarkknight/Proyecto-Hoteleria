// En: src/components/ui/table.tsx

export function Table({ headers, rows }: { headers: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-md border border-white/10">
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-white/10">
            {headers.map((h) => (
              <th 
                key={h} 
                // --- CAMBIO AQUÍ ---
                // Le decimos a Tailwind: "Centra el texto, 
                // a menos que el encabezado sea 'TIPO', en ese caso, alínealo a la izquierda."
                className={`px-4 py-3 text-xs font-medium text-gray-300 uppercase tracking-wider ${
                  h.toLowerCase() === 'tipo' ? 'text-left' : 'text-center'
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
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