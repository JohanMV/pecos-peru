import type { TrainingSession } from '../types'
const weekdays = [0, 1, 2, 3, 4]
const mwf = [0, 2, 4]
const tt = [1, 3]
function blocks(discipline: string, days: number[], hours: number[], coach: string, filters: TrainingSession['filters']): TrainingSession[] {
  return hours.map(hour => ({ discipline, days, start: `${String(hour).padStart(2, '0')}:00`, end: `${String(hour + 1).padStart(2, '0')}:00`, coach, filters, period: hour < 12 ? 'Mañana' : 'Tarde / noche' }))
}
// Transcribed from the supplied Marsano posters. Validity is explicitly unconfirmed.
export const scheduleData: TrainingSession[] = [
  ...blocks('Boxeo', weekdays, [6, 7, 8], 'Felix Malásquez', ['Boxeo']),
  ...blocks('Boxeo', [5], [8], 'Felix Malásquez', ['Boxeo']),
  ...blocks('Boxeo', mwf, [18, 19, 20], 'Jacky Esteban', ['Boxeo']),
  ...blocks('Boxeo', tt, [18, 19, 20], 'Francesco Odria', ['Boxeo']),
  ...blocks('Muay Thai / Kickboxing', mwf, [7], 'Luis Chocata', ['Muay Thai', 'Kickboxing']),
  ...blocks('Muay Thai / Kickboxing', weekdays, [8, 9], 'Carlos Rumiche', ['Muay Thai', 'Kickboxing']),
  ...blocks('Muay Thai', mwf, [18, 19], 'Henry Siquihua', ['Muay Thai']),
  ...blocks('Muay Thai', tt, [18, 19], 'Pierre Cueto', ['Muay Thai']),
  ...blocks('Muay Thai', weekdays, [20], 'Pierre Cueto', ['Muay Thai']),
  ...blocks('MMA', mwf, [18], 'Rory Acuario', ['MMA']),
  ...blocks('MMA', tt, [20], 'Christopher Palacios', ['MMA']),
  ...blocks('MMA', [5], [9], 'Rory Acuario', ['MMA']),
  ...blocks('Jiu-jitsu', tt, [9], 'George Moore', ['Jiu-jitsu']),
  ...blocks('Jiu-jitsu', tt, [18], 'Christopher Palacios', ['Jiu-jitsu']),
  ...blocks('Jiu-jitsu', mwf, [20], 'Sebastian Ramos', ['Jiu-jitsu']),
]
// Internal reference only: excluded from the visible discipline filters.
// Lucha Olímpica's printed morning time conflicts with its night-shift heading.
export const additionalPrograms = [
  { name: 'Lucha Olímpica', days: mwf, start: '07:00', end: '08:00', coach: 'Heracles', timeRequiresConfirmation: true },
  { name: 'Lucha Olímpica', days: tt, start: '07:00', end: '08:00', coach: 'Christopher Palacios', timeRequiresConfirmation: true },
  { name: 'Boxeo Kids', days: mwf, start: '17:00', end: '18:00', coach: 'Jacky Esteban' },
  { name: 'Muay Thai Kids', days: tt, start: '17:00', end: '18:00', coach: 'Joaquin Rejas' },
]
export const dayNames = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
