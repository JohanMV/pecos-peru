import type { ContactFields } from '../types'
export function prepareMessage(fields: ContactFields) {
  const introduction = `Hola PECOS, soy ${fields.name.trim()}.`
  const request = fields.intent === 'prueba'
    ? `Quisiera coordinar mi clase de prueba gratuita de ${fields.discipline} en la sede ${fields.venue}.`
    : `Quisiera información${fields.plan ? ` sobre el plan ${fields.plan}` : ''}${fields.discipline ? ` de ${fields.discipline}` : ''}${fields.venue ? ` en la sede ${fields.venue}` : ''}.`
  return `${introduction} ${request}${fields.message.trim() ? ` ${fields.message.trim()}` : ''}`
}
