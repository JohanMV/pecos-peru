import { useState } from 'react'
import { Expand, Camera as Instagram } from 'lucide-react'
import { Button, Modal, Reveal, SectionHeading } from '@/components/ui'
const gallery = [
  { image: 'comunidad-demo.webp', alt: 'Escena generada de entrenamiento grupal en una escuela de combate', caption: 'COMPARTE EL ESFUERZO', demo: true },
  { image: 'conoce_pecos.webp', alt: 'Práctica de técnica de boxeo con entrenador', caption: 'APRENDE CADA DÍA' },
  { image: 'pecos-boxeo.webp', alt: 'Deportista entrenando boxeo', caption: 'SUPERA TUS LÍMITES' },
  { image: 'mma_pecos.webp', alt: 'Práctica de técnica de MMA', caption: 'ENTRENA EN EQUIPO' },
  { image: 'jiujitsu_pecos.webp', alt: 'Entrenamiento de jiu-jitsu', caption: 'ENCUENTRA TU DISCIPLINA' },
]
export function Community() {
  const [selected, setSelected] = useState<number | null>(null)
  return <section className="section section--accent community" id="comunidad" aria-labelledby="community-title"><div className="container"><Reveal><SectionHeading eyebrow="COMUNIDAD PECOS" id="community-title" description="Esfuerzo, disciplina y pasión por los deportes de combate." line>ASÍ SE VIVE <span>PECOS.</span></SectionHeading></Reveal>
    <div className="community__gallery">{gallery.map((photo, index) => <button className="community__photo" key={photo.image} type="button" onClick={() => setSelected(index)} aria-label={`Ampliar imagen: ${photo.alt}`}><img src={`/img/${photo.image}`} alt={photo.alt} width="900" height="700" loading="lazy" /><span className="community__caption">{photo.caption}</span><Expand className="community__expand" size={20} aria-hidden="true" />{photo.demo && <small>Imagen generada · Demo</small>}</button>)}</div>
    <div className="community__bottom"><Button to="https://www.instagram.com/pecos.peru/" external variant="secondary" arrow><Instagram size={18} />Más en Instagram</Button></div>
    <Modal open={selected !== null} onClose={() => setSelected(null)} title="Imagen ampliada de la comunidad" className="lightbox">{selected !== null && <figure><img src={`/img/${gallery[selected].image}`} alt={gallery[selected].alt} /><figcaption>{gallery[selected].caption} · Referencia visual de la demo</figcaption></figure>}</Modal>
  </div></section>
}
