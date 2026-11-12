import { Link } from 'react-router-dom'
import { disciplines } from '@/lib'
import { Reveal, SectionHeading } from '@/components/ui'
export function Disciplines() {
  return <section className="section section--accent disciplines" id="disciplinas" aria-labelledby="disciplines-title"><div className="container">
    <Reveal><SectionHeading id="disciplines-title" eyebrow="NUESTRAS DISCIPLINAS" description="Entrena, mejora tu condición física y desarrolla tus habilidades en los deportes de combate.">DISCIPLINAS DE COMBATE</SectionHeading></Reveal>
    <div className="photo-track discipline-track" aria-label="Disciplinas de combate">{disciplines.map((item, index) => <Reveal className="discipline-reveal" delay={index * .04} key={item.name}><Link className="discipline-card" to={`/?discipline=${encodeURIComponent(item.name)}#horarios`} aria-label={`Consultar horarios de ${item.name}`}>
      <img src={`/img/${item.image}`} alt={`Entrenamiento de ${item.name} en PECOS`} width="400" height="680" loading="lazy" />
      <div className="discipline-card__content"><h3>{item.name}</h3><span className="red-rule" /><p>{item.description}</p></div>
    </Link></Reveal>)}</div>
    <p className="swipe-hint">Desliza para encontrar tu disciplina <span aria-hidden="true">⟶</span></p>
  </div></section>
}
