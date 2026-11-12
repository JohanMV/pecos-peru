import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { disciplines, venues } from '@/lib'
import { prepareMessage } from '../services/prepareMessage'
import type { ContactErrors, ContactFields } from '../types'
import type { FormEvent } from 'react'
export function useContactForm() {
  const [params] = useSearchParams()
  const [fields, setFields] = useState<ContactFields>({ name: '', discipline: '', venue: '', message: '', intent: 'prueba', plan: '' })
  const [errors, setErrors] = useState<ContactErrors>({})
  const [preview, setPreview] = useState('')
  const [copied, setCopied] = useState(false)
  const [selectionQuery, setSelectionQuery] = useState('')
  const currentQuery = params.toString()
  // Reconcile external CTA selections before committing the form; preserve the visitor's draft.
  if (selectionQuery !== currentQuery) {
    setSelectionQuery(currentQuery)
    const discipline = disciplines.find(item => item.name === params.get('discipline'))?.name
    const venue = venues.find(item => item.name === params.get('venue'))?.name
    setFields(previous => ({ ...previous, intent: params.get('intent') === 'informacion' ? 'informacion' : 'prueba', discipline: discipline ?? previous.discipline, venue: venue ?? previous.venue, plan: params.get('plan') ?? '' }))
    setErrors({})
  }
  function update<K extends keyof ContactFields>(key: K, value: ContactFields[K]) {
    setFields(previous => ({ ...previous, [key]: value }))
    if (key === 'name' || key === 'discipline' || key === 'venue') setErrors(previous => ({ ...previous, [key]: undefined }))
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const next: ContactErrors = {}
    if (fields.name.trim().length < 2) next.name = 'Escribe tu nombre (mínimo 2 caracteres).'
    if (fields.intent === 'prueba' && !fields.discipline) next.discipline = 'Elige la disciplina que te interesa.'
    if (fields.intent === 'prueba' && !fields.venue) next.venue = 'Elige una sede para tu consulta.'
    setErrors(next)
    const firstInvalid = Object.keys(next)[0]
    if (firstInvalid) { document.getElementById(`contact-${firstInvalid}`)?.focus(); return }
    setCopied(false)
    setPreview(prepareMessage(fields))
  }
  async function copy() {
    try { await navigator.clipboard.writeText(preview); setCopied(true) }
    catch { document.getElementById('message-preview')?.focus() }
  }
  return { fields, update, errors, submit, preview, closePreview: () => setPreview(''), copied, copy }
}
