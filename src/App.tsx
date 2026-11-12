import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { HomePage } from '@/features/home/components/HomePage'
const AboutPage = lazy(() => import('@/features/about/components/AboutPage'))
export default function App() {
  return <BrowserRouter><Routes><Route element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path="nosotros" element={<Suspense fallback={<div className="page-loading" role="status">Preparando nuestra escuela…</div>}><AboutPage /></Suspense>} />
    <Route path="*" element={<div className="container not-found"><h1>FUERA DEL RING.</h1><p>Esta página no existe.</p><a className="button" href="/">Volver a Inicio</a></div>} />
  </Route></Routes></BrowserRouter>
}
