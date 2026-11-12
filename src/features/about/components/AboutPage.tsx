import { Button, Reveal } from '@/components/ui'
import { contactUrl } from '@/lib'
import { Trainers } from './Trainers'
import { Community } from './Community'
export default function AboutPage() {
  return <><section className="about-banner" aria-labelledby="about-title"><img src="/img/sede-higuereta-demo.webp" alt="" width="1536" height="500" /><div className="container"><p className="eyebrow">NOSOTROS</p><h1 id="about-title">NUESTRA <span>ESCUELA.</span></h1><p>Escuela Peruana de Combate.</p></div></section>
    <section className="section about-intro" aria-labelledby="about-intro-title"><div className="container about-intro__grid"><Reveal><p className="eyebrow">ESTO ES PECOS</p><h2 id="about-intro-title">LA DISCIPLINA<br />SE <span>ENTRENA.</span></h2><span className="red-rule" /><p>Somos la Escuela Peruana de Combate: un espacio para aprender, entrenar y superar tus límites a través de los deportes de combate.</p><p>Ya sea tu primer entrenamiento o el siguiente paso en tu práctica, encuentra una disciplina y coordina con nuestro equipo la clase adecuada para ti.</p><div className="about-intro__links"><Button to="/#horarios" arrow>Explorar horarios</Button><Button to="/#sedes" variant="secondary">Conoce las sedes</Button></div></Reveal><Reveal className="about-intro__photo"><img src="/img/conoce_pecos.webp" alt="Entrenamiento técnico en PECOS" width="850" height="850" loading="lazy" /></Reveal></div></section>
    <Trainers /><Community />
    <section className="about-cta" aria-labelledby="about-cta-title"><div className="container"><div><p className="eyebrow">DA EL PRIMER PASO</p><h2 id="about-cta-title">TU PRÓXIMO RETO<br /><span>COMIENZA AQUÍ.</span></h2></div><Button to={contactUrl()} arrow>Solicita tu clase de prueba GRATIS</Button></div></section>
  </>
}
