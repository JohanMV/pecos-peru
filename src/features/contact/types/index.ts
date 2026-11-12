import type { Discipline, Intent, Venue } from '@/types'
export interface ContactFields { name: string; discipline: Discipline | ''; venue: Venue | ''; message: string; intent: Intent; plan: string }
export type ContactErrors = Partial<Record<'name' | 'discipline' | 'venue', string>>
