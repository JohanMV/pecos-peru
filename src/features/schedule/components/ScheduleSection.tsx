import { CalendarDays, Layers, MapPin, Sun, Moon } from 'lucide-react'
import { Button, Reveal, Select, SectionHeading, WhatsAppIcon as MessageCircle } from '@/components/ui'
import { contactUrl, disciplines } from '@/lib'
import { useSchedule } from '../hooks/useSchedule'
import { dayNames } from '../services/scheduleData'
import { ScheduleTable } from './ScheduleTable'
export function ScheduleSection() {
  const schedule = useSchedule()
  return <section className="section section--accent schedules" id="horarios" aria-labelledby="schedule-title"><div className="container">
    <Reveal><SectionHeading eyebrow="HORARIOS" id="schedule-title" description="Consulta los horarios por sede y disciplina, y elige el mejor momento para entrenar en PECOS.">HORARIOS DE ENTRENAMIENTO<span>.</span></SectionHeading></Reveal>
    <div className="schedule-grid"><div className="schedule-query">
      <div className="venue-tabs" role="group" aria-label="Sede de entrenamiento">{(['Marsano', 'Higuereta'] as const).map(venue => <button type="button" key={venue} aria-pressed={schedule.venue === venue} onClick={() => schedule.setVenue(venue)}><MapPin size={22} aria-hidden="true" />Sede {venue}</button>)}</div>
      <div className="discipline-filters" role="group" aria-label="Filtrar disciplina">{disciplines.map(item => <button key={item.name} type="button" aria-pressed={item.name === schedule.discipline} onClick={() => schedule.selectDiscipline(item.name)}>{item.name}</button>)}</div>
      <div className="schedule-meta"><Select id="schedule-day" aria-label="Día de entrenamiento" value={String(schedule.day)} onValueChange={value => schedule.setDay(Number(value))} icon={<CalendarDays size={17} aria-hidden="true" />} options={[{ value: '-1', label: 'Toda la semana' }, ...dayNames.map((name, index) => ({ value: String(index), label: name }))]} /><div className="schedule-period"><div role="group" aria-label="Turno de entrenamiento">{(['Mañana', 'Tarde / noche'] as const).map(period => <button type="button" key={period} aria-pressed={schedule.period === period} onClick={() => schedule.setPeriod(period)}>{period === 'Mañana' ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}{period === 'Mañana' ? 'Turno mañana' : 'Tarde / noche'}</button>)}</div></div></div>
      <div className="schedule-results" aria-live="polite" aria-atomic="true">{schedule.pending ? <div className="schedule-empty"><CalendarDays size={42} /><h3>Consulta los horarios de Higuereta</h3><p>Nuestro equipo puede ayudarte a encontrar los horarios disponibles para tu disciplina.</p><Button to={contactUrl({ intent: 'informacion', venue: schedule.venue, discipline: schedule.discipline })} arrow>Consultar por WhatsApp</Button></div> : <ScheduleTable sessions={schedule.sessions} day={schedule.day} discipline={schedule.discipline} period={schedule.period} />}</div>
    </div><Reveal className="schedule-aside"><img src="/img/guantes-horarios-demo.webp" width="600" height="700" alt="Guantes negros PECOS con detalles rojos" loading="lazy" /><div className="schedule-aside__content"><div><CalendarDays /><span><h3>HORARIOS FLEXIBLES</h3><p>Encuentra tu momento para entrenar.</p></span></div><div><Layers /><span><h3>VARIAS DISCIPLINAS</h3><p>Encuentra la que va contigo.</p></span></div><div><MapPin /><span><h3>DOS SEDES</h3><p>Higuereta y Marsano, Surco.</p></span></div><Button to={contactUrl({ intent: 'informacion', venue: schedule.venue, discipline: schedule.discipline })}><MessageCircle size={22} />Consultar por WhatsApp</Button></div></Reveal></div>
  </div></section>
}

