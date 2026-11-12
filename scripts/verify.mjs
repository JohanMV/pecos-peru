import { chromium, expect } from '@playwright/test'
import assert from 'node:assert/strict'
import { mkdir, writeFile } from 'node:fs/promises'
import sharp from 'sharp'

const root = 'http://127.0.0.1:5173'
const out = 'artifacts/qa'
await mkdir(out, { recursive: true })
const browser = await chromium.launch({ channel: 'msedge', headless: true })
const report = { viewports: [], checks: [], errors: [], screenshots: [] }
const check = (name, condition) => { assert.ok(condition, name); report.checks.push(name) }
try {
  for (const width of [1440, 1024, 768, 390, 320]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: 'reduce' })
    page.on('pageerror', error => report.errors.push(error.message))
    for (const route of ['/', '/nosotros']) {
      await page.goto(root + route)
      await page.locator('h1').waitFor()
      await page.evaluate(async () => {
        document.querySelectorAll('img').forEach(img => img.loading = 'eager')
        await Promise.all(Array.from(document.images).map(img => img.decode().catch(() => {})))
        await document.fonts.ready
      })
      const metrics = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth,
        brokenImages: Array.from(document.images).filter(img => !img.complete || !img.naturalWidth).map(img => img.src),
        h1: document.querySelectorAll('h1').length,
        sections: Array.from(document.querySelectorAll('main > section')).map(section => section.id),
        displayFont: document.fonts.check('900 italic 64px "Barlow Condensed"'),
      }))
      check(`${route} at ${width}px has no horizontal overflow`, !metrics.overflow)
      check(`${route} at ${width}px has no broken images`, metrics.brokenImages.length === 0)
      check(`${route} at ${width}px has one h1 and a loaded display font`, metrics.h1 === 1 && metrics.displayFont)
      if (route === '/') check(`Home section order at ${width}px`, metrics.sections.join(',') === 'inicio,disciplinas,conoce-pecos,horarios,planes,sedes,contacto')
      report.viewports.push({ width, route, ...metrics })
      const label = route === '/' ? 'home' : 'nosotros'
      if (width === 1440 || width === 390) {
        await page.evaluate(() => window.scrollTo(0, 0))
        const fullPath = `${out}/${label}-${width}-full.png`
        await page.screenshot({ path: fullPath, fullPage: true })
        const boxes = await page.locator('main > section').evaluateAll(sections => sections.map((section, index) => {
          const rect = section.getBoundingClientRect()
          return { name: section.id || `section-${index}`, top: Math.floor(rect.top + scrollY), height: Math.ceil(rect.height) }
        }))
        for (const [index, box] of boxes.entries()) {
          const path = `${out}/${label}-${width}-${index}-${box.name}.webp`
          const top = index === 0 ? 0 : box.top
          const height = box.height + (index === 0 ? box.top : 0)
          await sharp(fullPath).extract({ left: 0, top, width, height }).webp({ quality: 88 }).toFile(path)
          report.screenshots.push(path)
        }
      }
    }
    if (width === 390) {
      await page.getByRole('button', { name: 'Abrir menú de navegación' }).click()
      check('Mobile menu opens and locks background scroll', await page.evaluate(() => document.body.style.overflow === 'hidden'))
      await page.keyboard.press('Escape')
      check('Escape closes menu and restores focus', await page.getByRole('button', { name: 'Abrir menú de navegación' }).evaluate(button => button === document.activeElement))
      await page.getByRole('button', { name: 'Abrir menú de navegación' }).click()
      await page.getByRole('navigation', { name: 'Navegación móvil' }).getByRole('link', { name: 'Horarios', exact: true }).click()
      await page.waitForURL('**/#horarios')
      await page.locator('#horarios').waitFor()
      await expect.poll(() => page.locator('#horarios').evaluate(section => Math.round(section.getBoundingClientRect().top))).toBe(80)
      check('Cross-route mobile anchor reaches Home schedules', await page.locator('#horarios').isVisible())
    }
    await page.close()
  }
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' })
  await page.goto(root)
  check('Initial schedule is Marsano and Boxeo', await page.getByRole('button', { name: 'Sede Marsano' }).getAttribute('aria-pressed') === 'true' && await page.getByRole('button', { name: 'Boxeo', exact: true }).getAttribute('aria-pressed') === 'true')
  check('No trainers or community exist on Home', await page.locator('#entrenadores, #comunidad').count() === 0)
  await page.getByRole('link', { name: 'Consultar horarios de Muay Thai', exact: true }).click()
  await expect(page.getByRole('button', { name: 'Muay Thai', exact: true })).toHaveAttribute('aria-pressed', 'true')
  check('Discipline card preselects schedule filter', await page.getByRole('button', { name: 'Muay Thai', exact: true }).getAttribute('aria-pressed') === 'true')
  check('Joint morning classes are not duplicated', await page.locator('.schedule-table .schedule-time').count() === 28)
  await page.getByRole('button', { name: 'Sede Higuereta' }).click()
  await page.locator('.schedule-empty').waitFor()
  check('Higuereta has an honest empty state', await page.locator('.schedule-empty').innerText().then(text => text.includes('Consulta los horarios de esta sede')))
  await page.getByRole('button', { name: 'Sede Marsano' }).click()
  await page.getByRole('button', { name: 'Jiu-jitsu', exact: true }).click()
  await page.locator('.schedule-empty').waitFor()
  check('Ambiguous jiu-jitsu hours are withheld', await page.locator('.schedule-empty').isVisible())
  check('Changing a schedule filter retains the section anchor', new URL(page.url()).hash === '#horarios')
  await page.getByRole('link', { name: 'Consultar plan SUPER VIP', exact: true }).click()
  await expect(page.getByRole('button', { name: 'Información y planes', exact: true })).toHaveAttribute('aria-pressed', 'true')
  check('Plan CTA preselects information mode', await page.getByRole('button', { name: 'Información y planes', exact: true }).getAttribute('aria-pressed') === 'true')
  check('Plan selection is retained', (await page.locator('.plan-selection').innerText()).includes('SUPER VIP'))
  await page.getByRole('button', { name: 'Clase de prueba GRATIS', exact: true }).click()
  await page.getByRole('button', { name: 'Solicitar clase gratis por WhatsApp', exact: true }).click()
  await expect(page.locator('#contact-name')).toBeFocused()
  check('Required fields validate with focused first error', await page.locator('#contact-name').evaluate(element => element === document.activeElement))
  await page.getByLabel('Nombre', { exact: true }).fill('Johan')
  await page.getByLabel('Disciplina', { exact: true }).selectOption('Boxeo')
  await page.getByLabel('Sede', { exact: true }).selectOption('Marsano')
  await page.getByLabel('Mensaje (opcional)', { exact: true }).fill('¿Qué debo llevar?')
  await page.getByRole('button', { name: 'Solicitar clase gratis por WhatsApp', exact: true }).click()
  const preview = page.getByRole('dialog', { name: 'Vista previa de tu consulta' })
  await preview.waitFor()
  check('Form prepares accurate local message', (await page.locator('#message-preview').inputValue()) === 'Hola PECOS, soy Johan. Quisiera coordinar mi clase de prueba gratuita de Boxeo en la sede Marsano. ¿Qué debo llevar?')
  await page.keyboard.press('Escape')
  check('Dialog closes with Escape', await preview.isHidden())
  await page.goto(root + '/nosotros')
  await page.locator('#comunidad').waitFor()
  await page.locator('.community__photo').first().click()
  check('Community photo opens accessible lightbox', await page.getByRole('dialog', { name: 'Imagen ampliada de la comunidad' }).isVisible())
  await page.keyboard.press('Escape')
  await page.close()
  check('No browser runtime errors', report.errors.length === 0)
} finally {
  await writeFile(`${out}/report.json`, JSON.stringify(report, null, 2))
  await browser.close()
}
console.log(`${report.checks.length} checks passed. ${report.screenshots.length} section screenshots saved. Report: ${out}/report.json`)
