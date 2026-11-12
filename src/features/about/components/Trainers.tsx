import { SectionHeading, Reveal } from '@/components/ui'
const coaches = [
  { discipline: 'Boxeo', image: 'entrenador-boxeo-demo.webp', names: 'Felix Malásquez · Jacky Esteban · Francesco Odria' },
  { discipline: 'Muay Thai', image: 'entrenador-muay-thai-demo.webp', names: 'Henry Siquihua · Pierre Cueto' },
  { discipline: 'Muay Thai / Kickboxing', image: 'entrenador-kickboxing-demo.webp', names: 'Luis Chocata · Carlos Rumiche' },
  { discipline: 'MMA', image: 'entrenador-mma-demo.webp', names: 'Rory Acuario · Christopher Palacios' },
  { discipline: 'Jiu-jitsu', image: 'entrenador-jiujitsu-demo.webp', names: 'George Moore · Christopher Palacios · Sebastian Ramos' },
]
export function Trainers() {
  return <section className="section section--accent trainers" id="entrenadores" aria-labelledby="trainers-title"><div className="container"><Reveal><SectionHeading eyebrow="NUESTROS ENTRENADORES" id="trainers-title" description="Conoce las disciplinas y el equipo documentado de la escuela. La composición actual del equipo está sujeta a confirmación.">UN EQUIPO DE <span>EXPERIENCIA.</span></SectionHeading></Reveal>
    <p className="reference-note trainer-note">Retratos generados para la demo. No representan a los profesores mencionados. Fotografías autorizadas y vigencia del equipo pendientes.</p>
    <div className="photo-track trainers__track" role="region" aria-label="Equipo por disciplina; desplaza horizontalmente para explorar" tabIndex={0}>{coaches.map((coach, index) => <Reveal key={coach.discipline} delay={index * .04} className="trainer-card"><div className="trainer-card__photo"><img src={`/img/${coach.image}`} width="450" height="600" alt={`Retrato ficticio de referencia visual para ${coach.discipline}`} loading="lazy" /><span>Referencia visual</span></div><div className="trainer-card__content"><h3>{coach.discipline}</h3><span className="red-rule" /><p>Equipo documentado</p><p className="trainer-card__names">{coach.names}</p></div></Reveal>)}</div>
  </div></section>
}
