export type Discipline = 'Boxeo' | 'Muay Thai' | 'Kickboxing' | 'MMA' | 'Jiu-jitsu'
export type Venue = 'Marsano' | 'Higuereta'
export type Intent = 'prueba' | 'informacion'
export interface ContactSelection { intent?: Intent; discipline?: Discipline; venue?: Venue; plan?: string }
export interface DisciplineData { name: Discipline; image: string; description: string }
export interface VenueData { name: Venue; address: string; note: string; image: string }
