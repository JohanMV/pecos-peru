import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
export interface RevealProps { children: ReactNode; className?: string; delay?: number }
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={false} whileInView={reduced ? undefined : { y: [12, 0], opacity: [.7, 1] }} viewport={{ once: true, amount: .12 }} transition={{ duration: .4, delay }}>{children}</motion.div>
}
