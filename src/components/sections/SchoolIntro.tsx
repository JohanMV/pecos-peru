import { Button, Reveal, SectionHeading } from '@/components/ui'
const attributes = [
  ['ENTRENA DESDE CERO', 'Una propuesta que también recibe a quienes se inician en los deportes de combate.'],
  ['ENCUENTRA TU DISCIPLINA', 'Boxeo, muay thai, kickboxing, MMA y jiu-jitsu en un solo lugar.'],
  ['ESPACIOS PARA ENTRENAR', 'Un ambiente enfocado en tu desarrollo y tu entrenamiento.'],
]
export function SchoolIntro() {
  return <section className="section section--accent school" id="conoce-pecos" aria-labelledby="school-title"><div className="container school__grid">
    <Reveal className="school__photos"><img className="school__main-photo" src="/img/conoce_pecos.webp" width="850" height="850" alt="Sesión técnica de boxeo con entrenador PECOS" loading="lazy" /></Reveal>
    <Reveal className="school__content"><SectionHeading eyebrow="NUESTRA ESCUELA" id="school-title" line>CONOCE <span>PECOS.</span></SectionHeading><p className="school__intro"><strong>Escuela Peruana de Combate.</strong> Un espacio para aprender, entrenar y superar tus límites con disciplinas de combate.</p>
      <ol className="school__attributes">{attributes.map(([title, description], index) => <li key={title}><span className="school__number" aria-hidden="true">0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol>
      <Button to="/nosotros" arrow>Conoce nuestra escuela</Button>
    </Reveal>
  </div></section>
}
