import type { SVGProps } from 'react'
export interface WhatsAppIconProps extends SVGProps<SVGSVGElement> { size?: number }
export function WhatsAppIcon({ size = 24, ...props }: WhatsAppIconProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="M21 11.6a9 9 0 0 1-13.4 7.9L3 21l1.5-4.5A9 9 0 1 1 21 11.6Z" />
    <path d="m8 7 1.5 2.4-1 1.1c.8 1.7 2 2.9 3.7 3.7l1.1-1 2.4 1.5c-.4 1.6-1.4 2-2.9 1.5-3.3-1-5.9-3.6-6.9-6.9C5.5 7.8 6 6.8 7.6 6.5Z" />
  </svg>
}
