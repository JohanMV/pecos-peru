import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar, Footer } from '@/components/layout'
export function MainLayout() {
  const location = useLocation()
  useEffect(() => {
    document.title = location.pathname === '/nosotros' ? 'Nuestra escuela | PECOS Perú' : 'PECOS Perú | Escuela Peruana de Combate'
    let frame = 0
    let attempts = 0
    const scroll = () => {
      if (!location.hash) { window.scrollTo(0, 0); return }
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)))
      if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' })
      else if (attempts++ < 30) frame = requestAnimationFrame(scroll)
    }
    frame = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(frame)
  }, [location])
  return <><a className="skip-link" href="#main">Saltar al contenido</a><Navbar /><main id="main"><Outlet /></main><Footer /></>
}
