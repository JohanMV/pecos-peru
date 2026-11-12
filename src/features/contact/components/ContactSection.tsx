import { Reveal } from '@/components/ui'
import { ContactForm } from './ContactForm'
export function ContactSection() {
  return <section className="section section--accent contact" id="contacto" aria-labelledby="contact-title"><div className="container contact__grid">
    <Reveal className="contact__story"><p className="eyebrow">CONTACTO</p><h2 id="contact-title">RESERVA TU<br />CLASE DE PRUEBA<br /><span>GRATIS.</span></h2><span className="red-rule" /><p>Da el primer paso, <strong>elige tu disciplina y sede</strong>, y vive la experiencia de entrenar en PECOS.</p><img src="/img/contacto.webp" width="1000" height="440" alt="Guantes de boxeo PECOS negros y rojos sobre el piso del gimnasio" loading="lazy" /></Reveal>
    <Reveal className="contact__form-wrap"><ContactForm /></Reveal>
  </div></section>
}
