import { CalendarDays, Dumbbell, MapPin } from 'lucide-react'
import { Button, Reveal, SectionHeading, WhatsAppIcon as MessageCircle } from '@/components/ui'
import { contactUrl } from '@/lib'
const plans = [{ name: 'VIP', sub: '01 / UNA SEDE', image: 'membresia-vip-demo.webp', description: 'Entrena en una sede', locations: '(Higuereta o Marsano)' }, { name: 'SUPER VIP', sub: '02 / DOS SEDES', image: 'membresia-super-vip-demo.webp', description: 'Entrena en ambas sedes', locations: '(Higuereta y Marsano)' }]
export function Memberships() {
  return <section className="section section--accent plans" id="planes" aria-labelledby="plans-title"><div className="container">
    <Reveal><SectionHeading eyebrow="MEMBRESÍAS PECOS" id="plans-title" description="Encuentra la membresía que se adapte a tu entrenamiento y disfruta de las disciplinas de combate que PECOS tiene para ti." line>ELIGE TU <span>PLAN.</span></SectionHeading></Reveal>
    <div className="plans__grid">{plans.map((plan, index) => <Reveal key={plan.name} delay={index * .06}><article className={`plan-card ${index ? 'plan-card--featured' : ''}`}>
      <img className="plan-card__photo" src={`/img/${plan.image}`} alt="" width="900" height="650" loading="lazy" />
      <div className="plan-card__content"><p className="plan-card__eyebrow">{plan.sub}</p><h3>{plan.name}</h3><span className="red-rule" />
        <ul><li><MapPin /><span>{plan.description}<br />{plan.locations}</span></li><li><Dumbbell /><span>Acceso a disciplinas disponibles</span></li><li><CalendarDays /><span>Consulta duración y condiciones</span></li></ul>
        <Button to={contactUrl({ intent: 'informacion', plan: plan.name })} variant={index ? 'primary' : 'secondary'} arrow>Consultar plan {plan.name}</Button>
      </div></article></Reveal>)}</div>
    <div className="plans__help"><MessageCircle aria-hidden="true" /><div><h3>¿Aún no sabes qué plan elegir?</h3><p>Prueba una clase gratis y descubre cómo es entrenar en PECOS.</p></div><Button to={contactUrl()} variant="secondary" arrow>Solicitar clase gratis</Button></div>
  </div></section>
}
