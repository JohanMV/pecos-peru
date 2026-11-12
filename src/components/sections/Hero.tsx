import { Button, Reveal } from '@/components/ui'
export function Hero() {
  return <section className="hero" id="inicio" aria-labelledby="hero-title">
    <img className="hero__image" src="/img/Hero_fondo.webp" width="1672" height="941" alt="Deportista PECOS entrenando boxeo frente al saco" fetchPriority="high" />
    <div className="container hero__inner"><Reveal className="hero__content">
      <p className="eyebrow">PECOS · ESCUELA PERUANA DE COMBATE</p>
      <h1 id="hero-title">VENCE TUS<br />LÍMITES.</h1>
      <p className="hero__description">Entrena boxeo, muay thai, kickboxing, MMA, jiu-jitsu y lucha olímpica. Supera tus límites en PECOS, Escuela Peruana de Combate.</p>
      <div className="hero__actions"><Button to="/#disciplinas">Explorar disciplinas</Button><Button to="/#horarios" variant="secondary">Ver horarios</Button></div>
      <div className="hero__stats"><div><strong>06</strong><span>Disciplinas<br />de combate</span></div><div><strong>02</strong><span>Sedes<br />en Surco</span></div></div>
    </Reveal></div>
  </section>
}
