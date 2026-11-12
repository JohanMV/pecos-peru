import { useRef } from 'react'
import { X } from 'lucide-react'
import { useDialog } from '@/hooks/useDialog'
import type { ReactNode } from 'react'
export interface ModalProps { open: boolean; onClose: () => void; title: string; children: ReactNode; className?: string }
export function Modal({ open, onClose, title, children, className = '' }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null)
  useDialog(ref, open)
  return <dialog ref={ref} className={`modal ${className}`} aria-label={title} onCancel={onClose} onClick={e => { if (e.target === e.currentTarget) onClose() }}>
    <div className="modal__inner"><button type="button" className="icon-button modal__close" onClick={onClose} aria-label="Cerrar"><X /></button>{children}</div>
  </dialog>
}
