import { Hero, Disciplines, SchoolIntro, Memberships, Venues } from '@/components/sections'
import { ScheduleSection } from '@/features/schedule/components/ScheduleSection'
import { ContactSection } from '@/features/contact/components/ContactSection'
export function HomePage() {
  return <><Hero /><Disciplines /><SchoolIntro /><ScheduleSection /><Memberships /><Venues /><ContactSection /></>
}
