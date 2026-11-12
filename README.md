# PECOS Perú

Web de la Escuela Peruana de Combate construida a partir de las referencias visuales entregadas. Dos vistas React: Home (`/`) y Nosotros (`/nosotros`).

## Desarrollo

Requisitos: Node 24 y pnpm 11.

```powershell
pnpm install
pnpm dev
```

## Verificación y producción

```powershell
pnpm lint
pnpm build
pnpm preview
```

La compilación se genera en `dist`. El alojamiento debe redirigir las rutas de la SPA a `index.html`; se incluye `_redirects` para proveedores compatibles.

Con el servidor de desarrollo activo, las pruebas de navegador usan Microsoft Edge instalado:

```powershell
pnpm test:e2e
```

El informe queda en `artifacts/qa/report.json`, junto a las capturas. Las pruebas verifican las dos rutas a 1440, 1024, 768, 390 y 320 px y los flujos de navegación, horarios, formulario y galería.

## Organización

- `src/components/ui`: botones, encabezados, modal y transición compartidos.
- `src/components/layout`: navegación y pie compartidos.
- `src/components/sections`: secciones de presentación.
- `src/features`: Home, Nosotros, horarios y contacto; hooks, datos y servicios separados.
- `src/styles`: tokens Tailwind v4, fuentes locales y estilos por área.
- `src/lib/content.ts`: disciplinas, sedes, navegación y enlaces de consulta.
- `public/img`: fotografías proporcionadas y once recursos generados en WebP.

## Estado de demo

El formulario prepara una consulta y ofrece vista previa y copia. No abre WhatsApp hasta validar los números de las sedes. Los horarios documentados de Marsano son referenciales; Higuereta y las franjas ambiguas de Jiu-jitsu muestran consulta pendiente. No se publican tarifas históricas ni testimonios ficticios.

Las fotografías generadas de entrenadores y sedes son provisionales y están identificadas. Los retratos no se atribuyen a personas reales. El logo se extrajo de la referencia entregada; reemplazarlo por el original de alta resolución antes del lanzamiento.

El informe de implementación, los pendientes y el registro de prompts están en [docs/visual-report.md](docs/visual-report.md).
