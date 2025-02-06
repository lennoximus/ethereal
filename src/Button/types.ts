export interface ButtonEmits {
  (emitName: 'click', event: MouseEvent): void
}

export interface ButtonProps {
  /**
   * Represents whether the button is in disabled state. Button won't be clickable in this state.
   * @default false
   */
  disabled?: boolean
  /**
   * Icon configuration. Includes sizes.
   * @default {height: 16; width: 16}
   */
  icon?: {
    height: number | string
    width: number | string
  }
  /**
   * Represents whether the button is in loading state. Button won't be clickable in this state.
   * @default false
   */
  loading?: boolean
  /**
   * The type of the button. Relates to native posible HTML button types variants.
   * @default 'button'
   */
  nativeType?: HTMLButtonElement['type']
}

export interface ButtonSlots {
  appendIcon: () => any
  default: () => any
  prependIcon: () => any
}
