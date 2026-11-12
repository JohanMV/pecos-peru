import type { Discipline } from '@/types'
export interface TrainingSession { discipline: string; filters: Discipline[]; days: number[]; start: string; end: string; coach: string; period: 'Mañana' | 'Tarde / noche' }
