import { Link } from 'react-router-dom'
import { Camera as Instagram, Globe as Facebook, ArrowUpRight } from 'lucide-react'
import { navItems, venues } from '@/lib'
export function Footer() {
  return <footer className="footer"><div className="container footer__grid">
    <div className="footer__brand"><Link to="/#inicio"><img src="/img/pecos-logo.webp" width="78" height="78" alt="PECOS" /></Link><p>Escuela Peruana de Combate.<br />Disciplina que se entrena.<br />Límites que se superan.</p></div>
    <div><h3>EXPLORA PECOS</h3><nav aria-label="Navegación del pie">{navItems.map(item => <Link key={item.id} to={item.to}>{item.label}</Link>)}</nav></div>
    <div><h3>ENCUÉNTRANOS</h3>{venues.map(venue => <div className="footer__venue" key={venue.name}><strong>Sede {venue.name}</strong><p>{venue.address}</p></div>)}</div>
    <div><h3>SÍGUENOS</h3><a href="https://www.instagram.com/pecos.peru/" target="_blank" rel="noopener noreferrer"><Instagram size={18} /> Instagram <ArrowUpRight size={16} /></a><a href="https://www.facebook.com/PecosEscuelaPeruanaDeCombate" target="_blank" rel="noopener noreferrer"><Facebook size={18} /> Facebook <ArrowUpRight size={16} /></a><p className="footer__motto">VENCE TUS<br /><span>LÍMITES.</span></p></div>
  </div><div className="container footer__bottom"><span>© {new Date().getFullYear()} PECOS Perú. Escuela Peruana de Combate.</span><span>Hecho para quienes van por más.</span></div></footer>
}
