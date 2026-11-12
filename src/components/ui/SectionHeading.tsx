import type { ReactNode } from 'react'
export interface SectionHeadingProps { eyebrow: string; children: ReactNode; description?: ReactNode; id?: string; line?: boolean }
export function SectionHeading({ eyebrow, children, description, id, line = false }: SectionHeadingProps) {
  return <div className={`section-heading ${description ? 'section-heading--split' : ''}`}>
    <div><p className="eyebrow">{eyebrow}</p><h2 id={id}>{children}</h2>{line && <span className="red-rule" aria-hidden="true" />}</div>
    {description && <p className="section-heading__description">{description}</p>}
  </div>
}
