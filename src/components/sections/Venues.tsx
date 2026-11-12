import { MapPin } from 'lucide-react'
import { Button, Reveal, SectionHeading } from '@/components/ui'
import { venues, contactUrl } from '@/lib'
export function Venues() {
  return <section className="section section--accent venues" id="sedes" aria-labelledby="venues-title"><div className="container">
    <Reveal><SectionHeading eyebrow="NUESTRAS SEDES" id="venues-title" description="Dos sedes en Santiago de Surco, Lima. Encuentra tu espacio para entrenar y dar el siguiente paso." line>ENTRENA EN <span>PECOS.</span></SectionHeading></Reveal>
    <div className="venues__grid">{venues.map((venue, index) => <Reveal key={venue.name} delay={index * .05}><article className="venue-card">
      <figure><img src={`/img/${venue.image}`} width="900" height="420" alt={`Imagen conceptual de la sede ${venue.name}; fotografía real pendiente`} loading="lazy" /><figcaption>Imagen conceptual · Demo</figcaption></figure>
      <div className="venue-card__body"><div className="venue-card__heading"><MapPin className="venue-card__pin" aria-hidden="true" /><div><p>SEDE</p><h3>{venue.name}</h3></div><p className="venue-card__address">{venue.address}</p></div>
        <p className="venue-card__note">{venue.note} Consulta las disciplinas y horarios disponibles en esta sede.</p>
        <div className="venue-card__actions"><Button to={contactUrl({ venue: venue.name, intent: 'informacion' })}>Consultar sede</Button><Button to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.address)}`} external variant="secondary" arrow>Cómo llegar</Button></div>
      </div></article></Reveal>)}</div>
  </div></section>
}
