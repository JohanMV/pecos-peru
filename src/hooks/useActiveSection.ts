import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
export function useActiveSection() {
  const { pathname } = useLocation()
  const [active, setActive] = useState('inicio')
  useEffect(() => {
    if (pathname !== '/') return
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section[id]'))
    const update = () => {
      const current = sections.filter(section => section.getBoundingClientRect().top < window.innerHeight * .4).at(-1)
      setActive(current?.id ?? 'inicio')
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [pathname])
  return pathname === '/nosotros' ? 'nosotros' : active
}
