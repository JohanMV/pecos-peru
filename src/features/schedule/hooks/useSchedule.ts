import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { disciplines } from '@/lib'
import { scheduleData } from '../services/scheduleData'
import type { Discipline, Venue } from '@/types'
export function useSchedule() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const selected = params.get('discipline')
  const discipline: Discipline = disciplines.find(item => item.name === selected)?.name ?? 'Boxeo'
  const [venue, setVenue] = useState<Venue>('Marsano')
  const [day, setDay] = useState(-1)
  const [period, setPeriod] = useState<'Mañana' | 'Tarde / noche'>('Mañana')
  const sessions = scheduleData.filter(session => session.filters.includes(discipline) && session.period === period)
  const selectDiscipline = (value: Discipline) => {
    const next = new URLSearchParams(params)
    next.set('discipline', value)
    navigate({ search: next.toString(), hash: '#horarios' }, { replace: true, preventScrollReset: true })
  }
  return { discipline, selectDiscipline, venue, setVenue, day, setDay, period, setPeriod, sessions, pending: venue === 'Higuereta' }
}
