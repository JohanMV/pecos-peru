import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
export interface ButtonProps { to: string; children: ReactNode; variant?: 'primary' | 'secondary'; arrow?: boolean; className?: string; external?: boolean }
export function Button({ to, children, variant = 'primary', arrow = false, className = '', external = false }: ButtonProps) {
  const content = <>{children}{arrow && (external ? <ArrowUpRight size={21} aria-hidden="true" /> : <ArrowRight size={22} aria-hidden="true" />)}</>
  const classes = `button button--${variant} ${className}`
  return external ? <a className={classes} href={to} target="_blank" rel="noopener noreferrer">{content}</a> : <Link className={classes} to={to}>{content}</Link>
}
