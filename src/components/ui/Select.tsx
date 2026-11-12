import * as RadixSelect from '@radix-ui/react-select'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import type { AriaAttributes, ReactNode } from 'react'

export interface SelectOption { value: string; label: string }
export interface SelectProps extends AriaAttributes {
  id: string
  name?: string
  value: string
  onValueChange: (value: string) => void
  options: SelectOption[]
  required?: boolean
  icon?: ReactNode
  className?: string
}
export function Select({ id, name, value, onValueChange, options, required, icon, className = '', ...aria }: SelectProps) {
  return <RadixSelect.Root name={name} value={value || '__empty'} onValueChange={next => onValueChange(next === '__empty' ? '' : next)} required={required}>
    <RadixSelect.Trigger id={id} className={`pecos-select ${className}`} {...aria}>
      {icon}<RadixSelect.Value /><RadixSelect.Icon className="pecos-select__chevron"><ChevronDown size={18} aria-hidden="true" /></RadixSelect.Icon>
    </RadixSelect.Trigger>
    <RadixSelect.Portal><RadixSelect.Content className="pecos-select-menu" position="popper" sideOffset={6} collisionPadding={12}>
      <RadixSelect.ScrollUpButton className="pecos-select-menu__scroll"><ChevronUp size={18} /></RadixSelect.ScrollUpButton>
      <RadixSelect.Viewport className="pecos-select-menu__viewport">{options.map(option => <RadixSelect.Item className="pecos-select-option" key={option.value} value={option.value || '__empty'}>
        <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText><RadixSelect.ItemIndicator className="pecos-select-option__check"><Check size={17} aria-hidden="true" /></RadixSelect.ItemIndicator>
      </RadixSelect.Item>)}</RadixSelect.Viewport>
      <RadixSelect.ScrollDownButton className="pecos-select-menu__scroll"><ChevronDown size={18} /></RadixSelect.ScrollDownButton>
    </RadixSelect.Content></RadixSelect.Portal>
  </RadixSelect.Root>
}
