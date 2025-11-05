// En: src/components/dashboard/MetricasClientLayout.tsx
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Bed, Mail, CalendarCheck } from 'lucide-react';
import { Separator } from '@/components/ui/separator'; // <-- 1. Importamos el Separador

// CAMBIO: Actualizamos la interfaz
interface MetricasProps {
  totalReservas: number;
  totalConsultas: number;
  consultasPendientes: number;
  totalHabitaciones: number;
  datosGraficoReservas: { name: string; value: number }[];
  datosGraficoConsultas: { name: string; value: number }[];
  datosGraficoHabitaciones: { name: string; value: number }[];
}

// Paletas de colores para cada gráfico
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

// Componente de Estilo de Tarjeta (para no repetir código)
const glassCardStyle = "bg-black/20 backdrop-blur-sm border-white/10 text-white shadow-lg";

const MetricasClientLayout: React.FC<MetricasProps> = ({ 
  totalReservas, 
  totalConsultas, 
  consultasPendientes, 
  totalHabitaciones, 
  datosGraficoReservas,
  datosGraficoConsultas,
  datosGraficoHabitaciones
}) => {
  
  return (
    // CAMBIO: Usamos flex-col para separar las secciones
    <div className="flex flex-col gap-10">
      
      {/* --- 2. SECCIÓN DE HABITACIONES --- */}
      <section>
        <h2 className="text-2xl font-bold font-display text-gray-900 mb-4">Habitaciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className={glassCardStyle}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Habitaciones</CardTitle>
              <Bed className="h-4 w-4 text-white/70" />
            </CardHeader>
            <CardContent>
              <p className="text-5xl font-bold">{totalHabitaciones}</p>
            </CardContent>
          </Card>

          {/* NUEVO: Gráfico de Habitaciones */}
          <Card className={`${glassCardStyle} md:col-span-2`}>
            <CardHeader>
              <CardTitle>Habitaciones por Estado</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={datosGraficoHabitaciones} dataKey="value" cx="50%" cy="50%" outerRadius={100} labelLine={false} label={(entry) => `${entry.name} (${entry.value})`}>
                    {datosGraficoHabitaciones.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS_HABITACIONES[entry.name] || '#8884d8'} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', borderColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '0.5rem' }} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* --- 3. LA "INCISIÓN" (Separador) --- */}
      <Separator className="bg-gray-700/50" />

      {/* --- 4. SECCIÓN DE RESERVAS --- */}
      <section>
        <h2 className="text-2xl font-bold font-display text-gray-900 mb-4">Reservas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className={glassCardStyle}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Reservas</CardTitle>
              <CalendarCheck className="h-4 w-4 text-white/70" />
            </CardHeader>
            <CardContent>
              <p className="text-5xl font-bold">{totalReservas}</p>
            </CardContent>
          </Card>
          
          {/* Gráfico de Reservas (existente) */}
          <Card className={`${glassCardStyle} md:col-span-2`}>
            <CardHeader>
              <CardTitle>Reservas por Estado</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={datosGraficoReservas} dataKey="value" cx="50%" cy="50%" outerRadius={100} labelLine={false} label={(entry) => `${entry.name} (${entry.value})`}>
                    {datosGraficoReservas.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS_RESERVAS[entry.name] || '#8884d8'} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', borderColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '0.5rem' }} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* --- 5. LA "INCISIÓN" (Separador) --- */}
      <Separator className="bg-gray-700/50" />

      {/* --- 6. SECCIÓN DE CONSULTAS --- */}
      <section>
        <h2 className="text-2xl font-bold font-display text-gray-900 mb-4">Consultas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className={glassCardStyle}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Consultas</CardTitle>
              <Mail className="h-4 w-4 text-white/70" />
            </CardHeader>
            <CardContent>
              <p className="text-5xl font-bold">{totalConsultas}</p>
            </CardContent>
          </Card>
          <Card className={glassCardStyle}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Consultas Pendientes</CardTitle>
              <Mail className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <p className="text-5xl font-bold">{consultasPendientes}</p>
            </CardContent>
          </Card>

          {/* NUEVO: Gráfico de Consultas */}
          <Card className={`${glassCardStyle} md:col-span-1`}>
            <CardHeader>
              <CardTitle>Consultas por Estado</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={datosGraficoConsultas} dataKey="value" cx="50%" cy="50%" outerRadius={100} labelLine={false} label={(entry) => `${entry.name} (${entry.value})`}>
                    {datosGraficoConsultas.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS_CONSULTAS[entry.name] || '#8884d8'} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', borderColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '0.5rem' }} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
};

export default MetricasClientLayout;