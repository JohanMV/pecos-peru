# PECOS Perú · Implementación visual

Demo local en React 19 + TypeScript estricto, Vite, Tailwind CSS v4, React Router y Motion. Dirección fijada por las referencias del usuario: **Dark Cinematic Sports**. No se sorteó una dirección alternativa ni se reinterpretaron las maquetas.

## Páginas

- `/`: Hero, Disciplinas, Conoce PECOS, Horarios, Membresías, Sedes, Contacto, Footer.
- `/nosotros`: encabezado compacto, presentación, entrenadores, Comunidad y CTA breve; Footer compartido.
- Los accesos a secciones vuelven al Home desde Nosotros. El encabezado fijo no oculta el destino.
- Los filtros de horarios conservan el ancla; las tarjetas de disciplinas precargan el filtro correspondiente.
- Planes y sedes precargan intención y selección en el formulario.

## Fidelidad y recursos

Se conservaron los ocho WebP suministrados en `public/img`, sin recolorearlos ni modificar sus logotipos. Las capturas de secciones no se utilizan como fondos: títulos, botones, tablas, tarjetas y formulario son elementos HTML reales.

Barlow Condensed 800/900 italic e Inter 400/500/600/700 se sirven localmente, con cobertura latina y `font-display: swap`. Los colores, las proporciones, las cinco tarjetas fotográficas, las dos tarjetas de membresía y las composiciones de dos columnas siguen la guía. En móviles se adapta el encuadre del Hero, se desplazan las tarjetas por scroll-snap, se consulta el horario por día y se apila el formulario.

El logotipo de navegación se extrajo del Hero de referencia aportado, aislando el círculo sin redibujarlo. Conviene sustituir este recorte de resolución limitada por el archivo oficial de alta calidad antes del lanzamiento. Los acentos rojos proceden de una pequeña zona decorativa del fondo limpio aportado.

Se generaron **once fotografías provisionales** mediante la herramienta integrada de ImageGen, optimizadas con Sharp en WebP dentro de `public/img`:

| Recurso | Archivo |
| --- | --- |
| Ring conceptual para Higuereta y foto secundaria de escuela | `sede-higuereta-demo.webp` |
| Fachada conceptual para Marsano | `sede-marsano-demo.webp` |
| Membresía VIP | `membresia-vip-demo.webp` |
| Membresía Super VIP | `membresia-super-vip-demo.webp` |
| Guantes del panel de horarios | `guantes-horarios-demo.webp` |
| Retratos ilustrativos de las cinco disciplinas | `entrenador-*-demo.webp` |
| Escena grupal de comunidad | `comunidad-demo.webp` |

Las sedes y la escena grupal se identifican como imágenes de demo. Los retratos llevan «Referencia visual»; no representan a ninguno de los profesores documentados. Sus nombres se presentan como equipo documental sujeto a confirmación. No se usan testimonios, resultados, precios, credenciales ni servicios inventados.

## Datos y contacto

- Higuereta: **Jirón Barlovento 135, Santiago de Surco, Lima**.
- Marsano: **Av. Santiago de Surco 4030, Santiago de Surco, Lima**.
- Google Maps recibe la dirección exacta codificada mediante su URL de búsqueda; no se inventan coordenadas.
- Horarios de Marsano transcritos exclusivamente de la guía y rotulados como referenciales. Cada bloque de una hora conserva su profesor. Las sesiones conjuntas de Muay Thai/Kickboxing no se duplican.
- Higuereta muestra estado de consulta. Las franjas ambiguas de Jiu-jitsu se omiten hasta validación.
- VIP y Super VIP no muestran precios históricos como vigentes.
- El formulario valida nombre, disciplina y sede en modo prueba; prepara un mensaje local y permite copiarlo.
- **No se abre wa.me ni se envían datos**: la guía indica que ambos números requieren validación. La demo explica esta limitación antes y después de preparar la consulta. No confirma reservas.
- No se guardan datos personales ni se agregan CMS, checkout, backend o analítica.

## Validación

`scripts/verify.mjs` utiliza Edge headless con Playwright. Revisa ambas rutas a **1440, 1024, 768, 390 y 320 px**, imágenes, fuentes, encabezados, desbordamiento, orden de secciones y flujos de interacción. Guarda informe y 24 capturas de secciones a 1440/390 en `artifacts/qa`. Se revisaron visualmente las capturas por sección.

También se ejecutan `pnpm lint` y `pnpm build`. El directorio `dist` contiene la compilación estática y una regla `_redirects` para alojamientos compatibles con SPA.

Las reglas genéricas de la skill de diseño que prohíben etiquetas superiores, numeración, líneas, cajas y palabras rojas se exceptúan expresamente porque estos elementos están exigidos por las maquetas y la guía del usuario. El inspector no sustituye las comprobaciones del formulario, de datos ni la comparación visual.

## Pendientes para producción

Validar horarios, números WhatsApp y elegibilidad de clases; confirmar planes y condiciones; aportar fotografías reales de sedes, retratos autorizados y galería real; reemplazar el recorte del logo por el original. Los recursos generados son provisionales y no documentan instalaciones ni personas reales. Esta entrega no publica la web en un dominio.

## Registro de prompts

Herramienta: **ImageGen integrada**, sin CLI ni API key. Los prompts pidieron fotografías independientes, sin interfaz ni textos incrustados. Referencia de estilo y marca: `/img/Hero_fondo.webp` (excepto la primera propuesta de ring, corregida después con la referencia).

Base compartida para fachada, membresías, guantes, retratos y comunidad:

> Use case: photorealistic-natural. Generate a standalone clean photograph for a PECOS Peru martial arts school demo website, not UI, not a collage, no text overlays. Cinematic realistic sports editorial photography, natural skin and detailed materials, black gym, white overhead lights and subtle red edge light, black/red/charcoal palette consistent with supplied PECOS hero photograph. Use the EXACT PECOS round white geometric twin-arrow monogram inside a red circle from the reference wherever branding is needed; do not invent different logos.

Especificaciones añadidas a la base:

1. **Fachada**: Landscape 2:1 architectural photo of a contemporary combat gym street facade in Lima: big matte black fascia sign reading PECOS in large white condensed letters, smaller ESCUELA PERUANA DE COMBATE beneath, red underline, broad glass windows, gray concrete, a tree at far right. No people.
2. **VIP**: Landscape 3:2. Athletic Peruvian man boxing in black PECOS training shirt and black boxing gloves with red trim. Man occupies rightmost half, guarded stance, punch toward right. LEFT HALF mostly empty almost black gym space for separate HTML text. Dark gym and red ring ropes behind. Waist up.
3. **Super VIP**: Landscape 3:2. Athletic Peruvian woman in black PECOS short sleeve training shirt with black boxing gloves edged in red, high ponytail. Woman occupies rightmost half, serious focused guarded boxing stance, facing right. LEFT HALF mostly empty almost black gym space for separate HTML text. Dark gym and red ring ropes behind. Waist up.
4. **Guantes**: Portrait 3:4 still life of two black leather boxing gloves with red trim hanging by their laces from a gym ring corner, PECOS name in white on wrist patches, moody soft ceiling lights blurred behind, realistic leather detail, no people.
5. **Boxeo**: Portrait 3:4. Fictional Peruvian male boxing coach aged 42, short hair, clean shaven, muscular athletic build, standing arms crossed in black PECOS short sleeve shirt, calm serious expression, red boxing ropes softly blurred behind. Head to waist, no caption, NOT a real named trainer.
6. **Muay Thai**: Portrait 3:4. Fictional Peruvian female Muay Thai coach aged 32, long black ponytail, athletic build, standing arms crossed in black PECOS short sleeve shirt, confident calm expression, dark gym softly blurred behind. Head to waist, no caption, NOT a real named trainer.
7. **Kickboxing**: Portrait 3:4. Fictional Peruvian male kickboxing coach aged 34, short curly black hair and short beard, muscular build, standing arms crossed in black PECOS short sleeve shirt, red boxing ropes softly blurred behind. Head to waist, no caption, NOT a real named trainer.
8. **MMA**: Portrait 3:4. Fictional Peruvian male MMA coach aged 36, cropped black hair, clean shaven, muscular build, standing arms crossed in black PECOS short sleeve shirt, dark cage softly blurred behind. Head to waist, no caption, NOT a real named trainer.
9. **Jiu-jitsu**: Portrait 3:4. Fictional Peruvian male jiu-jitsu coach aged 38, dark hair and close beard, athletic build, standing arms crossed in white gi with PECOS round patch, dark dojo softly blurred behind. Head to waist, no caption, NOT a real named trainer.
10. **Comunidad**: Landscape 3:2 candid photo of mixed group of eight adult Peruvian men and women in black PECOS training clothing at the end of a boxing class, smiling naturally standing together inside black gym with red ring ropes, warm human atmosphere with restrained cinematic red lighting. Fictional demonstration scene, not a testimonial.

Prompt del ring inicial:

> Use case: photorealistic-natural. Create a clean photographic asset for PECOS Escuela Peruana de Combate demo website, NOT a website mockup. Landscape 3:2. Dark cinematic realistic combat gym interior in Lima, a boxing ring with red ropes and black padding centered, black concrete walls and floor, overhead white strip lights, black and red heavy bags at right, tasteful red structural columns. On ring apron the word PECOS in white condensed uppercase, circular red/white gym emblem on rear wall. Empty, no people. Match the black/red/charcoal sports editorial photographs in the attached PECOS reference. Professional architectural sports photography, realistic materials, no extra typography or UI. This is an explicitly provisional conceptual facility image.

El ring se corrigió con ImageGen conservando arquitectura, encuadre, luz y equipamiento, reemplazando únicamente el emblema inventado por el símbolo PECOS de la referencia. Se descartó la primera versión y se utiliza la corregida.
