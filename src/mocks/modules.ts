export const modulesByRole: Record<string, { name: string; icon: string; description: string }[]> = {
Recepcionista: [
{ name: 'Gestión de Pacientes', icon: '👥', description: 'Registrar y gestionar pacientes' },
{ name: 'Gestión de Turnos', icon: '📅', description: 'Programar y administrar citas' },
{ name: 'Funcionalidades del Sistema', icon: '⚙️', description: 'Configuración general' },
{ name: 'Dashboard', icon: '📊', description: 'Panel de control' },
],
Médico: [
{ name: 'Historia Clínica', icon: '📋', description: 'Gestionar historiales médicos' },
{ name: 'Dashboard', icon: '📊', description: 'Panel de control médico' },
],
Gerente: [
{ name: 'Consulta de Pacientes', icon: '👥', description: 'Ver información de pacientes' },
{ name: 'Consulta de Profesionales', icon: '👨‍⚕️', description: 'Ver información del personal' },
{ name: 'Consulta de Turnos', icon: '📅', description: 'Ver programación de citas' },
{ name: 'Consulta de Historial', icon: '📋', description: 'Ver historiales clínicos' },
{ name: 'Dashboard Completo', icon: '📊', description: 'Panel de control ejecutivo' },
],
}