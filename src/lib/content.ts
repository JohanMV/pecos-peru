import type { ContactSelection, DisciplineData, VenueData } from '@/types'
export const disciplines: DisciplineData[] = [
  { name: 'Boxeo', image: 'pecos-boxeo.webp', description: 'Técnica, resistencia y estrategia en el arte del boxeo.' },
  { name: 'Muay Thai', image: 'muay_thai_pecos.webp', description: 'El arte de las ocho extremidades: puños, codos, rodillas y piernas.' },
  { name: 'Kickboxing', image: 'kickboxing_pecos.webp', description: 'Potencia, velocidad y precisión con golpes de puño y pierna.' },
  { name: 'MMA', image: 'mma_pecos.webp', description: 'Un entrenamiento completo que integra distintas disciplinas.' },
  { name: 'Jiu-jitsu', image: 'jiujitsu_pecos.webp', description: 'Control, técnica y estrategia en el combate en el suelo.' },
]
export const venues: VenueData[] = [
  { name: 'Higuereta', address: 'Jirón Barlovento 135, Santiago de Surco, Lima', note: 'Cerca del Óvalo Higuereta.', image: 'sede-higuereta-demo.webp' },
  { name: 'Marsano', address: 'Av. Santiago de Surco 4030, Santiago de Surco, Lima', note: 'Santiago de Surco, Lima.', image: 'sede-marsano-demo.webp' },
]
export const navItems = [
  { label: 'Inicio', to: '/#inicio', id: 'inicio' }, { label: 'Nosotros', to: '/nosotros', id: 'nosotros' },
  { label: 'Disciplinas', to: '/#disciplinas', id: 'disciplinas' }, { label: 'Horarios', to: '/#horarios', id: 'horarios' },
  { label: 'Planes', to: '/#planes', id: 'planes' }, { label: 'Sedes', to: '/#sedes', id: 'sedes' },
]
export function contactUrl(selection: ContactSelection = {}) {
  const params = new URLSearchParams({ intent: selection.intent ?? 'prueba' })
  if (selection.discipline) params.set('discipline', selection.discipline)
  if (selection.venue) params.set('venue', selection.venue)
  if (selection.plan) params.set('plan', selection.plan)
  return `/?${params.toString()}#contacto`
}
