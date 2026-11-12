import { dayNames } from '../services/scheduleData'
import type { TrainingSession } from '../types'
import type { Discipline } from '@/types'

export interface ScheduleTableProps {
  sessions: TrainingSession[]
  day: number
  discipline: Discipline
  period: TrainingSession['period']
}
export function ScheduleTable({ sessions, day, discipline, period }: ScheduleTableProps) {
  const visible = day < 0 ? sessions : sessions.filter(session => session.days.includes(day))
  const slots = [...new Set(visible.map(session => `${session.start}–${session.end}`))].sort()
  const title = `${discipline} — Turno ${period.toLowerCase()}`
  return <div className="schedule-matrix">
    <h3 className="schedule-matrix__title">{title}</h3>
    {slots.length === 0 ? <div className="schedule-matrix__empty"><p>{sessions.length === 0 && discipline === 'Kickboxing'
      ? 'Consulta los horarios de Kickboxing para el turno tarde / noche con nuestro equipo.'
      : 'No hay clases registradas para este día y turno. Consulta otro día o turno.'}</p></div>
      : <div className={`schedule-matrix__scroll ${day < 0 ? 'schedule-matrix__scroll--weekly' : ''}`} role="region" aria-label={day < 0 ? 'Tabla semanal de horarios, desplazable horizontalmente' : `Horarios del ${dayNames[day]}`} tabIndex={day < 0 ? 0 : undefined}>
        <table className="schedule-matrix__table"><caption className="sr-only">{title}{day >= 0 ? `, ${dayNames[day]}` : ', de lunes a sábado'}</caption>
          <thead><tr><th scope="col">Horario</th>{day < 0 ? dayNames.map(name => <th scope="col" key={name}>{name.slice(0, 3)}</th>) : <th scope="col">Profesor</th>}</tr></thead>
          <tbody>{slots.map(slot => <tr key={slot}><th scope="row">{slot}</th>{(day < 0 ? [0, 1, 2, 3, 4, 5] : [day]).map(d => {
            const teachers = visible.filter(session => `${session.start}–${session.end}` === slot && session.days.includes(d)).map(session => session.coach)
            return <td key={d}>{teachers.length ? [...new Set(teachers)].join(' / ') : <span aria-label="Sin clase registrada">—</span>}</td>
          })}</tr>)}</tbody>
        </table>
      </div>}
  </div>
}
