// En: src/components/dashboard/MetricasClientLayout.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Bed, Mail, CalendarCheck, Loader2, CalendarIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format, subDays } from 'date-fns';
import { type DateRange } from 'react-day-picker';
import { cn } from '@/lib/utils';

// --- Definición de Tipos ---
// 1. Exportamos este tipo para que page.tsx lo pueda importar (aunque ya no lo use)
export type MetricasData = {
  totalReservas: number;
  totalConsultas: number;
  consultasPendientes: number;
  totalHabitaciones: number;
  datosGraficoReservas: { name: string; value: number }[];
  datosGraficoConsultas: { name: string; value: number }[];
  datosGraficoHabitaciones: { name: string; value: number }[];
};

// 2. Paletas de colores (como ya las tenías)
const COLORS_RESERVAS: Record<string, string> = {
  CONFIRMADA: '#22c55e', // Verde
  PENDIENTE: '#eab308', // Amarillo
  CANCELADA: '#ef4444', // Rojo
  COMPLETADA: '#3b82f6', // Azul
};

const COLORS_HABITACIONES: Record<string, string> = {
  Disponible: '#22c55e',
  Ocupada: '#ef4444',
  Mantenimiento: '#eab308',
};

const COLORS_CONSULTAS: Record<string, string> = {
  Pendientes: '#eab308',
  Leídas: '#8b5cf6', // Violeta
};
const glassCardStyle = "bg-black/20 backdrop-blur-sm border-white/10 text-white shadow-lg";


const MetricasClientLayout: React.FC = () => {
  
  // --- Estados del Componente ---
  // 3. Estado para el rango de fechas (por defecto, los últimos 30 días)
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 30),
    to: new Date(),
  });
  
  // 4. Estado para guardar los datos que vienen de la API
  const [metricas, setMetricas] = useState<MetricasData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- Lógica de Carga de Datos ---
  // 5. useEffect: Se ejecuta al cargar y CADA VEZ que 'dateRange' cambia
  useEffect(() => {
    // Si no hay fechas seleccionadas, no hacemos nada
    if (!dateRange?.from || !dateRange?.to) {
      setMetricas(null);
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      
      // Formateamos las fechas para la URL de la API
      const from = dateRange.from?.toISOString();
      const to = dateRange.to?.toISOString();

      try {
        const response = await fetch(`/api/admin/metricas?from=${from}&to=${to}`);
        if (!response.ok) {
          throw new Error('No se pudieron cargar las métricas');
        }
        const data: MetricasData = await response.json();
        setMetricas(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dateRange]); // <-- La "magia" está aquí

  return (
    <div className="flex flex-col gap-10">

      {/* --- 6. EL FILTRO DE FECHAS (NUEVO) --- */}
      {/* Esta es la lógica del filtro que pediste */}
      <div className={cn("grid gap-2", glassCardStyle, "p-4 rounded-lg")}>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal bg-black/30 border-white/20 text-white hover:bg-white/10 hover:text-white",
                !dateRange && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateRange?.from ? (
                dateRange.to ? (
                  <>
                    {format(dateRange.from, "LLL dd, y")} -{" "}
                    {format(dateRange.to, "LLL dd, y")}
                  </>
                ) : (
                  format(dateRange.from, "LLL dd, y")
                )
              ) : (
                <span>Selecciona un rango</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={dateRange?.from}
              selected={dateRange}
              onSelect={setDateRange} // <-- Al seleccionar, actualiza el estado
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
      
      {/* 7. RENDERIZADO CONDICIONAL */}
      {isLoading && (
        <div className="text-center text-gray-900 py-10">
          <Loader2 className="h-8 w-8 animate-spin mx-auto" />
          <p>Cargando métricas...</p>
        </div>
      )}

      {error && (
        <p className="text-center text-red-600 py-10">{error}</p>
      )}

      {!isLoading && !error && metricas && (
        <>
          {/* --- SECCIÓN DE HABITACIONES --- */}
          {/* (Tu sección de habitaciones con el gráfico y la tarjeta) */}
          <section>
            <h2 className="text-2xl font-bold font-display text-gray-900 mb-4">Habitaciones</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className={glassCardStyle}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Habitaciones</CardTitle>
                  <Bed className="h-4 w-4 text-white/70" />
                </CardHeader>
                <CardContent>
                  <p className="text-5xl font-bold">{metricas.totalHabitaciones}</p>
                </CardContent>
              </Card>
              <Card className={`${glassCardStyle} md:col-span-2`}>
                <CardHeader>
                  <CardTitle>Habitaciones por Estado</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie data={metricas.datosGraficoHabitaciones} dataKey="value" /* ... */ >
                        {metricas.datosGraficoHabitaciones.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS_HABITACIONES[entry.name] || '#8884d8'} />
                        ))}
                      </Pie>
                      <Tooltip /* ... */ /> <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="bg-gray-700/50" />

          {/* --- SECCIÓN DE RESERVAS --- */}
          {/* (Tu sección de reservas con el gráfico y la tarjeta) */}
          <section>
            <h2 className="text-2xl font-bold font-display text-gray-900 mb-4">Reservas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className={glassCardStyle}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total de Reservas (en rango)</CardTitle>
                  <CalendarCheck className="h-4 w-4 text-white/70" />
                </CardHeader>
                <CardContent>
                  <p className="text-5xl font-bold">{metricas.totalReservas}</p>
                </CardContent>
              </Card>
              <Card className={`${glassCardStyle} md:col-span-2`}>
                <CardHeader>
                  <CardTitle>Reservas por Estado (en rango)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie data={metricas.datosGraficoReservas} dataKey="value" /* ... */ >
                        {metricas.datosGraficoReservas.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS_RESERVAS[entry.name] || '#8884d8'} />
                        ))}
                      </Pie>
                      <Tooltip /* ... */ /> <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="bg-gray-700/50" />

          {/* --- SECCIÓN DE CONSULTAS --- */}
          {/* (Tu sección de consultas con el gráfico y las tarjetas) */}
          <section>
            <h2 className="text-2xl font-bold font-display text-gray-900 mb-4">Consultas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className={glassCardStyle}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Consultas (en rango)</CardTitle>
                  <Mail className="h-4 w-4 text-white/70" />
                </CardHeader>
                <CardContent>
                  <p className="text-5xl font-bold">{metricas.totalConsultas}</p>
                </CardContent>
              </Card>
              <Card className={glassCardStyle}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Consultas Pendientes (en rango)</CardTitle>
                  <Mail className="h-4 w-4 text-yellow-400" />
                </CardHeader>
                <CardContent>
                  <p className="text-5xl font-bold">{metricas.consultasPendientes}</p>
                </CardContent>
              </Card>
              <Card className={`${glassCardStyle} md:col-span-1`}>
                <CardHeader>
                  <CardTitle>Consultas por Estado (en rango)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie data={metricas.datosGraficoConsultas} dataKey="value" /* ... */ >
                        {metricas.datosGraficoConsultas.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS_CONSULTAS[entry.name] || '#8884d8'} />
                        ))}
                      </Pie>
                      <Tooltip /* ... */ /> <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default MetricasClientLayout;