export interface ButtonEmits {
  (emitName: 'click', event: MouseEvent): void
}

export interface ButtonProps {
  disabled?: boolean
  loading?: boolean
  nativeType?: HTMLButtonElement['type']
}
