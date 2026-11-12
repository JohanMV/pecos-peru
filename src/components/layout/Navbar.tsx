import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { navItems, contactUrl } from '@/lib'
import { useActiveSection } from '@/hooks'
import { Button, Modal } from '@/components/ui'
export function Navbar() {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)
  const links = navItems.map(item => <Link key={item.id} to={item.to} aria-current={active === item.id ? 'page' : undefined} onClick={() => setOpen(false)}>{item.label}</Link>)
  return <header className="navbar"><div className="container navbar__inner">
    <Link className="brand" to="/#inicio" aria-label="PECOS, ir al inicio"><img src="/img/pecos-logo.webp" width="76" height="76" alt="PECOS · Escuela Peruana de Combate" /></Link>
    <nav className="desktop-nav" aria-label="Navegación principal">{links}</nav>
    <Button className="nav-cta" to={contactUrl()}>Clase GRATIS</Button>
    <button className="icon-button menu-toggle" type="button" aria-label="Abrir menú de navegación" aria-expanded={open} onClick={() => setOpen(true)}><Menu /></button>
    <Modal open={open} onClose={() => setOpen(false)} title="Menú de navegación" className="mobile-menu"><div className="mobile-menu__brand"><img src="/img/pecos-logo.webp" width="48" height="48" alt="PECOS" /><span>ESCUELA PERUANA<br />DE COMBATE</span></div><nav aria-label="Navegación móvil">{links}<Link className="button" to={contactUrl()} onClick={() => setOpen(false)}>Solicita tu clase GRATIS</Link></nav><div className="mobile-menu__signature" aria-hidden="true">VENCE TUS<br /><span>LÍMITES.</span></div></Modal>
  </div></header>
}
